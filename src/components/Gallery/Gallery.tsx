'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export interface MediaItem {
  type: 'image' | 'video'
  src: string
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
            className="relative cursor-pointer overflow-hidden rounded-lg hover:scale-105 transition-transform"
            onClick={() => setSelected(item)}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || ''}
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
            )}
          </div>
        ))}
      </div>

      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      >
        <Dialog.Panel className="max-w-3xl w-full p-4">
          {selected?.type === 'image' ? (
            <Image
              src={selected.src}
              alt={selected.alt || ''}
              width={800}
              height={600}
              className="object-contain w-full h-auto rounded-lg"
            />
          ) : (
            <video
              src={selected!.src}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
            />
          )}
        </Dialog.Panel>
      </Dialog>
    </>
  )
}