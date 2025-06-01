import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const cookieStore = await cookies();
        const session = cookieStore.get('session');
        
        if (!session) {
            return NextResponse.json(
                { error: 'Not authenticated' },
                { status: 401 }
            );
        }

        const sessionData = JSON.parse(session.value);
        if (sessionData.role !== 'admin') {
            return NextResponse.json(
                { error: 'Not authorized' },
                { status: 403 }
            );
        }

        const { team, hint_number, action } = await request.json();

        if (!team || hint_number === undefined || !action) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (action === 'approve') {
            await query(
                'UPDATE submissions SET status = $1 WHERE team = $2 AND hint_number = $3',
                ['approved', team, hint_number]
            );

        } else if (action === 'reject') {
            await query(
                'UPDATE submissions SET status = $1 WHERE team = $2 AND hint_number = $3',
                ['rejected', team, hint_number]
            );
        } else {
            return NextResponse.json(
                { error: 'Invalid action' },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to process submission:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 