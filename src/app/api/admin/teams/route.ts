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
            completed_hints: number[];
        }>(
            'SELECT team, current_step, completed_hints FROM team_progress'
        );

        const submissions = await query<{
            team: string;
            hint_number: number;
            image_url: string;
            timestamp: string;
            status: string;
        }>(
            'SELECT team, hint_number, image_url, timestamp, status FROM submissions ORDER BY timestamp DESC'
        );

        const teamsWithSubmissions = teams.map(team => ({
            team: team.team,
            currentStep: team.current_step,
            completedHints: team.completed_hints,
            submissions: submissions
                .filter(s => s.team === team.team)
                .map(s => ({
                    hintNumber: s.hint_number,
                    imageUrl: s.image_url,
                    timestamp: s.timestamp,
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