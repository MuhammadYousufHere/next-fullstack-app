import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-2 relative'>
      <Image
        src='/bg-grid.svg'
        alt='bg grid'
        width={1472}
        height={795}
        priority
        className='absolute -top-24 -z-10'
      />
      <div className='max-w-xl text-center md:text-left pt-5 lg:pt-24'>
        <h1 className='mt-0'>Mastering Next 13 with TypeScript</h1>
        <p className='text-xl md:text-2xl leading-7 md:leading-9 my-5'>
          Everything I need to build full-stack applications with Next.js 13+
          (App Router) and TypeScript
        </p>
        <div className='my-8'>
          <div className='flex flex-col items-center md:items-start'>
            <a
              className='group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-600  transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto'
              role='button'
              href='/'
            >
              Let`&apos;s Keep Learning
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
