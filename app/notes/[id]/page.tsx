import Back from './Back'
import Actions from './Actions'

export const dynamic = 'force-dynamic'

async function getNote(id: string) {
  try {
    //it is a dynamic route and it won't cache response automatically
    const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
      cache: 'no-cache'
      // next: { revalidate: 10 } // incremental static regeneration ISR
      // this tells the next to regenerate the page on server if it is older than 10s
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

/**
 *  If you want to pre render these pages you can export a fuction called generateStaticParams'
 *  which is equvalant to getStaticPaths in next 12.
 *
 * It runs at the build time before correnponding layout or pages are generated and does'nt need any context params
 * It will not be called again during revalidation (ISR)
 *
 * */

// export async function generateStaticParams() {
//   const notes = await getNotes()
//   return notes.map((note) => {
//     return { slug: note.slug }
//   })
// }

export default async function NotePage({ params }: any) {
  const res = await getNote(params.id)
  const note = res.data
  const textarea = ``
  return (
    <div className="my-8">
      <Back />
      <div className="my-4">
        {note ? (
          <div className="p-4 relative bg-gray-800 w-56 my-2 rounded-sm max-h-72">
            <Actions note={note} />
          </div>
        ) : (
          <h4 className="text-center mt-20 font-semibold "> Not found :(</h4>
        )}
      </div>
    </div>
  )
}
