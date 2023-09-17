'use client'
import { AiFillDelete } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

async function deleteNote(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
      method: 'DELETE'
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export default function DeleteNote({ noteId }: { noteId: string }) {
  const router = useRouter()

  return (
    <div
      onClick={async () => {
        await deleteNote(noteId)
        router.back()
        router.refresh()
      }}
    >
      <AiFillDelete />
    </div>
  )
}
