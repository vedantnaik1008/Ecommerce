'use client'
import Card from "./Card";
import Link from "next/link";
import Loading from "./Loading";
import { useFetch } from "@/hooks/useFetch";



const Electronics = () => {
  const { response, loading } = useFetch('/fetchData')
  const filteredData = response.filter(res => res.category === 'electronics')
  if (loading) return <Loading />

  return (
      <div className="w-[95%] mx-auto py-[100px]">
        <div className="grid grid-cols-1 six:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[60px]">
          {filteredData.map((res) => (
            <Link href={`/details/${res._id}?id=${res._id}`} className="" key={res._id}>
              <Card res={res} />
            </Link>
          ))}
        </div>
      </div>
  )
}

export default Electronics