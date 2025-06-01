'use client';
import React, { useState, useRef, FormEvent, useEffect } from 'react';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { useRouter } from 'next/navigation';

export default function ScavengerHuntPage() {
  const [hints, setHints] = useState<string[]>([]);
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
    async function checkAuthAndLoad() {
      try {
        const res = await fetch('/api/auth', { credentials: 'include' });
        const data = await res.json();
        if (!data.authenticated) {
          router.push('/login');
          return;
        }
        setTeam(data.user.team);
        const progressRes = await fetch(`/api/hunt/progress?team=${data.user.team}`);
        const progressData = await progressRes.json();
        if (typeof progressData.currentStep === 'number') {
          setStep(progressData.currentStep);
        }
        const hintsRes = await fetch('/api/hunt/hints');
        const hintsData = await hintsRes.json();
        if (Array.isArray(hintsData.hints)) {
          setHints(hintsData.hints.map((h: any) => h.text));
        }
      } catch (error) {
        console.error('Auth & hints load failed:', error);
        router.push('/login');
      }
    }
    checkAuthAndLoad();
  }, [router]);

  function resetForm() {
    setFile(null);
    setPreview('');
    if (barRef.current) barRef.current.style.width = '0%';
    setSubmitting(false);
  }

  async function handleLogout() {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setTeam(null);
        setStep(0);
        setFile(null);
        setPreview('');
        setSubmitting(false);
        setShowCongrats(false);
        router.replace('/login');
      } else {
        console.error('Logout failed:', await response.text());
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
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
      const response = await fetch('/api/hunt', {
        method: 'POST',
        body: form,
      });
      if (!response.ok) {
        throw new Error('Submission failed');
      }
      await fetch('/api/hunt/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          team,
          currentStep: step + 1
        }),
      });
      setShowCongrats(true);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitting(false);
      if (barRef.current) barRef.current.style.width = '0%';
    }
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

  if (!team || hints.length === 0) {
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
                <p>You completed Hint #{step}.</p>
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
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-medium">{team}</p>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm font-medium transition"
                    >
                      Logout
                    </button>
                  </div>
                  <p className="text-sm text-white/70">
                    Current Progress: {step}/{hints.length}
                  </p>
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
                      disabled={submitting}
                      className="sr-only"
                      onChange={(e) => {
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
                  <div
                    ref={barRef}
                    className="h-full bg-white transition-width"
                    style={{ width: '0%' }}
                  />
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