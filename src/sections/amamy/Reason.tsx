'use client'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const reasons = [
  {
    id: 1,
    image: '/amamy/reason-1.png',
    title: 'Carton 5 lớp',
    content: 'Hàng hóa được đóng gói chuẩn quốc tế',
  },
  {
    id: 2,
    image: '/amamy/reason-2.png',
    title: 'Chuyên môn cao',
    content:
      'Nhân viên am hiểu về dịch vụ, cùng với hệ thống quản lý giúp giao hàng quốc tế đúng dự kiến, chính xác',
  },
  {
    id: 3,
    image: '/amamy/reason-3.png',
    title: 'Bảo hiểm hàng hóa',
    content:
      'Nhân viên am hiểu về dịch vụ, cùng với hệ thống quản lý giúp giao hàng quốc tế đúng dự kiến, chính xác',
  },
]

export default function Reason() {
  useGSAP(() => {
    gsap.from('.fade-in-box-reason-cards', {
      scrollTrigger: {
        trigger: '.fade-in-box-reason-cards',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    })
  }, [])

  return (
    <section className='bg-white'>
      <div className='sm:px-[6rem] px-4 pb-[7.25rem] pt-[4.188rem] xsm:pb-9 xsm:pt-9'>
        <p className='fade-in-box font-montserrat font-semibold text-center text-[2rem] xsm:text-base xsm:leading-7 leading-7 text-Blue-Primary mb-6 xsm:mb-2'>
          Lý do nên chọn gửi hàng tại Amamy?
        </p>
        <h1 className='fade-in-box font-montserrat font-bold text-[2.5rem] xsm:text-xl leading-none text-center mb-[4.063rem] max-w-[71.688rem] mx-auto xsm:mb-7'>
          Amamy dịch vụ Logistic với 4 năm kinh nghiệm và hơn 18.000 khách hàng
          Việt Nam tại nước ngoài
        </h1>
        <div className='xsm:overflow-hidden'>
          <div className='flex items-start gap-[6.063rem] xsm:gap-2.5 xsm:overflow-x-auto'>
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className='fade-in-box-reason-cards flex flex-col items-center xsm:items-start flex-1 xsm:flex-none'
              >
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-[25.625rem] h-[28.125rem] xsm:w-[16.25rem] xsm:h-[18.054rem] object-cover rounded-3xl mb-6 xsm:mb-3'
                />
                <h2 className='font-montserrat font-bold text-Blue-Primary text-[2.4rem] xsm:text-2xl text-center leading-none mb-4 xsm:mb-1 xsm:text-left'>
                  {reason.title}
                </h2>
                <p className='max-w-[20.625rem] xsm:max-w-[15.25rem] text-base xsm:text-sm leading-none text-center xsm:text-left'>
                  {reason.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
