'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import useIsMobile from '@/hooks/useIsMobile'

const reasons = [
  {
    img: '/welcome/aerial-view-airplane.jpg',
    title: 'Carton 5 lớp',
    text: `Hàng hóa được đóng
          gói chuẩn quốc tế`,
    width: 4096,
    heigh: 2304
  },
  {
    img: '/welcome/nhan-luc-nganh-logistics.jpg',
    title: 'Chuyên môn cao',
    text: 'Nhân viên am hiểu về dịch vụ, cùng với hệ thống quản lý giúp giao hàng quốc tế đúng dự kiến, chính xác',
    width: 860,
    heigh: 532
  },
  {
    img: '/welcome/tranport-logistics-products.jpg',
    title: 'Bảo hiểm hàng hóa',
    text: 'Nhân viên am hiểu về dịch vụ, cùng với hệ thống quản lý giúp giao hàng quốc tế đúng dự kiến, chính xác',
    width: 3277,
    heigh: 4096
  }
]

gsap.registerPlugin(Draggable, InertiaPlugin)

const Reason = () => {
  const isMobile = useIsMobile()
  const containerGalleryRef = useRef<HTMLDivElement>(null)
  const contentGalleryRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (!containerGalleryRef.current || !contentGalleryRef.current || !isMobile) return

    const draggable = Draggable.create(contentGalleryRef.current, {
      type: 'x',
      bounds: containerGalleryRef.current,
      inertia: true,
      cursor: 'grab',
      activeCursor: 'grabbing',
    })

    return () => {
      draggable[0].kill()
    }
  }, [isMobile])

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 639px)', () => {
      // Desktop & tablet: animate theo Y
      gsap.from('.fade-in-box-card-reason', {
        scrollTrigger: {
          trigger: '.fade-in-box-card-reason',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
      })
    })

    mm.add('(max-width: 639px)', () => {
      // Mobile: animate theo X
      gsap.from('.fade-in-box-card-reason', {
        scrollTrigger: {
          trigger: '.fade-in-box-card-reason',
          start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
      })
    })
  }, [])

  return (
    <div className="flex flex-col gap-[4.167rem] xsm:gap-[1.302rem] bg-white pt-[3.385rem] xsm:pt-[1.667rem] pb-[6.042rem] xsm:pb-[1.875rem]">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-[1.563rem] xsm:gap-[0.833rem] px-[6rem] xsm:px-[1rem]">
        <p className="text-Blue-Primary font-semibold text-[1.667rem] xsm:text-[0.833rem] leading-[1.458rem] tracking-normal">Lý do nên chọn gửi hàng tại Amamy?</p>
        <p className="w-[59.74rem] xsm:w-full font-bold text-[2.083rem] xsm:text-[1.042rem] leading-[100%] tracking-normal text-center">Amamy dịch vụ Logistic với 4 năm kinh nghiệm và hơn 18.000 khách hàng Việt Nam tại nước ngoài</p>
      </div>

      {/* List */}
      <div ref={containerGalleryRef} className='overflow-hidden flex xsm:block justify-center items-center'>
        <div ref={contentGalleryRef} className="flex justify-center items-start gap-[5.052rem] xsm:gap-[0.521rem] w-max px-[6rem] xsm:px-[1rem]">
          {
            reasons.map((reason, i) => (
              <div key={i} className="fade-in-box-card-reason xsm:w-[13.594rem] w-full aspect-[410/450] flex flex-col">
                <Image
                  className='w-full aspect-[410/450] rounded-[1.25rem] object-cover mb-[1.042rem] xsm:mb-[0.729rem]'
                  src={reason.img}
                  alt={reason.title}
                  width={reason.width}
                  height={reason.heigh}
                />
                <p className="text-Blue-Primary font-bold text-[2.083rem] xsm:text-[1.25rem] leading-[100%] tracking-normal text-center xsm:text-left mb-[0.833rem] xsm:mb-[0.417rem]">{reason.title}</p>
                <p className="text-black font-normal text-[0.833rem] xsm:text-[0.729rem] leading-[100%] tracking-normal text-center xsm:text-left whitespace-pre-line">{reason.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reason