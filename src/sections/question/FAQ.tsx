import FAQItem from '@/components/question/FAQItem'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

const faqs = [
  {
    content: 'Bảng giá gửi hàng qua Pháp?',
    detail: `2kg: 9,99euro/kg
2,1kg-5kg: 9,49euro/kg
5,1kg-10kg: 9,29euro/kg
10,1kg-20kg: 8,79euro/kg
20,1kg-200kg: 8,29euro/kg
`,
  },
  {
    content: 'Thời gian vận chuyển trung bình là bao lâu?',
    detail: `Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên
website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.`,
  },
  {
    content: 'Thời gian vận chuyển trung bình là bao lâu?',
    detail: `Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên
website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.`,
  },
  {
    content: 'Thời gian vận chuyển trung bình là bao lâu?',
    detail: `Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên
website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.`,
  },
  {
    content: 'Thời gian vận chuyển trung bình là bao lâu?',
    detail: `Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên
website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.`,
  },
  {
    content: 'Thời gian vận chuyển trung bình là bao lâu?',
    detail: `Bạn có thể nhập mã vận đơn vào công cụ “Theo dõi đơn hàng” trên
website để kiểm tra trạng thái đơn hàng của mình theo thời gian thực.`,
  },
]

const datas = [
  {
    content: 'Từ Việt sang Mỹ',
    detail:
      'Gửi hàng từ Việt Nam sang Mỹ an toàn chỉ từ 7-11 ngày. Nhận hàng tận nơi tại Mỹ, nhận, lấy hàng tận nơi, đóng hàng miễn phí tại Việt Nam.',
  },
  {
    content: 'Từ Việt sang Úc',
    detail:
      'Gửi hàng từ Việt Nam sang Úc an toàn chỉ 8-15 ngày. Hỗ trợ lấy hàng tận nhà, giao hàng tận nơi tại Úc, đóng hàng miễn phí và đặt hộ shoppe.',
  },
  {
    content: 'Từ Việt sang Canada',
    detail:
      'Gửi hàng từ Việt Nam sang Canada an toàn chỉ từ 8-10 ngày. Nhận hàng tận nơi lại Canada, đóng hàng miễn phí tại Việt Nam',
  },
  {
    content: 'Từ Việt sang Séc',
    detail:
      'Gửi hàng từ Việt Nam sang Séc đa dạng mặt hàng, giao nhanh 12-14 ngày tận tay. Nhận sữa, thực phẩm, quần áo, bánh kẹo, miễn phí đóng gói và hút chân không.',
  },
  {
    content: 'Từ Việt sang Châu Âu',
    detail:
      'Gửi hàng từ Việt Nam sang các nước Châu Âu nhanh 12-14 ngày, giao tận tay. Nhận đa dạng mặt hàng: thực phẩm, sữa, bánh kẹo, quần áo… Miễn phí đóng thùng, hút chân không.',
  },

  {
    content: 'Từ Việt sang Hàn Quốc',
    detail:
      'Gửi hàng từ Việt Nam sang Hàn Quốc an toàn, chỉ 2-4 ngày. Nhận hàng tận nơi tại Hàn Quốc, có mã theo dõi đơn hàng và đặt hộ shoppe.',
  },
  {
    content: 'Từ Việt sang Đức',
    detail:
      'Gửi hàng từ Việt Nam sang Đức an toàn, nhanh chóng chỉ 11-14 ngày. Thanh toán bằng Euro hoặc VNĐ. Nhận hàng tận nơi tại Đức, Email Tracking.',
  },
  {
    content: 'Từ Việt sang Nhật Bản',
    detail:
      'Gửi hàng từ Việt Nam sang Nhật an toàn chỉ từ 3-5 ngày. Nhận hàng tận nơi tại Nhật, nhận mua hộ đơn shoppe và đóng hộ hàng miễn phí tại Việt Nam.',
  },
]

export default function FAQ() {
  return (
    <section className='bg-white'>
      <div className='sm:px-[6rem] px-4 sm:pt-0'>
        <div className='pb-[2.438rem] pt-12 xsm:pb-9 xsm:pt-9'>
          <h1 className='font-montserrat font-bold text-[2.5rem] xsm:text-2xl leading-none mb-8 xsm:text-center'>
            Câu hỏi thường gặp
          </h1>
          <div className='flex xsm:flex-col gap-[1.938rem] xsm:gap-[2.188rem]'>
            <div className='flex-[0_0_60%] space-y-5'>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  content={faq.content}
                  detail={faq.detail}
                  initialOpen={index < 2}
                />
              ))}
            </div>
            <div className='flex-[0_0_40%]'>
              <Accordion
                type='single'
                collapsible
                className='bg-[#F4FBFF] rounded-3xl px-[2.5rem] py-5 mb-[1.438rem] xsm:hidden'
              >
                {datas.map((data, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index + 1}`}
                    className='last:border-b-0'
                  >
                    <AccordionTrigger className='btn-faq py-5 hover:no-underline font-montserrat text-lg font-medium hover:text-Blue-Primary'>
                      {data.content}
                    </AccordionTrigger>
                    <AccordionContent className='font-montserrat text-base text-[#727272]'>
                      {data.detail}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Accordion
                type='single'
                collapsible
                className='bg-[#F4FBFF] rounded-3xl p-5 mb-6 hidden xsm:block'
              >
                <AccordionItem
                  value='item-1'
                  className='border-0'
                >
                  <AccordionTrigger className='hover:no-underline font-montserrat font-bold text-xl leading-none'>
                    Dịch vụ gửi hàng
                  </AccordionTrigger>
                  <AccordionContent className='font-montserrat text-sm text-[#727272]'>
                    Bạn cần tư vấn thêm về dịch vụ gửi hàng, vui lòng liên hệ
                    hotline 092 677 79 66 để được hỗ trợ nhanh nhất.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className='rounded-3xl bg-[#F4FBFF] py-11 px-[4.375rem] xsm:px-[1.375rem] xsm:py-4 flex flex-col items-center xsm:flex-row xsm:gap-5'>
                <h3 className='font-montserrat text-[1.375rem] font-bold leading-[1.875rem] text-center mb-[1.875rem] xsm:hidden'>
                  Liên hệ tư vấn trực tiếp
                </h3>
                <Link
                  href='tel:0926777966'
                  className='rounded-full bg-Blue-Primary p-1 xsm:p-[0.169rem] text-center mb-5 xsm:mb-0'
                >
                  <div className='size-[3.724rem] border border-white rounded-full flex items-center justify-center'>
                    <svg
                      width='41'
                      height='42'
                      viewBox='0 0 41 42'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-[2.688rem] h-[2.5rem] xsm:w-[1.706rem]'
                    >
                      <path
                        d='M39.9219 31.2344L38.0469 39.125C37.8125 40.2969 36.875 41.0781 35.7031 41.0781C16.0156 41 0 24.9844 0 5.29688C0 4.125 0.703125 3.1875 1.875 2.95312L9.76562 1.07812C10.8594 0.84375 12.0312 1.46875 12.5 2.48438L16.1719 11C16.5625 12.0156 16.3281 13.1875 15.4688 13.8125L11.25 17.25C13.9062 22.6406 18.2812 27.0156 23.75 29.6719L27.1875 25.4531C27.8125 24.6719 28.9844 24.3594 30 24.75L38.5156 28.4219C39.5312 28.9688 40.1562 30.1406 39.9219 31.2344Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </Link>
                <div className='text-center xsm:text-left'>
                  <p className='font-montserrat leading-[1.875rem] xsm:hidden'>
                    Hotline
                  </p>
                  <p className='font-montserrat text-[1.375rem] font-bold leading-[1.875rem] xsm:text-Blue-Primary xsm:text-[1.75rem] xsm:leading-[1.875rem]'>
                    092 677 79 66
                  </p>
                  <h3 className='font-montserrat text-base font-bold leading-[1.875rem] hidden xsm:block'>
                    Liên hệ tư vấn trực tiếp
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
