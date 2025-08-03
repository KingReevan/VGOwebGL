'use client'
import { ReactNode } from 'react'
import { X } from 'lucide-react'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 text-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-[0_0_15px_2px_rgba(255,0,0,0.4)] border border-red-500 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-red-500"
        >
          <X size={24} />
        </button>
        {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
        {children}
      </div>
    </div>
  )
}
