import DynamicPage from "@/components/DynamicPage"
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default async function Page({params}:{params:{id:string}}){
  const productId = parseInt(params.id, 10)


  return (
    <div>
      <Header />
      <DynamicPage product={productId}/>
      <Footer />
    </div>
  )

}