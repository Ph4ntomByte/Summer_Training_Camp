import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const team = url.searchParams.get('team')
  const hintNumberRaw = url.searchParams.get('hintNumber')
  if (!team || hintNumberRaw === null) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  }
  const hintNumber = parseInt(hintNumberRaw, 10)

  const sessionCookie = (await cookies()).get('session')
  if (!sessionCookie) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const rows = await query<{ status: string }>(
    'SELECT status FROM submissions WHERE team = $1 AND hint_number = $2',
    [team, hintNumber],
  )
  if (rows.length === 0) {
    return NextResponse.json({ status: 'pending' })
  }
  return NextResponse.json({ status: rows[0].status })
}