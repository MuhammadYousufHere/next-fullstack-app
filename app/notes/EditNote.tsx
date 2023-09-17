'use client'

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

export type Note = {
  title: string
  content: string
  id: string
}
export default function EditNote({
  note,
  edit,
  updatedData
}: {
  note: Note
  formData: Pick<Note, 'content' | 'title'>
  edit: boolean
  updatedData: (data: Pick<Note, 'content' | 'title'>) => void
}) {
  const [formData, setFormData] = useState({
    title: note.title,
    content: note.content
  })
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputRef.current && edit) {
      inputRef.current.focus()
    }
  }, [edit])
  return (
    <div>
      <input
        className="font-medium text-lg border-1 outline-none w-full h-full bg-inherit my-2"
        ref={inputRef}
        readOnly={edit ? false : true}
        value={formData.title}
        name="title"
        onChange={(e) => {
          setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
          updatedData({ ...formData, [e.target.name]: e.target.value })
        }}
      />
      <textarea
        readOnly={edit ? false : true}
        name="content"
        className="border-0 outline-none resize-none w-full h-full bg-inherit overflow-auto max-h-max overflow-y-hidden"
        value={formData.content}
        onChange={(e) => {
          setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))
          updatedData({ ...formData, [e.target.name]: e.target.value })
        }}
      ></textarea>
    </div>
  )
}
