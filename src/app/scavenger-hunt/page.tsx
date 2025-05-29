'use client';
import React, { useState, useRef, FormEvent } from 'react';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';

const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];

export default function ScavengerHuntPage() {
    const [team, setTeam] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const f = e.target.files?.[0] ?? null;
        setFile(f);
        if (f) setPreview(URL.createObjectURL(f));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!team || !file) return;
        const form = new FormData();
        form.append('file', file);
        form.append('team', team);
        await fetch('/api/hunt', { method: 'POST', body: form });
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
            <div className="max-w-xl mx-auto px-6">
                <SectionHeading>Scavenger Hunt</SectionHeading>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6">
                    <p className="text-lg">
                        🔍 <strong>Hint #1:</strong> Find the lotus-shaped mural in the courtyard and take a clear photo of it.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="team" className="block mb-2 font-medium">
                                Your Team
                            </label>
                            <select
                                id="team"
                                value={team}
                                onChange={e => setTeam(e.target.value)}
                                className="w-full bg-white/20 px-4 py-2 rounded-lg focus:outline-none"
                            >
                                <option value="" disabled>
                                    — Select your team —
                                </option>
                                {teams.map(t => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Upload Photo</label>
                            <div
                                onClick={() => inputRef.current?.click()}
                                className="cursor-pointer border-2 border-dashed border-white/50 rounded-lg h-48 flex items-center justify-center hover:border-white transition-colors"
                            >
                                {preview ? (
                                    <img src={preview} className="max-h-full object-contain" />
                                ) : (
                                    <span className="text-white/80">Click or drag file here</span>
                                )}
                            </div>
                            <input
                                ref={inputRef}
                                type="file"
                                accept="image/*"
                                className="sr-only"
                                onChange={handleFileChange}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!team || !file}
                            className="w-full py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] rounded-lg text-white font-semibold
                         disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Submit Answer
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}