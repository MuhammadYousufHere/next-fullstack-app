'use client'

import { useRouter } from 'next/navigation'
import { BsArrowLeft } from 'react-icons/bs'
export default function Back() {
  const { back } = useRouter()
  return (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => back()}
    >
      <BsArrowLeft /> Go back
    </div>
  )
}
