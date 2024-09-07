'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Connect } from './Connect'
import { SITE_INFO } from '@/utils/site'

export function Header() {
  return (
    <header className='navbar flex justify-between p-4 pt-0'>
      <Link href={'/'} target='_blank' rel='noopener noreferrer'>
        <Image src='/logo.png' width={140} height={80} alt={SITE_INFO} />
      </Link>

      <div className='flex gap-2'>
        <Connect />
      </div>
    </header>
  )
}
