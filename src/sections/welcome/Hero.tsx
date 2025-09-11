'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const achieve = [
  {
    number: '04+',
    title: 'NĂM HOẠT ĐỘNG',
    content: 'Thành lập năm 2021'
  },
  {
    number: '3+',
    title: 'ĐỐI TÁC',
    content: 'Các quốc gia \nĐức, Mỹ ,Nhật'
  },
  {
    number: '18K+',
    title: 'KHÁCH HÀNG',
    content: 'Đã tin tưởng sử dụng dịch vụ'
  }
]

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>('.fade-section').forEach((section) => {
      const items = section.querySelectorAll<HTMLElement>('.fade-item')

      items.forEach((el, index) => {
        const duration = parseFloat(el.dataset.duration ?? '1')
        const delay = parseFloat(el.dataset.delay ?? (0.3 * index).toString())

        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              once: true,
              // markers: true,
            },
          },
        )
      })
    })
  }, [])

  return (
    <div className="fade-section w-full h-full bg-Blue-Primary backdrop-blur-[0.208rem]">
      <div className="flex flex-col gap-7 justify-center items-center font-montserrat px-[6rem] xsm:px-[1rem] pt-[5.156rem] xsm:pt-[1.927rem] pb-[3.021rem] xsm:pb-[1.667rem]">
        <div className="w-full flex flex-col gap-[0.781rem] items-center justify-center text-center text-white pb-[1.354rem] xsm:pb-0">
          <h1 className="font-bold text-[3.333rem] xsm:text-[1.25rem] leading-[122%] tracking-normal">Bạn có ý định gửi hàng ?</h1>
          <p className="w-[34.896rem] xsm:w-[14.948rem] font-normal text-base xsm:text-sm leading-[100%]">
            Gửi hàng từ Việt Nam sang Pháp đa dạng mặt hàng, giao nhanh 12–14 ngày tận tay. Nhận sữa, thực phẩm, quần áo, bánh kẹo, miễn phí đóng gói và hút chân không.
          </p>
        </div>

        <button className="px-[1.51rem] xsm:px-[0.781rem] py-[0.833rem] xsm:py-[0.313rem] flex justify-center items-center rounded-3xl bg-white">
          <div className="flex items-center justify-center gap-[0.417rem] font-medium text-[1rem] xsm:text-[0.729rem] leading-[1.3rem] tracking-[-0.03rem] text-Blue-Primary">
            Dự tính giá gửi hàng qua Pháp
            <svg className="w-[0.885rem] xsm:w-[0.469rem] h-[0.833rem] xsm:h-[0.417rem]" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.30019 14.0898L15.6 7.79003M15.6 7.79003L9.30019 1.49033M15.6 7.79003H1.19995" stroke="#38B6FF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>

        <div className="w-full">
          <div className="pt-[1.563rem] xsm:pt-[0.781rem] grid sm:grid-cols-2 gap-8 items-center text-white border-t border-white">
            <div className="flex flex-col">
              <p className="fade-item text-[2.083rem] xsm:text-[1.25rem] font-bold leading-[100%] tracking-normal">Xin chào</p>
              <h2 className="fade-item text-[2.5rem] xsm:text-[1.667rem] font-bold leading-[100%] tracking-normal">Chúng tôi là Amamy</h2>
            </div>

            <div className="grid grid-cols-3 gap-[4rem] xsm:gap-[1.25rem]">
              {achieve.map((item, i) => (
                <div key={i} className="fade-item text-start">
                  <p className="text-[3.333rem] xsm:text-[1.25rem] font-bold leading-[100%] tracking-normal">{item.number}</p>
                  <p className="text-[0.833rem] xsm:text-[0.677rem] font-bold leading-[100%] tracking-normal mb-[0.5rem]">{item.title}</p>
                  <p className="text-[0.729rem] xsm:text-[0.625rem] font-normal leading-[100%] tracking-normal whitespace-pre-line">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero