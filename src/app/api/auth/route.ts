import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { query } from '@/lib/db'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    const users = await query<{
      username: string
      team: string
      role: string
      password: string
    }>(
      'SELECT username, team, role, password FROM users WHERE username = $1',
      [username]
    )

    const user = users[0]
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const session = {
      id: Math.random().toString(36).substring(7),
      username: user.username,
      ...(user.role !== 'admin' && { team: user.team }),
      role: user.role,
      createdAt: new Date().toISOString(),
    }

    const response = NextResponse.json({
      success: true,
      user: {
        username: user.username,
        ...(user.role !== 'admin' && { team: user.team }),
        role: user.role,
      },
    })

    response.cookies.set('session', JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')

    if (!sessionCookie) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const sessionData = JSON.parse(sessionCookie.value)
    return NextResponse.json({
      authenticated: true,
      user: {
        username: sessionData.username,
        ...(sessionData.role !== 'admin' && { team: sessionData.team }),
        role: sessionData.role,
      },
    })
  } catch {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }
}
