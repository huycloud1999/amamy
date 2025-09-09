import fetchData from '@/fetch/fetchData'
import getMetaDataRankMath from '@/fetch/getMetaDataRankMath'
import getSchemaMarkup from '@/fetch/getSchemaMarkup'
import RelatedBlogsV2 from '@/sections/blog/detail/RelatedBlogsV2'
import Banner from '@/sections/homepage/banner'
import FAQ from '@/sections/question/FAQ'
import Hero from '@/sections/question/Hero'
import OurService from '@/sections/question/OurService'
import Reason from '@/sections/question/Reason'
import metadataValues from '@/utils/metadataValues'

export async function generateMetadata() {
  const res = await getMetaDataRankMath('')
  return metadataValues(res)
}

export default async function Question() {
  const fetchDataACF = fetchData({
    api: 'pages/11',
    option: {
      next: {revalidate: 60},
    },
  })

  const fetchChatBoxAI = fetchData({
    api: 'options?fields=box_chat_ai',
    option: {
      next: {revalidate: 60},
    },
  })
  const fetchDeliveryDirection = fetchData({
    api: 'chieu-van-chuyen',
    method: 'GET',
    option: {
      next: {revalidate: 60},
    },
  })
  const fetchCurrencyExchangeRate = fetchData({
    api: 'options?fields=currency_to_usd',
    method: 'GET',
    option: {
      next: {revalidate: 60},
    },
  })
  const fetchDataServices = fetchData({
    api: 'chieu-van-chuyen/tu-viet-nam-sang-phap?_fields=banner,talk_to_ai,list_services,feedback_customer,suggested_reading_articles_about_shipping',
    option: {
      next: {revalidate: 60},
    },
  })

  const [
    dataACF,
    schemaData,
    chatBoxAIdata,
    deliveryDirectionData,
    currencyExchangeRateData,
    resService,
  ] = await Promise.all([
    fetchDataACF,
    getSchemaMarkup(''),
    fetchChatBoxAI,
    fetchDeliveryDirection,
    fetchCurrencyExchangeRate,
    fetchDataServices,
  ])

  return (
    <>
      {' '}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData, null, 2)}}
      ></script>
      <Hero />
      <FAQ />
      <Banner
        banner={dataACF.banner}
        boxChatAI={chatBoxAIdata?.data?.box_chat_ai}
        deliveryDirectionData={deliveryDirectionData}
        currencyExchangeRateData={currencyExchangeRateData}
      />
      <Reason />
      <OurService />
      {Array.isArray(
        resService?.suggested_reading_articles_about_shipping?.post,
      ) && (
        <RelatedBlogsV2
          data={resService?.suggested_reading_articles_about_shipping?.post}
          title={
            resService?.suggested_reading_articles_about_shipping?.title ??
            'Nên đọc cho gửi hàng'
          }
          className='bg-white [&_.ItemBlog]:shadow-none [&_.swiper-slide]:!w-[26.8125rem] xsm:[&_.swiper-slide]:!w-[16.875rem]'
        />
      )}
    </>
  )
}
