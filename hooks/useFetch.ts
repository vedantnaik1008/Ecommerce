import axios from 'axios'
import { useState, useEffect } from 'react'

export interface Product{
    _id: number;
    title: string;
    category: string
    description: string
    image: string;
    price: number;
    rating: number;
    quantity: number
  }

export const useFetch = (url: string) => {
  const [response, setResponse] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get<Product[]>(url)
      setResponse(res.data)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { response, loading, setResponse }
}

