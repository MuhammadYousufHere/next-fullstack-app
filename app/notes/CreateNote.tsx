'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export default function CreateNote() {
  const router = useRouter()
  const [formData, setFormData] = useState({ title: '', content: '' })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setFormData((prev) => ({ ...prev, [e.target.name]: value }))
  }
  const handleTextarwaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setFormData((prev) => ({ ...prev, [e.target.name]: value }))
  }
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    if (!formData.title) {
      return
    }
    await fetch('http://localhost:3000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, id: `my-note-${Math.random()}` })
    })
    // router.refresh() .// will refresh the page
    setFormData({ title: '', content: '' })
    router.refresh()
  }
  return (
    <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-2 max-w-sm">
      <h1>Create a Note</h1>
      <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
        placeholder="title"
        className="p-2 text-black"
      />
      <textarea
        onChange={handleTextarwaChange}
        value={formData.content}
        name="content"
        placeholder="Content"
        className="p-2 text-black"
      />
      <button type="submit" className="border p-2 my-2">
        Submit
      </button>
    </form>
  )
}
