'use client';
import React, { useState, useRef, FormEvent, useEffect } from 'react';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { useRouter } from 'next/navigation';

const hints = [
    '🔍 Hint #1: Find the lotus‐shaped mural in the courtyard and take a clear photo.',
    '🔍 Hint #2: Locate the mosaic fountain by the east gate and snap a picture.',
];

export default function ScavengerHuntPage() {
    const [step, setStep] = useState(0);
    const [team, setTeam] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [showCongrats, setShowCongrats] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        // Check authentication and get team
        async function checkAuth() {
            try {
                const res = await fetch('/api/auth');
                const data = await res.json();
                
                if (!data.authenticated) {
                    router.push('/login');
                    return;
                }
                
                setTeam(data.user.team);
            } catch (error) {
                console.error('Auth check failed:', error);
                router.push('/login');
            }
        }
        
        checkAuth();
    }, [router]);

    function resetForm() {
        setFile(null);
        setPreview('');
        if (barRef.current) barRef.current.style.width = '0%';
        setSubmitting(false);
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!team || !file) return;

        setSubmitting(true);
        if (barRef.current) barRef.current.style.width = '100%';

        const form = new FormData();
        form.append('team', team);
        form.append('file', file);
        form.append('hintNumber', String(step));

        try {
            await fetch('/api/hunt', {
                method: 'POST',
                body: form,
            });
        } catch {
            // TODO
        }

        setTimeout(() => {
            setShowCongrats(true);
        }, 2000);
    }

    function handleNext() {
        setShowCongrats(false);
        resetForm();
        if (step + 1 < hints.length) {
            setStep(step + 1);
        } else {
            setStep(hints.length);
        }
    }

    if (!team) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
                <div className="max-w-xl mx-auto px-6 space-y-8">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6 text-center">
                        <p>Loading...</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
            <div className="max-w-xl mx-auto px-6 space-y-8">
                <SectionHeading>Scavenger Hunt</SectionHeading>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6">
                    {step < hints.length ? (
                        showCongrats ? (
                            <div className="text-center space-y-4">
                                <p className="text-2xl font-bold">🎉 Congrats!</p>
                                <p>You completed Hint #{step + 1}.</p>
                                <button
                                    onClick={handleNext}
                                    className="mt-2 px-6 py-2 bg-[#10B981] hover:bg-[#0f9f76] rounded-lg text-white font-semibold transition"
                                >
                                    {step + 1 < hints.length ? 'Next Hint' : 'Finish Hunt'}
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-6">
                                    <p className="text-lg font-medium">Team: {team}</p>
                                </div>
                                <p className="text-lg">{hints[step]}</p>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block mb-2 font-medium">Upload Photo</label>
                                        <div
                                            onClick={() => !submitting && inputRef.current?.click()}
                                            className={`cursor-pointer border-2 border-dashed border-white/50 rounded-lg h-48 
                                 flex items-center justify-center hover:border-white transition-colors
                                 ${submitting ? 'opacity-60 pointer-events-none' : ''}`}
                                        >
                                            {preview
                                                ? <img src={preview} className="max-h-full object-contain" />
                                                : <span className="text-white/80">Click or drag file here</span>}
                                        </div>
                                        <input
                                            ref={inputRef}
                                            type="file"
                                            accept="image/*"
                                            disabled={submitting}
                                            className="sr-only"
                                            onChange={e => {
                                                const f = e.target.files?.[0] ?? null;
                                                setFile(f);
                                                setPreview(f ? URL.createObjectURL(f) : '');
                                            }}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={!file || submitting}
                                        className="w-full py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] rounded-lg text-white font-semibold
                               disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                                    >
                                        {submitting ? 'Submitting…' : 'Submit Answer'}
                                    </button>
                                </form>
                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div ref={barRef} className="h-full bg-white transition-width" style={{ width: '0%' }} />
                                </div>
                            </>
                        )
                    ) : (
                        <div className="text-center space-y-4">
                            <p className="text-3xl font-bold">🏁 Hunt Complete!</p>
                            <p>Thanks for playing. Stay tuned for results.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}