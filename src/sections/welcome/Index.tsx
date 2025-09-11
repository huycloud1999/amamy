import Question from '@/sections/welcome/Question'
import Reason from '@/sections/welcome/Reason'
import Hero from '@/sections/welcome/Hero'
import OurServices from '@/sections/welcome/OurServices'
import { IItemPostBlog } from '@/sections/blog/blogs.interface'
import RelatedBlogs from '@/sections/blog/detail/RelatedBlogs'
import Banner from '@/sections/homepage/banner'
import {
  CurrencyToUsdResType,
  DeliveryDirectionResType,
  IHomePage,
} from '@/utils/type'

type Props = {
  res: IHomePage
  dataBlog: IItemPostBlog[]
  chatBoxAiData: {
    title: string
    customer_chat: string
    ai_chat: string
    link_chat_ai: string
  }
  deliveryDirectionData: DeliveryDirectionResType
  currencyExchangeRateData: CurrencyToUsdResType
}

const WelcomePage = ({
  res,
  dataBlog,
  chatBoxAiData,
  deliveryDirectionData,
  currencyExchangeRateData,
}: Props) => {
  return (
    <div className='w-full overflow-hidden'>
      <Hero />
      <Question />
      <Banner
        banner={res.banner}
        boxChatAI={{
          ...res.chat_box_ai,
          link_chat_ai: chatBoxAiData.link_chat_ai,
        }}
        deliveryDirectionData={deliveryDirectionData}
        currencyExchangeRateData={currencyExchangeRateData}
      />
      <Reason />
      <OurServices />
      {Array.isArray(dataBlog) && (
        <RelatedBlogs
          data={dataBlog}
          title='Các tin tức mới nhất'
          className='[&_.ItemBlog]:shadow-none [&_.swiper-slide]:!w-[26.8125rem] xsm:[&_.swiper-slide]:!w-[16.875rem]'
        />
      )}
    </div>
  )
}
export default WelcomePage