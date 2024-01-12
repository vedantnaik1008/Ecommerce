import { StaticImageData } from "next/image";
// import bannerone from '@/images/bannerone.webp';
import bannertwo from '@/images/bannertwo.webp';
import bannerthree from '@/images/bannerthree.webp';

type bannerProps = {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
};

export const bannerData: bannerProps[] = [
    { id: 2, title: 'Seasonal Offers', img: bannertwo, alt: 'bannertwo' },
    { id: 3, title: 'Best for men', img: bannerthree, alt: 'bannerthree' }
];