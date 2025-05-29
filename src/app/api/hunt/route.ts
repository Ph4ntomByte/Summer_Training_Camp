/* eslint-disable  @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { uploadToS3 } from '@/lib/s3'
import { query } from '@/lib/db'

export const config = {
    api: {
        bodyParser: false,
    },
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData()

        const team = formData.get('team')
        if (typeof team !== 'string' || !team) {
            return NextResponse.json(
                { error: 'No team provided' },
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

        const originalName = (file as any).name as string | undefined
        const filename = `${Date.now()}-${originalName ?? 'upload'}`

        const arrayBuf = await file.arrayBuffer()
        const data = Buffer.from(arrayBuf)

        const contentType = file.type || 'application/octet-stream'
        await uploadToS3(
            'neon-lotus-uploads',
            `hunt/${filename}`,
            data,
            contentType
        )

        await query(
            `INSERT INTO scavenger_submissions (team, s3_key) VALUES ($1, $2)`,
            [team, filename]
        )

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { error: 'Upload and save failed' },
            { status: 500 }
        )
    }
}