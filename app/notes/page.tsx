// export a variables to change the behavoir of page

import Link from 'next/link'
import CreateNote from './CreateNote'

export const dynamic = 'force-dynamic'

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   perferredRegion = 'auto'

// roughly equivelant to getServerSideProps
async function getNotes() {
  try {
    const res = await fetch('http://localhost:3000/api/notes', {
      cache: 'no-store'
    }) // refetch on every request
    return await res.json()
  } catch (err) {
    throw new Error(`Something went wront: ${err}`)
  }
}

// Server component by default - can do data fetching inside of theme
export default async function NotesPage() {
  // to fetch data just await call to data fetcher fn
  const notes = await getNotes()
  return (
    <div>
      <div className="flex items-stretch gap-5">
        {notes.data.map((note: any) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <CreateNote />
    </div>
  )
}

function Note({ note }: any) {
  const { id, title, content } = note || {}

  return (
    <Link href={`notes/${id}`} className="inline-flex">
      <div className="p-4 bg-gray-800 w-56 my-2 rounded-sm cursor-pointer hover:translate-y-[1px] transition-transform">
        <h1 className="font-medium text-lg ">{title}</h1>
        <p>{content}</p>
      </div>
    </Link>
  )
}
