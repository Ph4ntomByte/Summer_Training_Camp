import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'

interface PdfCardProps {
  title: string
  description?: string
  pdfUrl: string
  thumbnailUrl?: string
}

export function PdfCard({
  title,
  description,
  pdfUrl,
  thumbnailUrl = '/pdf-thumbnail.png',
}: PdfCardProps) {
  return (
    <div className="max-w-sm mx-auto bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-40 bg-gray-800">
        <img
          src={thumbnailUrl}
          alt={`${title} thumbnail`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description && (
          <p className="text-white/80 text-sm">{description}</p>
        )}
        <Link
          href={pdfUrl}
          target="_blank"
          download
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#10B981] hover:bg-[#0f9f76] rounded-lg text-white font-medium transition"
        >
          <FiDownload className="mr-2" /> Download PDF
        </Link>
      </div>
    </div>
  )
}