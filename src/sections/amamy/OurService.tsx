'use client'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'Tiếp nhận yêu cầu & tư vấn (miễn phí)',
    icon: '/question/service-1.png',
    content:
      "Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry's standard ",
  },
  {
    id: 2,
    title: 'Nhận hàng & đóng gói an toàn',
    icon: '/question/service-2.png',
    content:
      "Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry's standard ",
  },
  {
    id: 3,
    title: 'Thanh toán dễ dàng bằng EUR hoặc VNĐ',
    icon: '/question/service-3.png',
    content:
      "Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry's standard ",
  },
  {
    id: 4,
    title: 'Vận chuyển & giao hàng tận nơi tại Pháp',
    icon: '/question/service-4.png',
    content:
      "Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry's standard ",
  },
  {
    id: 5,
    title: 'Bảo hiểm toàn diện - đền bù 100% hỏng vỡ',
    icon: '/question/service-5.png',
    content:
      "Lorem Ipsum is simply dummy text th printing and typese Lorem Ipm  been the industry's standard ",
  },
]

export default function OurService() {
  useGSAP(() => {
    gsap.from('.fade-in-box-service-cards', {
      scrollTrigger: {
        trigger: '.fade-in-box-service-cards',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    })
  }, [])
  return (
    <section className='sm:px-[6rem] px-4 bg-white'>
      <div className='bg-[url("/question/service-decoration.png")] xsm:bg-[url("/question/service-decoration-mobile.png")] bg-[length:100%_calc(100%+5.938rem)] xsm:bg-[length:100%_calc(100%+2.063rem)] bg-left-top bg-no-repeat shadow-[0_2px_6.4px_-1px_#13102208] pt-[3.313rem] pb-[5.938rem] xsm:pb-[2.063rem]'>
        <p className='fade-in-box font-montserrat text-xl text-center text-Blue-Primary font-semibold leading-7 xsm:text-sm'>
          Dịch vụ của chúng tôi
        </p>
        <h1 className='fade-in-box font-montserrat text-[3.125rem] leading-[3.75rem] text-center font-bold mb-[3.75rem] xsm:text-2xl xsm:mb-[1.688rem]'>
          {' '}
          Quy Trình Gửi Hàng
        </h1>
        <div className='xsm:overflow-hidden'>
          <div className='flex flex-wrap xsm:flex-nowrap justify-center xsm:justify-start gap-x-[4.375rem] xsm:gap-x-12 gap-y-[4.063rem] max-w-[78.125rem] mx-auto xsm:overflow-x-auto'>
            {services.map((service) => (
              <div
                key={service.id}
                className='fade-in-box-service-cards flex-[0_0_23.125rem] xsm:flex-[0_0_15.438rem] w-full relative rounded-[1.25rem] border border-[#E3DBD8] bg-white py-[1.875rem] pl-[4.375rem] pr-[2.5rem] font-montserrat xsm:first:ml-9 xsm:pl-[2.938rem] xsm:pr-5'
              >
                <span className='inline-block font-semibold text-lg leading-7 text-[#727272] xsm:text-base mb-[0.313rem]'>
                  {service.id.toString().padStart(2, '0')}
                </span>
                <h3 className='text-Blue-Primary font-bold text-[1.375rem] leading-[1.875rem] xsm:text-base'>
                  {service.title}
                </h3>
                <p className='text-sm leading-[1.875rem] text-[#727272] xsm:text-sm'>
                  {service.content}
                </p>
                <div className='rounded-full bg-white size-20 xsm:size-[4.438rem] border border-Blue-Primary flex items-center justify-center absolute -left-10 xsm:-left-[calc(4.438rem/2)] top-[2.5rem]'>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-[2.813rem] xsm:w-[2.313rem] h-auto object-cover'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
