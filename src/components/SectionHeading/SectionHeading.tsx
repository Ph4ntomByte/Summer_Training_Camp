import React from 'react'

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold mb-8 text-center text-white">
      {children}
    </h2>
  )
}