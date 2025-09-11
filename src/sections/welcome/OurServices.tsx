'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import useIsMobile from '@/hooks/useIsMobile'

const ourServices = [
  {
    step: 1,
    icon: '/welcome/recep.png',
    title: 'Tiếp nhận yêu cầu & \ntư vấn (miễn phí)',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 2,
    icon: '/welcome/pack.png',
    title: 'Nhận hàng & đóng \ngói an toàn',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 3,
    icon: '/welcome/payment.png',
    title: 'Thanh toán dễ dàng\n bằng EUR hoặc VNĐ',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 4,
    icon: '/welcome/delivery.png',
    title: 'Vận chuyển & giao hàng\n tận nơi tại Pháp',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 5,
    icon: '/welcome/protect.png',
    title: 'Bảo hiểm toàn diện –\n đền bù 100% hỏng vỡ',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
]

gsap.registerPlugin(Draggable, InertiaPlugin)

const OurServices = () => {
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current || !isMobile) return

    const draggable = Draggable.create(contentRef.current, {
      type: 'x',
      bounds: containerRef.current,
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
      gsap.from('.fade-in-box-card-step-services', {
        scrollTrigger: {
          trigger: '.fade-in-box-card-step-services',
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
      gsap.from('.fade-in-box-card-step-services', {
        scrollTrigger: {
          trigger: '.fade-in-box-card-step-services',
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
    <div className='px-[4.167rem] xsm:p-0 bg-white relative'>
      {/* Bg Pc */}
      <Image
        src='/welcome/ellipse-1.png'
        alt=''
        className='xsm:hidden absolute top-[-5.208rem] left-0 backdrop-blur-[14.12rem]'
        width={765}
        height={902}
      />
      <Image
        src='/welcome/ellipse-2.png'
        alt=''
        className='xsm:hidden absolute top-[-5.208rem] right-0 backdrop-blur-[5.208rem]'
        width={753}
        height={753}
      />

      {/* Bg mb */}
      <Image
        src='/welcome/ellipse-mb.png'
        alt=''
        className='hidden xsm:block absolute bottom-[-2.604rem] right-[-2.604rem] backdrop-blur-[3.333rem]'
        width={359}
        height={346}
      />

      <div className="relative flex flex-col gap-[3.125rem] xsm:gap-[1.354rem] bg-[rgba(255,255,255,0.73)] pb-[6.042rem] xsm:pb-[2.708rem] pt-[2.083rem] rounded-[2.604rem] shadow-[0px_2px_6.4px_-1px_#13102208] backdrop-blur-[0.625rem] xsm:rounded-none">

        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-[0.625rem]">
          <p className="text-Blue-Primary font-semibold text-[1.042rem] xsm:text-[0.729rem] leading-[1.458rem] tracking-normal">Dịch vụ của chúng tôi</p>
          <p className="font-bold text-[2.604rem] xsm:text-[1.25rem] leading-[3.125rem] xsm:leading-[1.563rem] tracking-normal text-center">Quy Trình Gửi Hàng</p>
        </div>

        {/* List */}
        <div ref={containerRef} className='overflow-hidden'>
          <div ref={contentRef} className="max-w-[67.656rem] xsm:max-w-max xsm:w-max mx-auto xsm:pl-[2.823rem] xsm:pr-[1.458rem] flex-wrap xsm:flex-nowrap flex justify-center gap-[3.542rem]">
            {
              ourServices.map((step, i) => (
                <div key={i} className="fade-in-box-card-step-services bg-white w-[19.271rem] xsm:w-[12.969rem] h-full flex flex-col rounded-[1.042rem] border border-[#E3DBDB] pl-[3.646rem] xsm:pl-[2.448rem] pt-[1.823rem] pb-[2.396rem] xsm:pb-[1.667rem] relative">
                  <span className="font-semibold text-[0.938rem] xsm:text-[0.833rem] leading-[1.458rem] tracking-normal text-[#727272]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <h3 className="text-Blue-Primary font-bold text-[1.146rem] xsm:text-[0.833rem] leading-[1.563rem] tracking-normal whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="w-[13.542rem] xsm:w-[8.646rem] text-[#727272] font-normal text-[0.729rem] leading-[1.563rem] tracking-normal">
                    {step.text}
                  </p>

                  <div className="z-1 bg-white absolute left-0 -translate-x-1/2 top-[2.083rem] size-[4.167rem] xsm:size-[3.698rem] p-[0.99rem] rounded-full border border-Blue-Primary flex justify-center items-center">
                    <Image
                      className=''
                      src={step.icon}
                      alt={step.title}
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices