import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')
  const isAuthPage = request.nextUrl.pathname === '/login'
  const isScavengerHuntPage = request.nextUrl.pathname.startsWith('/scavenger-hunt')

  // Redirect to login if accessing scavenger hunt without session
  if (isScavengerHuntPage && !session) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to scavenger hunt if accessing login with valid session
  if (isAuthPage && session) {
    return NextResponse.redirect(new URL('/scavenger-hunt', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/scavenger-hunt/:path*']
} 