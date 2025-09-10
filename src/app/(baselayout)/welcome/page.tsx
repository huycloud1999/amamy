import WelcomePage from '@/sections/welcome/Index'
import fetchData from '@/fetch/fetchData'
import getSchemaMarkup from '@/fetch/getSchemaMarkup'

export default async function Welcome() {

  const fetchDataACF = fetchData({
    api: 'pages/11',
    option: {
      next: {revalidate: 60},
    },
  })
  const fetchDataBlogs = fetchData({
    api: 'blogs?paged=1&limit=10',
    option: {
      next: { revalidate: 60 },
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

  const [
    dataACF,
    dataBlogs,
    schemaData,
    chatBoxAIdata,
    deliveryDirectionData,
    currencyExchangeRateData,
  ] = await Promise.all([
    fetchDataACF,
    fetchDataBlogs,
    getSchemaMarkup(''),
    fetchChatBoxAI,
    fetchDeliveryDirection,
    fetchCurrencyExchangeRate,
  ])

  return (
    <main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData, null, 2)}}
      ></script>
      <WelcomePage
        res={dataACF}
        chatBoxAiData={chatBoxAIdata?.data?.box_chat_ai}
        dataBlog={dataBlogs?.posts}
        deliveryDirectionData={deliveryDirectionData}
        currencyExchangeRateData={currencyExchangeRateData}
      />
    </main>
  )
}