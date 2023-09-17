import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const note = await prisma.note.create({
    data: {
      title: 'Admin want to test ',
      content: 'this is a test note',
      accomplished: true
    }
  })

  console.log({ note })
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit()
  })
