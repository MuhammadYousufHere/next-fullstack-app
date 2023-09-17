import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// let notes = [
//   {
//     id: '213213',
//     title: 'next 13 cool features',
//     content: 'there are way many cool features in next 13'
//   }
// ]
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const noteId = params.id

  const note = await prisma.note.findUnique({ where: { id: noteId } })
  if (!note) {
    return new NextResponse('No note with ID found', { status: 404 })
  }
  return NextResponse.json({ data: note })
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const noteId = params.id

    const note = await req.json()
    const { title, content } = note
    const updated_user = await prisma.note.update({
      where: { id: noteId },
      data: { title, content }
    })

    if (!updated_user) {
      return new NextResponse('No Note with ID found', { status: 404 })
    }

    return NextResponse.json(updated_user)
  } catch (error) {
    NextResponse.json({ message: 'something went wrong' })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    await prisma.note.delete({
      where: { id }
    })

    return new NextResponse(null, { status: 204 })
  } catch (error: any) {
    if (error.code === 'P2025') {
      return new NextResponse('No note with ID found', { status: 404 })
    }

    return new NextResponse(error.message, { status: 500 })
  }
}
