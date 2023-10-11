import DynamicPage from "@/components/DynamicPage"

export default async function Page({params}:{params:{id:string}}){
  const productId = parseInt(params.id, 10)


  return (
    <div>
      <DynamicPage product={productId}/>
    </div>
  )

}