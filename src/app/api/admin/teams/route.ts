import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { query } from '@/lib/db'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')
    if (!sessionCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }
    const session = JSON.parse(sessionCookie.value)
    if (session.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const rows = await query<{ team: string; current_step: number }>(
      `SELECT team, current_step FROM team_progress ORDER BY team`
    )

    return NextResponse.json({ teams: rows })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to fetch teams' }, { status: 500 })
  }
}