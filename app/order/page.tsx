import OrderDetail from "@/components/orderDetail"

async function fetchData ()  {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}` + `/api/getOrder`, { cache: 'no-store' });
  if(!res.ok){
    throw new Error('failed to fetch GetOrders')
  }

return res.json()
}



const Order = async () => {
  const order = await fetchData()
   console.log(order);
  return (
   <OrderDetail order={order}/>
  )
}

export default Order
