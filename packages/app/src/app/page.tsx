import { CardList } from '@/components/CardList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'
import { Carousel, Button } from 'flowbite-react'

export default function Home() {
  return (
    <>
      <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>
      <Button>Click Me</Button>

      <div className='carousel rounded-box w-64'>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
        <div className='carousel-item w-full'>
          <img
            src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
            className='w-full'
            alt='Tailwind CSS Carousel component'
          />
        </div>
      </div>

      {/*Here is the main body*/}
      <div className='h-56 sm:h-64 xl:h-80 2xl:h-96'>
        <Carousel>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Slide 1
          </div>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Slide 2
          </div>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Slide 3
          </div>
        </Carousel>
      </div>
      <div className='mt-4'>
        <Carousel slide={false}>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Swap
            <div className='mb-4 border-b border-gray-200 dark:border-gray-700'>
              <ul
                className='flex flex-wrap -mb-px text-sm font-medium text-center'
                id='default-tab'
                data-tabs-toggle='#default-tab-content'
                role='tablist'>
                <li className='me-2' role='presentation'>
                  <button
                    className='inline-block p-4 border-b-2 rounded-t-lg'
                    id='profile-tab'
                    data-tabs-target='#profile'
                    type='button'
                    role='tab'
                    aria-controls='profile'
                    aria-selected='false'>
                    Profile
                  </button>
                </li>
                <li className='me-2' role='presentation'>
                  <button
                    className='inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    id='dashboard-tab'
                    data-tabs-target='#dashboard'
                    type='button'
                    role='tab'
                    aria-controls='dashboard'
                    aria-selected='false'>
                    Dashboard
                  </button>
                </li>
                <li className='me-2' role='presentation'>
                  <button
                    className='inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    id='settings-tab'
                    data-tabs-target='#settings'
                    type='button'
                    role='tab'
                    aria-controls='settings'
                    aria-selected='false'>
                    Settings
                  </button>
                </li>
                <li role='presentation'>
                  <button
                    className='inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    id='contacts-tab'
                    data-tabs-target='#contacts'
                    type='button'
                    role='tab'
                    aria-controls='contacts'
                    aria-selected='false'>
                    Contacts
                  </button>
                </li>
              </ul>
            </div>
            <div id='default-tab-content'>
              <div
                className='hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800'
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  This is some placeholder content the{' '}
                  <strong className='font-medium text-gray-800 dark:text-white'>
                    Profile tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
                  classes to control the content visibility and styling.
                </p>
              </div>
              <div
                className='hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800'
                id='dashboard'
                role='tabpanel'
                aria-labelledby='dashboard-tab'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  This is some placeholder content the{' '}
                  <strong className='font-medium text-gray-800 dark:text-white'>
                    Dashboard tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
                  classes to control the content visibility and styling.
                </p>
              </div>
              <div
                className='hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800'
                id='settings'
                role='tabpanel'
                aria-labelledby='settings-tab'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  This is some placeholder content the{' '}
                  <strong className='font-medium text-gray-800 dark:text-white'>
                    Settings tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
                  classes to control the content visibility and styling.
                </p>
              </div>
              <div
                className='hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800'
                id='contacts'
                role='tabpanel'
                aria-labelledby='contacts-tab'>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  This is some placeholder content the{' '}
                  <strong className='font-medium text-gray-800 dark:text-white'>
                    Contacts tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps
                  classes to control the content visibility and styling.
                </p>
              </div>
            </div>
          </div>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Lock
          </div>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Bridge
          </div>
          <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
            Faucet
          </div>
        </Carousel>
      </div>

      {/* Examples are only used for demo purposes. Feel free to delete this section */}
      <div className='mt-4'>
        <h3 className='text-lg mb-2'>New examples</h3>
        <p className='mb-4'>
          The following examples are used for demo purposes and help you bootstrap development. You can find the example
          the main repo at <code>src/app/examples</code>. Feel free to delete this section and the examples folder for
          your own App.
        </p>

        <CardList items={EXAMPLE_ITEMS} />
      </div>
    </>
  )
}
