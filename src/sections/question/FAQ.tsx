import FAQItem from '@/components/question/FAQItem'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ICPhone from '../tao-don/ICPhone'

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
    <section>
      <div className='sm:px-[6rem] px-4 sm:pt-0'>
        <div className='xsm:px-[0rem] sm:px-[8.5rem] pb-14 pt-24 xsm:pb-9 xsm:pt-9'>
          <h1 className='font-montserrat font-bold text-[2.5rem] xsm:text-2xl leading-none mb-8 xsm:text-center'>
            Câu hỏi thường gặp
          </h1>
          <div className='flex gap-[1.938rem]'>
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
                className='bg-[#F4FBFF] rounded-3xl px-[2.5rem] py-[1.563rem] mb-[1.438rem]'
              >
                {datas.map((data, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index + 1}`}
                    className='last:border-b-0'
                  >
                    <AccordionTrigger className='btn-faq hover:no-underline font-montserrat text-lg font-medium hover:text-Blue-Primary'>
                      {data.content}
                    </AccordionTrigger>
                    <AccordionContent className='font-montserrat text-base text-[#727272]'>
                      {data.detail}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className='rounded-3xl bg-[#F4FBFF] py-11 px-[4.375rem]'>
                <h3 className='font-montserrat text-[1.375rem] font-bold leading-[1.875rem] text-center mb-[1.875rem]'>
                  Liên hệ tư vấn trực tiếp
                </h3>
                <button
                  type='button'
                  className='rounded-full bg-Blue-Primary p-1'
                >
                  <div className='size-[5.5rem]'></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
