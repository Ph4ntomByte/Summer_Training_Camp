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
    const file = formData.get('file') as Blob | null
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
    }

    const originalName = (file as any).name as string | undefined
    const filename = `${Date.now()}-${originalName ?? 'upload'}`
    const arrayBuf = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuf)
    const contentType = file.type || 'application/octet-stream'
    const s3Key = `hunt/${filename}`

    await uploadToS3('neon-lotus-uploads', s3Key, buffer, contentType)
    await query(
      `INSERT INTO hunt_uploads (filename, s3_key, content_type)
       VALUES ($1, $2, $3)`,
      [filename, s3Key, contentType]
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}