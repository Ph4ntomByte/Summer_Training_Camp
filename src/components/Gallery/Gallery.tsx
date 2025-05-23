'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export interface MediaItem {
  type: 'image' | 'video'
  src?: string
  alt?: string
}

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [selected, setSelected] = useState<MediaItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform bg-white/10 flex items-center justify-center"
            onClick={() => item.src && setSelected(item)}
          >
            {item.src ? (
              item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? ''}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              ) : (
                <video
                  src={item.src}
                  className="object-cover w-full h-full"
                  muted
                  loop
                  playsInline
                />
              )
            ) : (
              <div className="w-full h-40 bg-gray-700 animate-pulse" />
            )}
          </div>
        ))}
      </div>

      {selected && (
        <Dialog
          open
          onClose={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        >
          <div className="max-w-3xl w-full bg-transparent">
            {selected.type === 'image' ? (
              <Image
                src={selected.src!}
                alt={selected.alt ?? ''}
                width={800}
                height={600}
                className="object-contain w-full h-auto rounded-lg"
              />
            ) : (
              <video
                src={selected.src!}
                className="w-full h-auto rounded-lg"
                controls
                autoPlay
              />
            )}
          </div>
        </Dialog>
      )}
    </>
  )
}