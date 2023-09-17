'use client'

import { useState } from 'react'
import EditNote, { type Note } from '../EditNote'
import DeleteNote from '../DeleteNote'
import { MdModeEdit } from 'react-icons/md'
import { FcCheckmark } from 'react-icons/fc'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

async function updateNote({ id, ...body }: Note) {
  await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body)
  })
}

interface IProps {
  note: Note
}
export default function Actions({ note }: IProps) {
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const [updatedData, setUpdatedData] = useState({
    title: '',
    content: ''
  })

  const update = async () => {
    setEdit(false)
    setError('')
    setLoading(true)
    try {
      await updateNote({ id: note.id, ...updatedData })
      setLoading(false)
      router.refresh()
    } catch (error) {
      setLoading(false)
      setError('Something went wrong')
    }
  }
  const newData = (data: Pick<Note, 'content' | 'title'>) => {
    setUpdatedData(data)
  }
  return (
    <>
      <div className="flex justify-end items-stretch gap-4 mb-2">
        <DeleteNote noteId={note.id} />
        {loading ? (
          <Image
            src="/oval.svg"
            alt="loading"
            width={16}
            height={16}
            priority
          />
        ) : edit ? (
          <FcCheckmark onClick={update} />
        ) : (
          <MdModeEdit onClick={() => setEdit(!edit)} />
        )}
      </div>
      {error && <p className="text-red-700">{error}</p>}
      <EditNote edit={edit} formData={note} updatedData={newData} note={note} />
    </>
  )
}
