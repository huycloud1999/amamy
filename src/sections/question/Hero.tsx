import {ArrowRight} from 'lucide-react'

const stats = [
  {value: '04', label: 'Năm hoạt động', description: 'Thành lập năm 2021'},
  {
    value: '3',
    label: 'Đối tác',
    description: 'Các quốc gia Đức, Mỹ, Nhật',
  },
  {
    value: '18K',
    label: 'Khách hàng',
    description: 'Đã tin tưởng sử dụng dịch vụ',
  },
]

export default function Hero() {
  return (
    <section className='bg-Blue-Primary text-white'>
      <div className='sm:px-[6rem] px-4 sm:pt-0'>
        <div className='xsm:px-[0rem] sm:px-[8.5rem] pb-14 pt-24 xsm:pb-9 xsm:pt-9'>
          <h1 className='text-center font-bold font-montserrat text-[4rem] xsm:text-2xl xsm:mb-4'>
            Bạn có ý định gửi hàng ?
          </h1>
          <p className='text-center font-montserrat text-base max-w-[41.875rem] xsm:max-w-[17.938rem] mx-auto mb-14 xsm:mb-7 xsm:text-sm'>
            Gửi hàng từ Việt Nam sang Pháp đa dạng mặt hàng, giao nhanh 12-14
            ngày tận tay. Nhận sữa, thực phẩm, quần áo, bánh kẹo, miễn phí đóng
            gói và hút chân không.
          </p>
          <button
            type='button'
            className='bg-white text-Blue-Primary font-montserrat text-lg leading-6 font-medium px-6 py-3 rounded-3xl flex items-center gap-2 mx-auto hover:bg-gray-200 transition mb-7 xsm:py-1.5 xsm:px-3 xsm:text-sm tracking-tight'
          >
            Dự tính giá gửi hàng qua Pháp
            <ArrowRight className='size-6 xsm:size-4' />
          </button>
          <hr className='border-white mb-7' />
          <div className='flex items-center justify-between xsm:items-start xsm:flex-col xsm:gap-8'>
            <div className='flex-1'>
              <h1 className='font-montserrat font-bold text-[2.5rem] xsm:text-2xl leading-none'>
                Xin chào
              </h1>
              <h2 className='font-montserrat font-bold text-[2.75rem] xsm:text-3xl leading-none whitespace-nowrap'>
                Chúng tôi là Amamy
              </h2>
            </div>
            <ul className='flex-1 w-full flex items-center justify-between xsm:items-start xsm:space-x-4 font-montserrat'>
              {stats.map((stat) => (
                <li key={stat.label}>
                  <p className='font-bold text-[4rem] xsm:text-2xl leading-none'>
                    {stat.value}+
                  </p>
                  <p className='font-bold xsm:text-[0.813rem] whitespace-nowrap uppercase'>
                    {stat.label}
                  </p>
                  <p className='text-sm xsm:text-xs max-w-[9.688rem] xsm:max-w-[7.625rem]'>
                    {stat.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
