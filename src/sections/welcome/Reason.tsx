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
    <div className="flex flex-col gap-[80px] xsm:gap-[25px] bg-white px-[6rem] xsm:px-[1rem] pt-[65px] xsm:pt-[32px] pb-[116px] xsm:pb-[36px]">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-[30px] xsm:gap-[16px]">
        <p className="text-Blue-Primary font-semibold text-[32px] xsm:text-[16px] leading-[28px] tracking-normal">Lý do nên chọn gửi hàng tại Amamy?</p>
        <p className="w-[1147px] xsm:w-full font-bold text-[40px] xsm:text-[20px] leading-[100%] tracking-normal text-center">Amamy dịch vụ Logistic với 4 năm kinh nghiệm và hơn 18.000 khách hàng Việt Nam tại nước ngoài</p>
      </div>

      {/* List */}
      <div ref={containerGalleryRef} className='overflow-hidden flex xsm:block justify-center items-center'>
        <div ref={contentGalleryRef} className="flex justify-center items-start gap-[97px] xsm:gap-[10px] w-max">
          {
            reasons.map((reason, i) => (
              <div key={i} className="fade-in-box-card-reason xsm:w-[261px] w-full aspect-[410/450] flex flex-col">
                <Image
                  className='w-full aspect-[410/450] rounded-[24px] object-cover mb-[20px] xsm:mb-[14px]'
                  src={reason.img}
                  alt={reason.title}
                  width={reason.width}
                  height={reason.heigh}
                />
                <p className="text-Blue-Primary font-bold text-[40px] xsm:text-[24px] leading-[100%] tracking-normal text-center xsm:text-left mb-[16px] xsm:mb-[8px]">{reason.title}</p>
                <p className="text-black font-normal text-[16px] xsm:text-[14px] leading-[100%] tracking-normal text-center xsm:text-left whitespace-pre-line">{reason.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reason