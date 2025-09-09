'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import useIsMobile from '@/hooks/useIsMobile'

const ourServices = [
  {
    step: 1,
    icon: '/wellcome/recep.png',
    title: 'Tiếp nhận yêu cầu & \ntư vấn (miễn phí)',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 2,
    icon: '/wellcome/pack.png',
    title: 'Nhận hàng & đóng \ngói an toàn',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 3,
    icon: '/wellcome/payment.png',
    title: 'Thanh toán dễ dàng\n bằng EUR hoặc VNĐ',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 4,
    icon: '/wellcome/delivery.png',
    title: 'Vận chuyển & giao hàng\n tận nơi tại Pháp',
    text: 'Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry\'s standard '
  },
  {
    step: 5,
    icon: '/wellcome/protect.png',
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

  return (
    <div className='px-[80px] xsm:p-0 bg-white'>

      <div className="relative flex flex-col gap-[60px] xsm:gap-[26px] bg-white pb-[116px] pt-[40px] rounded-[50px] xsm:rounded-none bg-[url(/wellcome/bg-ourservices.png)] xsm:bg-[url(/wellcome/bg-ourservices-mb.png)] bg-cover bg-no-repeat">

        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-[12px]">
          <p className="text-Blue-Primary font-semibold text-[20px] xsm:text-[14px] leading-[28px] tracking-normal">Dịch vụ của chúng tôi</p>
          <p className="font-bold text-[50px] xsm:text-[24px] leading-[60px] xsm:leading-[30px] tracking-normal text-center">Quy Trình Gửi Hàng</p>
        </div>

        {/* List */}
        <div ref={containerRef} className='overflow-hidden'>
          <div ref={contentRef} className="max-w-[1299px] xsm:max-w-max xsm:w-max mx-auto xsm:pl-[56px] xsm:pr-[28px] flex-wrap xsm:flex-nowrap flex justify-center gap-[68px]">
            {
              ourServices.map((step, i) => (
                <div key={i} className="bg-white w-[370px] xsm:w-[249px] h-full flex flex-col rounded-[20px] border border-[#E3DBDB] pl-[70px] xsm:pl-[47px] pt-[35px] pb-[46px] xsm:pb-[32px] relative">
                  <span className="font-semibold text-[18px] xsm:text-[16px] leading-[28px] tracking-normal text-[#727272]" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {String(step.step).padStart(2, '0')}
                  </span>
                  <h3 className="text-Blue-Primary font-bold text-[22px] xsm:text-[16px] leading-[30px] tracking-normal whitespace-pre-line">
                    {step.title}
                  </h3>
                  <p className="w-[260px] xsm:w-[166px] text-[#727272] font-normal text-[14px] leading-[30px] tracking-normal">
                    {step.text}
                  </p>

                  <div className="z-1 bg-white absolute left-0 -translate-x-1/2 top-[40px] size-[80px] xsm:size-[71px] p-[19px] rounded-full border border-Blue-Primary flex justify-center items-center">
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