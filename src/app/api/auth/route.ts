import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { query } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()
    
    const users = await query<{ username: string; team: string; role: string }>(
      'SELECT username, team, role FROM users WHERE username = $1 AND password = $2',
      [username, password]
    )
    
    const user = users[0]
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const session = {
      id: Math.random().toString(36).substring(7),
      username: user.username,
      team: user.team,
      role: user.role,
      createdAt: new Date().toISOString()
    }

    const response = NextResponse.json({ 
      success: true,
      user: {
        username: user.username,
        team: user.team,
        role: user.role
      }
    })

    response.cookies.set('session', JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    })

    return response
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    
    if (!session) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const sessionData = JSON.parse(session.value)
    return NextResponse.json({ 
      authenticated: true,
      user: {
        username: sessionData.username,
        team: sessionData.team,
        role: sessionData.role
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    )
  }
} 