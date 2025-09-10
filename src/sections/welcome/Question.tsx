import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Bảng giá gửi hàng qua Pháp?',
    answer: `2kg: 9,99euro/kg
      2,1kg-5kg: 9,49euro/kg
      5,1kg-10kg: 9,29euro/kg
      10,1kg-20kg: 8,79euro/kg
      20,1kg-200kg: 8,29euro/kg`
  },
  {
    question: 'Thời gian vận chuyển trung bình là bao lâu?',
    answer: 'Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.'
  },
  {
    question: 'Thời gian vận chuyển trung bình là bao lâu?',
    answer: 'Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.'
  },
  {
    question: 'Thời gian vận chuyển trung bình là bao lâu?',
    answer: 'Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.'
  },
  {
    question: 'Thời gian vận chuyển trung bình là bao lâu?',
    answer: 'Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.'
  },
  {
    question: 'Thời gian vận chuyển trung bình là bao lâu?',
    answer: 'Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.'
  }
]

const faqs1 = [
  {
    question: 'Bảng giá gửi hàng qua Pháp?',
    answer: `2kg: 9,99euro/kg
      2,1kg-5kg: 9,49euro/kg
      5,1kg-10kg: 9,29euro/kg
      10,1kg-20kg: 8,79euro/kg
      20,1kg-200kg: 8,29euro/kg`
  },
  {
    question: 'Thời gian vận chuyển trung bình là bao lâu?',
    answer: 'Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.'
  }
]

const shippingRoutes = [
  {
    route: 'Từ Việt sang Mỹ',
    faqs: faqs
  },
  {
    route: 'Từ Việt sang Úc',
    faqs: faqs1
  },
  {
    route: 'Từ Việt sang Canada',
    faqs: faqs
  },
  {
    route: 'Từ Việt sang Séc',
    faqs: faqs1
  },
  {
    route: 'Từ Việt sang Châu Âu',
    faqs: faqs
  },
  {
    route: 'Từ Việt sang Hàn Quốc',
    faqs: faqs1
  },
  {
    route: 'Từ Việt sang Đức',
    faqs: faqs
  },
  {
    route: 'Từ Việt sang Nhật Bản',
    faqs: faqs1
  },
]

const Question = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center font-montserrat pt-[47px] xsm:pt-[30px] pb-[39px] xsm:pb-[35px]">
      <div className="w-full px-[6rem] xsm:px-[1rem]">
        <h2 className="font-bold text-[40px] xsm:text-[24px] xsm:text-center leading-[100%] tracking-normal pl-[8px] xsm:pl-0 mb-[30px] xsm:mb-[16px]">Câu hỏi thường gặp</h2>
        <div className="grid grid-cols-12 xsm:grid-cols-1 gap-x-[28px]">
          {/* Left */}
          <Accordion
            type="multiple"
            defaultValue={['item-0', 'item-1']}
            className="col-span-8 xsm:col-span-1 flex flex-col gap-[20px] xsm:gap-[12px]"
          >
            {faqs?.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="w-full rounded-[20px] shadow-[0px_4.4px_20px_-1px_#1310220D]"
              >
                <AccordionTrigger
                  className="group flex justify-between items-center px-[32px] xsm:px-[20px] py-[28px] xsm:py-[16px] rounded-[24px] border border-[#E3DBD8] hover:no-underline"
                  icon={
                    <svg className="transition-transform duration-200 text-[#38B6FF] size-[34px] xsm:size-[20px] group-data-[state=open]:text-[#cccccc]" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_7746_81)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32.7902 16.7957C32.7902 7.96191 25.6289 0.800519 16.795 0.800519C7.96099 0.80052 0.799682 7.96191 0.799682 16.7957C0.799682 25.6297 7.96099 32.791 16.795 32.791C25.6289 32.791 32.7902 25.6297 32.7902 16.7957ZM11.1481 14.348L15.9467 9.54939C16.4152 9.08093 17.1747 9.08093 17.6432 9.54939L22.4418 14.348C22.9103 14.8164 22.9103 15.576 22.4418 16.0445C21.9732 16.5131 21.2137 16.5131 20.7453 16.0445L17.9946 13.2938L17.9946 23.1939C17.9946 23.8564 17.4574 24.3935 16.795 24.3935C16.1324 24.3935 15.5953 23.8564 15.5953 23.1939L15.5953 13.2938L12.8447 16.0445C12.3761 16.5131 11.6166 16.5131 11.1481 16.0445C10.6796 15.576 10.6796 14.8164 11.1481 14.348Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7746_81">
                          <rect width="33.59" height="33.59" fill="white" transform="translate(0 33.59) rotate(-90)" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                >
                  <span className="xsm:w-[269px] font-semibold xsm:font-medium text-[18px] xsm:text-[14px] leading-[28px] tracking-normal">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-[28px] xsm:px-[10px] py-[18px] xsm:pt-[16px] xsm:pb-[12px] font-normal text-[16px] xsm:text-[14px] leading-[30px] xsm:leading-[24px] tracking-normal text-[#727272] whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right */}
          <div className="xsm:hidden col-span-4 xsm:col-span-1 flex flex-col gap-[20px]">
            <Accordion
              type='single'
              collapsible
              className='flex flex-col rounded-[24px] bg-[#F4FBFF] gap-[20px] px-[38px] pt-[46px] pb-[30px]'>
              {
                shippingRoutes.map((route, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}>
                    <AccordionTrigger
                      key={i}
                      icon={
                        <svg className='transition-transform duration-200 hover:text-Blue-Primary' width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.75 11C1.50391 11 1.28516 10.918 1.12109 10.7539C0.765625 10.4258 0.765625 9.85156 1.12109 9.52344L4.86719 5.75L1.12109 2.00391C0.765625 1.67578 0.765625 1.10156 1.12109 0.773438C1.44922 0.417969 2.02344 0.417969 2.35156 0.773438L6.72656 5.14844C7.08203 5.47656 7.08203 6.05078 6.72656 6.37891L2.35156 10.7539C2.1875 10.918 1.96875 11 1.75 11Z" fill="currentColor" />
                        </svg>
                      }
                      className='flex justify-between items-center pb-[18px] border-b border-[#E3DBD8] hover:text-Blue-Primary [&[data-state=open]]:text-Blue-Primary [&[data-state=open]>svg]:rotate-90 hover:no-underline'>
                      <span className='font-medium text-[24px] leading-[100%] tracking-normal'>
                        {route.route}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ItemQuestion faqs={route.faqs} />
                    </AccordionContent>
                  </AccordionItem>
                ))
              }
            </Accordion>
            {/* Hotline */}
            <div className='flex flex-col items-center rounded-[24px] bg-[#F4FBFF] px-[68px] py-[40px]'>
              <p className='font-bold text-[22px] leading-[30px] tracking-normal text-center'>Liên hệ tư vấn trực tiếp</p>
              <svg className='mt-[30px] mb-[26px]' width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="48" cy="48" r="48" fill="#38B6FF" />
                <circle cx="48" cy="48" r="43.5" stroke="white" />
                <path d="M65.9219 58.2344L64.0469 66.125C63.8125 67.2969 62.875 68.0781 61.7031 68.0781C42.0156 68 26 51.9844 26 32.2969C26 31.125 26.7031 30.1875 27.875 29.9531L35.7656 28.0781C36.8594 27.8438 38.0312 28.4688 38.5 29.4844L42.1719 38C42.5625 39.0156 42.3281 40.1875 41.4688 40.8125L37.25 44.25C39.9062 49.6406 44.2812 54.0156 49.75 56.6719L53.1875 52.4531C53.8125 51.6719 54.9844 51.3594 56 51.75L64.5156 55.4219C65.5312 55.9688 66.1562 57.1406 65.9219 58.2344Z" fill="white" />
              </svg>
              <p className='font-normal text-[16px] leading-[30px] text-center tracking-normal'>Hotline</p>
              <p className='font-bold text-[22px] leading-[30px] text-center tracking-normal'>092 677 79 66</p>
            </div>
          </div>

          {/* Hotline MB */}
          <div className='hidden xsm:flex col-span-1 flex-col gap-[24px] mt-[35px] w-full'>
            <div className='flex justify-between items-center pl-[34px] pr-[22px] py-[32px] bg-[#F4FBFF] rounded-[24px]'>
              <span className='text-[20px] font-bold leading-[100%] tracking-normal'>Dịch vụ gửi hàng</span>
              <ChevronDown />
            </div>
            <div className='flex justify-between items-center pl-[22px] pr-[28px] py-[16px] bg-[#F4FBFF] rounded-[24px]'>
              <div className='flex justify-between'>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32.5" cy="32.5" r="32.5" fill="#38B6FF" />
                  <circle cx="32.4999" cy="32.5" r="29.2917" stroke="white" />
                  <path d="M49.9375 39.1875L48.4375 45.5C48.25 46.4375 47.5 47.0625 46.5625 47.0625C30.8125 47 18 34.1875 18 18.4375C18 17.5 18.5625 16.75 19.5 16.5625L25.8125 15.0625C26.6875 14.875 27.625 15.375 28 16.1875L30.9375 23C31.25 23.8125 31.0625 24.75 30.375 25.25L27 28C29.125 32.3125 32.625 35.8125 37 37.9375L39.75 34.5625C40.25 33.9375 41.1875 33.6875 42 34L48.8125 36.9375C49.625 37.375 50.125 38.3125 49.9375 39.1875Z" fill="white" />
                </svg>
                <div className='flex flex-col gap-[4.5px]'>
                  <p className='text-Blue-Primary text-[36px] leading-[30px] font-bold tracking-normal text-center'>092 677 79 66</p>
                  <p className='text-[21px] leading-[30px] font-bold tracking-normal text-center'>Liên hệ tư vấn trực tiếp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question

export interface FAQ {
  question: string
  answer: string
}

interface ItemQuestionProps {
  faqs: FAQ[]
}

const ItemQuestion: React.FC<ItemQuestionProps> = ({ faqs }) => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full space-y-[0.875rem] mt-[0.875rem]'
    >
      {faqs?.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className='border-none bg-white rounded-2xl  overflow-hidden p-[1.25rem] xsm:p-[1rem]'
        >
          <AccordionTrigger className='flex w-full items-center p-0 justify-between text-left hover:no-underline [&[data-state=open]>svg]:rotate-180 font-montserrat font-semibold text-[1rem] leading-[1.625rem] tracking-[-0.03em] text-black flex-grow'>
            <span className='text-pc-tab-title xsm:text-pc-sub12s text-black'>
              {faq.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className='mt-[1.25rem] pb-0'>
            {/* <p className=' text-black/80 text-pc-14 xsm:text-mb-12'>
                    {faq.answer}
                  </p> */}

            <div
              dangerouslySetInnerHTML={{ __html: faq.answer }}
              className=' text-black/80 text-pc-14 xsm:text-mb-12'
            ></div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}