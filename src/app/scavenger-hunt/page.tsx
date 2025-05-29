'use client';
import React, { useState, useRef, FormEvent } from 'react';
import {SectionHeading} from '@/components/SectionHeading/SectionHeading';

const hints = [
  '🔍 Hint #1: Find the lotus‐shaped mural in the courtyard and take a clear photo.',
  '🔍 Hint #2: Locate the mosaic fountain by the east gate and snap a picture.',
];

const teams = ['Team 1', 'Team 2', 'Team 3', 'Team 4'];

export default function ScavengerHuntPage() {
  const [step, setStep] = useState(0);
  const [team, setTeam] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    setPreview(f ? URL.createObjectURL(f) : '');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!team || !file) return;

    setSubmitting(true);
    if (barRef.current) barRef.current.style.width = '100%';

    try {
      await fetch('/api/hunt', {
        method: 'POST',
        body: (() => {
          const form = new FormData();
          form.append('team', team);
          form.append('file', file);
          return form;
        })(),
      });
    } catch {
        // TODO
    }

    setTimeout(() => {
      setTeam('');
      setFile(null);
      setPreview('');
      if (barRef.current) barRef.current.style.width = '0%';
      setSubmitting(false);
      setStep((s) => Math.min(s + 1, hints.length - 1));
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
      <div className="max-w-xl mx-auto px-6 space-y-8">
        <SectionHeading>Scavenger Hunt</SectionHeading>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6">
          <p className="text-lg">{hints[step]}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="team" className="block mb-2 font-medium">Your Team</label>
              <select
                id="team"
                value={team}
                onChange={e => setTeam(e.target.value)}
                disabled={submitting}
                className="w-full bg-white/20 px-4 py-2 rounded-lg focus:outline-none disabled:opacity-60"
              >
                <option value="" disabled>— Select your team —</option>
                {teams.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

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
                onChange={handleFileChange}
              />
            </div>

            <button
              type="submit"
              disabled={!team || !file || submitting}
              className="w-full py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] rounded-lg text-white font-semibold
                         disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {submitting ? 'Submitting…' : 'Submit Answer'}
            </button>
          </form>

          <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              ref={barRef}
              className="h-full bg-white transition-width"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}