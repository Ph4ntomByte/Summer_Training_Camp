/*eslint no-unused-vars: "error"*/
'use client'
import React, { useState, useEffect } from 'react'
import { SectionHeading } from '@/components/SectionHeading/SectionHeading'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface TeamProgress {
  team: string
  current_step: number
  submissions: {
    hint_number: number
    created_at: string
    image_url: string
  }[]
}

export default function AdminPage() {
  const [teams, setTeams] = useState<TeamProgress[]>([])
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null)
  const router = useRouter()

  async function fetchTeams() {
    try {
      const res = await fetch('/api/admin/teams', {
        credentials: 'include',
        cache: 'no-store',
      })
      if (!res.ok) throw new Error('Failed to fetch teams')
      const data = await res.json()
      setTeams(data.teams || [])
    } catch {
      setTeams([])
    }
  }

  async function checkAuthAndLoad() {
    try {
      const res = await fetch('/api/auth', {
        credentials: 'include',
        cache: 'no-store',
      })
      const data = await res.json()
      if (!data.authenticated || data.user.role !== 'admin') {
        router.replace('/login')
        return
      }
      await fetchTeams()
    } catch {
      router.replace('/login')
    }
  }

  useEffect(() => {
    checkAuthAndLoad()
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      checkAuthAndLoad()
    }

    window.addEventListener('popstate', handleRouteChange)
    const originalPushState = window.history.pushState
    window.history.pushState = function(...args: Parameters<typeof window.history.pushState>) {
      originalPushState.apply(this, args)
      handleRouteChange()
    }

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.history.pushState = originalPushState
    }
  }, [])

  async function handleLogout() {
    try {
      const response = await fetch('/api/auth', {
        method: 'DELETE',
        credentials: 'include',
        cache: 'no-store',
      })
      if (response.ok) {
        router.replace('/login')
      }
    } catch {}
  }

  async function handleApproveSubmission(team: string, hint_number: number) {
    try {
      await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        cache: 'no-store',
        body: JSON.stringify({ team, hint_number, action: 'approve' }),
      })
      await fetchTeams()
    } catch {}
  }

  async function handleRejectSubmission(team: string, hint_number: number) {
    try {
      await fetch('/api/admin/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        cache: 'no-store',
        body: JSON.stringify({ team, hint_number, action: 'reject' }),
      })
      await fetchTeams()
    } catch {}
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2E7D32] via-[#E91E63] to-[#2E7D32] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex justify-between items-center">
          <SectionHeading>Admin Dashboard</SectionHeading>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm font-medium transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Teams Progress</h2>
            <div className="space-y-4">
              {teams.map((team) => (
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
                      Step {team.current_step}
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#10B981] transition-all"
                      style={{
                        width: `${(team.current_step / 5) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4">
              {selectedTeam
                ? `${selectedTeam} Submissions`
                : 'Select a Team'}
            </h2>
            {selectedTeam && (
              <div className="space-y-4">
                {teams
                  .find((t) => t.team === selectedTeam)
                  ?.submissions?.map((submission) => (
                    <div
                      key={submission.created_at}
                      className="bg-white/5 rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">
                          Hint #{submission.hint_number}
                        </span>
                        <span className="text-sm text-white/70">
                          {new Date(
                            submission.created_at
                          ).toLocaleString()}
                        </span>
                      </div>
                      <div className="relative w-full h-48 mb-2 rounded-lg overflow-hidden">
                        <Image
                          src={submission.image_url}
                          alt={`Submission for hint ${submission.hint_number}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            handleApproveSubmission(
                              selectedTeam,
                              submission.hint_number
                            )
                          }
                          className="flex-1 py-2 bg-[#10B981] hover:bg-[#0f9f76] rounded-lg text-white font-medium transition"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            handleRejectSubmission(
                              selectedTeam,
                              submission.hint_number
                            )
                          }
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
  )
}