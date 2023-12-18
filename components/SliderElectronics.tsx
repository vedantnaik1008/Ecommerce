"use client"
import Image from 'next/image'
import Slider from 'react-slick';
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import RatingStars from './ui/RatingStars';
import Link from 'next/link';
import { useFetch } from '../hooks/useFetch';
import Loading from './ui/Loading';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducers/addItems';
import SliderPresentational from './SliderPresentational';

const SliderElectronics = () => {
  const { response, loading } = useFetch('/api/fetchData')
  const data = response.filter((res) => res.category === 'electronics').slice(0, 10)
  if(loading)return <Loading />

  return (
    <SliderPresentational data={data} link={'electronics'} heading={'Electronics'}/>
  )
}

export default SliderElectronics