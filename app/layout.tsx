import '@/styles/globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Advance practive before the strom'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className=''>
        <nav>
          <div className='2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3'>
            <div className='flex flex-wrap items-center justify-between '>
              <div className='flex-shrink-0 flex items-center mr-14'>
                <Link href='/' aria-labelledby='Muhammad Yousuf'>
                  M Y
                </Link>
              </div>
              <button
                type='button'
                className='inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none  focus:bg-blue-750 text-gray-400 hover:bg-blue-600'
                aria-controls='navbar-default'
                aria-expanded='false'
              >
                <span className='sr-only'>Expand main menu</span>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='27'
                  width='27'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
                </svg>
              </button>
              <ul
                className='max-h-0 opacity-0 flex flex-col items-start mt-4 text-sm  md:flex-row md:space-x-1 md:mt-0 md:border-0 w-full md:max-h-screen h-screen md:h-auto md:opacity-100 md:w-auto'
                id='navbar-default'
              >
                <li>
                  <Link
                    className='block px-4 py-2 outline-none no-underline hover:no-underline '
                    href='/notes'
                  >
                    <div className='text-gray-700 hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white  text-sm transition-colors duration-300'>
                      Notes
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    className='block px-4 py-2 outline-none no-underline hover:no-underline '
                    href='/'
                  >
                    <div className='text-gray-700 hover:text-gray-400 dark:text-gray-350 dark:hover:text-white focus:text-white  text-sm transition-colors duration-300'>
                      Contact
                    </div>
                  </Link>
                </li>
                <li>
                  <a
                    className='block px-4 py-2 outline-none no-underline hover:no-underline bg-violet-500 hover:bg-violet-400 rounded-3xl'
                    href='/'
                  >
                    <div className='text-white  text-sm transition-colors duration-300'>
                      Learn More
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className='py-4'>
          <div className='container'>{children}</div>
        </main>
      </body>
    </html>
  )
}
