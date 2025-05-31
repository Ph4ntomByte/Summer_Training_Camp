import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { cookies } from 'next/headers';

export async function GET() {
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

        const teams = await query<{
            team: string;
            current_step: number;
        }>(
            'SELECT team, current_step FROM team_progress ORDER BY current_step DESC'
        );

        const submissions = await query<{
            team: string;
            hint_number: number;
            image_url: string;
            created_at: string;
            status: string;
        }>(
            'SELECT team, hint_number, image_url, created_at, status FROM submissions'
        );

        const teamsWithSubmissions = teams.map(team => ({
            team: team.team,
            current_step: team.current_step,
            submissions: submissions
                .filter(s => s.team === team.team)
                .map(s => ({
                    hint_number: s.hint_number,
                    image_url: s.image_url,
                    created_at: s.created_at,
                    status: s.status
                }))
        }));

        return NextResponse.json({ teams: teamsWithSubmissions });
    } catch (error) {
        console.error('Failed to fetch teams:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 