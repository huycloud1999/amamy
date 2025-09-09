'use client'

import {cn} from '@/lib/utils'
import {ArrowUp} from 'lucide-react'
import {useState} from 'react'

export default function FAQItem({
  content,
  detail,
  initialOpen = false,
}: {
  content: string
  detail: string
  initialOpen?: boolean
}) {
  const [open, setOpen] = useState(initialOpen)

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setOpen(!open)}
        className='bg-white w-full py-[1.875rem] px-[1.875rem] flex items-center justify-between border border-[#E3DBD8] rounded-3xl relative z-10'
      >
        <h3 className='font-montserrat text-lg leading-7 font-semibold'>
          {content}
        </h3>
        <div
          className={cn(
            'size-[1.999rem] rounded-full flex items-center justify-center bg-[#CCCCCC] transition-all duration-300',
            open && 'bg-Blue-Primary',
          )}
        >
          <ArrowUp
            className={cn(
              'size-4 text-white transition-all duration-300',
              !open && 'rotate-180',
            )}
          />
        </div>
      </button>
      <div
        style={{
          maxHeight: open ? 500 : 0,
        }}
        className='shadow-[0_4.4px_20px_-1px_#1310220D] bg-white rounded-b-3xl -mt-6 pt-6 overflow-hidden transition-[max-height] duration-300'
      >
        <div className='py-[0.938rem] px-[1.875rem]'>
          {detail.split('\n').map((line, index) => (
            <p
              key={index}
              className='font-montserrat text-base leading-[1.875rem] text-[#727272] whitespace-pre-wrap'
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
