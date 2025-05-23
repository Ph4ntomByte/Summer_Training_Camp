'use client'

import React, { useState } from 'react'
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform bg-white/10"
            onClick={() => item.src && setSelected(item)}
          >
            {item.src ? (
              <div className="w-full pb-[56.25%] relative">
                {item.type === 'video' ? (
                  item.src.startsWith('http') ? (
                    <iframe
                      src={item.src}
                      title={item.alt ?? `video-${idx}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <video
                      src={item.src}
                      controls
                      muted
                      loop
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  )
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt ?? `image-${idx}`}
                    fill
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            ) : (
              <div className="w-full pb-[56.25%] bg-gray-700 animate-pulse rounded-lg" />
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
          <div className="w-full max-w-3xl">
            {selected.type === 'video' ? (
              <div className="w-full pb-[56.25%] relative">
                {selected.src!.startsWith('http') ? (
                  <iframe
                    src={selected.src}
                    title={selected.alt ?? 'video-modal'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <video
                    src={selected.src!}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
            ) : (
              <div className="w-full pb-[56.25%] relative">
                <Image
                  src={selected.src!}
                  alt={selected.alt ?? 'image-modal'}
                  fill
                  className="absolute inset-0 w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>
        </Dialog>
      )}
    </>
  )
}