import * as React from 'react'

export interface TimelineItem {
  year: string
  title: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="max-w-3xl mx-auto -my-6 px-4">
      {items.map((m, idx) => (
        <div key={idx} className="relative pl-12 sm:pl-40 py-6 group">
          {/* Date & Title with line and marker */}
          <div
            className="flex flex-col sm:flex-row items-start mb-1
              group-last:before:hidden
              before:absolute before:left-3 sm:before:left-0 before:h-full before:px-px before:bg-slate-300
              sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3
              after:absolute after:left-3 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600
              after:border-4 after:box-content after:border-slate-50 after:rounded-full
              sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
          >
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
              {m.year}
            </time>
            <div className="text-lg font-bold text-white">{m.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
