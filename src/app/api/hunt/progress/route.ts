import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const team = searchParams.get('team')
    if (!team) {
      return NextResponse.json({ error: 'Team is required' }, { status: 400 })
    }

    // Look up current_step for this team
    const rows = await query<{ current_step: number }>(
      'SELECT current_step FROM team_progress WHERE team = $1',
      [team]
    )

    // If no row exists yet, insert it with current_step = 0
    if (rows.length === 0) {
      await query(
        'INSERT INTO team_progress (team, current_step) VALUES ($1, 0)',
        [team]
      )
      return NextResponse.json({ currentStep: 0 })
    }

    return NextResponse.json({ currentStep: rows[0].current_step })
  } catch (err) {
    console.error('GET /api/hunt/progress error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const { team, currentStep } = (await request.json()) as {
      team: string
      currentStep: number
    }

    if (typeof team !== 'string' || typeof currentStep !== 'number') {
      return NextResponse.json(
        { error: 'Invalid payload' },
        { status: 400 }
      )
    }

    // Upsert: if row exists, overwrite current_step; otherwise, insert new
    await query(
      `INSERT INTO team_progress (team, current_step)
         VALUES ($1, $2)
       ON CONFLICT (team) DO UPDATE
         SET current_step = EXCLUDED.current_step`,
      [team, currentStep]
    )

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('POST /api/hunt/progress error:', err)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}