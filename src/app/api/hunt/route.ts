/* eslint-disable  @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { cookies } from 'next/headers'

export const config = {
    api: {
        bodyParser: false,
    },
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData()

        // Check authentication
        const cookieStore = await cookies()
        const session = cookieStore.get('session')
        
        if (!session) {
            return NextResponse.json(
                { error: 'Not authenticated' },
                { status: 401 }
            )
        }

        const sessionData = JSON.parse(session.value)
        const team = sessionData.team

        if (!team) {
            return NextResponse.json(
                { error: 'No team found in session' },
                { status: 400 }
            )
        }

        const file = formData.get('file') as Blob | null
        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 }
            )
        }

        const hintNumber = formData.get('hintNumber')
        if (!hintNumber) {
            return NextResponse.json(
                { error: 'No hint number provided' },
                { status: 400 }
            )
        }

        try {
            // Convert file to base64
            const arrayBuf = await file.arrayBuffer()
            const base64 = Buffer.from(arrayBuf).toString('base64')
            const imageData = `data:${file.type};base64,${base64}`

            console.log('Attempting database insert with:', {
                team,
                hintNumber,
                imageDataLength: imageData.length
            })

            // First check if table exists
            const tableCheck = await query(
                `SELECT EXISTS (
                    SELECT FROM information_schema.tables 
                    WHERE table_name = 'submissions'
                )`
            )
            console.log('Table exists check:', tableCheck)

            // Save to database
            const result = await query(
                `INSERT INTO submissions (team, hint_number, image_url, status) 
                 VALUES ($1, $2, $3, $4)
                 ON CONFLICT (team, hint_number) 
                 DO UPDATE SET image_url = $3, status = $4
                 RETURNING *`,
                [team, hintNumber, imageData, 'pending']
            )
            console.log('Database insert result:', result)

            return NextResponse.json({ success: true })
        } catch (dbError) {
            console.error('Database operation error:', dbError)
            return NextResponse.json(
                { error: 'Database operation failed: ' + (dbError instanceof Error ? dbError.message : 'Unknown error') },
                { status: 500 }
            )
        }
    } catch (err) {
        console.error('Hunt submission error:', err)
        return NextResponse.json(
            { error: 'Upload and save failed: ' + (err instanceof Error ? err.message : 'Unknown error') },
            { status: 500 }
        )
    }
}