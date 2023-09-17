import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const page_str = req.nextUrl.searchParams.get('page')
  const limit_str = req.nextUrl.searchParams.get('limit')

  const page = page_str ? parseInt(page_str, 10) : 1
  const limit = limit_str ? parseInt(limit_str, 10) : 10
  const skip = (page - 1) * limit

  const notes = await prisma.note.findMany({ skip, take: limit })

  return NextResponse.json({ data: notes })
}

export async function POST(req: NextRequest) {
  try {
    const note = await req.json()
    const { title, content, id } = note
    const addNote = await prisma.note.create({ data: { content, title } })
    return NextResponse.json({ message: 'added the note', data: addNote })
  } catch (error) {
    NextResponse.json({ message: 'something went wrong' })
  }
}
