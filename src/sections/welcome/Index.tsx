import Question from '@/sections/welcome/Question'
import Reason from '@/sections/welcome/Reason'
import OurServices from '@/sections/welcome/OurServices'

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

const Welcome = () => {
  return (
    <div className='w-full'>
      {/* Banner */}
      <div className="w-full h-full bg-Blue-Primary">
        <div className="flex flex-col gap-7 justify-center items-center font-montserrat pt-[99px] pb-[58px] xsm:pb-[32px]">
          <div className="flex flex-col gap-[15px] items-center justify-center text-center text-white pb-[26px] xsm:pb-0">
            <h1 className="font-bold text-[64px] xsm:text-[24px] leading-[122%] tracking-normal">Bạn có ý định gửi hàng ?</h1>
            <p className="w-[670px] xsm:w-[287px] font-normal text-base xsm:text-sm leading-[100%]">
              Gửi hàng từ Việt Nam sang Pháp đa dạng mặt hàng, giao nhanh 12–14 ngày tận tay. Nhận sữa, thực phẩm, quần áo, bánh kẹo, miễn phí đóng gói và hút chân không.
            </p>
          </div>

          <button className="w-[372px] xsm:w-[254px] h-[58px] xsm:h-[36px] flex justify-center items-center rounded-3xl bg-white">
            <div className="flex items-center justify-center gap-[8px] font-medium text-[19.2px] xsm:text-[14px] leading-[24.96px] tracking-[-0.58px] text-Blue-Primary">
              Dự tính giá gửi hàng qua Pháp
              <svg className="w-[17px] xsm:w-[9px] h-[16px] xsm:h-[8px]" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.30019 14.0898L15.6 7.79003M15.6 7.79003L9.30019 1.49033M15.6 7.79003H1.19995" stroke="#38B6FF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </button>

          <div className="xsm:px-[36px]">
            <div className="w-[1299px] xsm:w-full pt-[30px] xsm:pt-[15px] grid grid-cols-2 xsm:grid-cols-1 xsm:gap-y-[30px] text-white border-t border-white">
              <div className="flex flex-col">
                <span className="text-[40px] xsm:text-[24px] font-bold leading-[100%] tracking-normal">Xin chào</span>
                <span className="text-[48px] xsm:text-[32px] font-bold leading-[100%] tracking-normal">Chúng tôi là Amamy</span>
              </div>

              <div className="flex justify-between">
                {achieve.map((item, i) => (
                  <div key={i} className="w-[151px] xsm:w-[99px] flex flex-col gap-[6px] xsm:gap-[10px]">
                    <p className="text-[64px] xsm:text-[24px] font-bold leading-[100%] tracking-normal">{item.number}</p>
                    <p className="text-[16px] xsm:text-[13px] font-bold leading-[100%] tracking-normal">{item.title}</p>
                    <p className="text-[14px] xsm:text-[12px] font-normal leading-[100%] tracking-normal whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Question />
      <Reason />
      <OurServices />
    </div>
  )
}
export default Welcome