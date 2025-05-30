'use client';
import React, { useState, useEffect } from 'react';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { useRouter } from 'next/navigation';

interface TeamProgress {
    team: string;
    currentStep: number;
    completedHints: number[];
    submissions: {
        hintNumber: number;
        timestamp: string;
        imageUrl: string;
    }[];
}

export default function AdminPage() {
    const [teams, setTeams] = useState<TeamProgress[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch('/api/auth');
                const data = await res.json();
                
                if (!data.authenticated || data.user.role !== 'admin') {
                    router.push('/login');
                    return;
                }
                
                fetchTeams();
            } catch (error) {
                console.error('Auth check failed:', error);
                router.push('/login');
            }
        }
        
        checkAuth();
    }, [router]);

    async function fetchTeams() {
        try {
            const res = await fetch('/api/admin/teams');
            const data = await res.json();
            setTeams(data.teams);
        } catch (error) {
            console.error('Failed to fetch teams:', error);
        } finally {
            setLoading(false);
        }
    }

    async function handleApproveSubmission(team: string, hintNumber: number) {
        try {
            await fetch('/api/admin/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    team,
                    hintNumber,
                    action: 'approve'
                }),
            });
            
            fetchTeams(); // Refresh the data
        } catch (error) {
            console.error('Failed to approve submission:', error);
        }
    }

    async function handleRejectSubmission(team: string, hintNumber: number) {
        try {
            await fetch('/api/admin/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    team,
                    hintNumber,
                    action: 'reject'
                }),
            });
            
            fetchTeams(); // Refresh the data
        } catch (error) {
            console.error('Failed to reject submission:', error);
        }
    }

    if (loading) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6 text-center">
                        <p>Loading...</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
            <div className="max-w-6xl mx-auto px-6 space-y-8">
                <SectionHeading>Admin Dashboard</SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Teams Overview */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Teams Progress</h2>
                        <div className="space-y-4">
                            {teams.map(team => (
                                <div 
                                    key={team.team}
                                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                                        selectedTeam === team.team 
                                            ? 'bg-white/20' 
                                            : 'bg-white/5 hover:bg-white/10'
                                    }`}
                                    onClick={() => setSelectedTeam(team.team)}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{team.team}</span>
                                        <span className="text-sm text-white/70">
                                            Step {team.currentStep + 1}
                                        </span>
                                    </div>
                                    <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-[#10B981] transition-all"
                                            style={{ 
                                                width: `${(team.completedHints.length / 2) * 100}%` 
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submissions */}
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                        <h2 className="text-xl font-bold mb-4">
                            {selectedTeam ? `${selectedTeam} Submissions` : 'Select a Team'}
                        </h2>
                        {selectedTeam && (
                            <div className="space-y-4">
                                {teams
                                    .find(t => t.team === selectedTeam)
                                    ?.submissions.map(submission => (
                                        <div key={submission.timestamp} className="bg-white/5 rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="font-medium">
                                                    Hint #{submission.hintNumber + 1}
                                                </span>
                                                <span className="text-sm text-white/70">
                                                    {new Date(submission.timestamp).toLocaleString()}
                                                </span>
                                            </div>
                                            <img 
                                                src={submission.imageUrl} 
                                                alt={`Submission for hint ${submission.hintNumber + 1}`}
                                                className="w-full h-48 object-cover rounded-lg mb-2"
                                            />
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleApproveSubmission(selectedTeam, submission.hintNumber)}
                                                    className="flex-1 py-2 bg-[#10B981] hover:bg-[#0f9f76] rounded-lg text-white font-medium transition"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleRejectSubmission(selectedTeam, submission.hintNumber)}
                                                    className="flex-1 py-2 bg-[#EF4444] hover:bg-[#DC2626] rounded-lg text-white font-medium transition"
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
} 