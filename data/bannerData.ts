import { StaticImageData } from "next/image";
import bannerone from '@/public/images/bannerone.webp';
import bannertwo from '@/public/images/bannertwo.webp';
import bannerthree from '@/public/images/bannerthree.webp';

type bannerProps = {
    id: number;
    title: string;
    img: StaticImageData;
    alt: string;
};

export const bannerData: bannerProps[] = [
    { id: 1, title: 'Outware Picks', img: bannerone, alt: 'bannerone' },
    { id: 2, title: 'Seasonal Offers', img: bannertwo, alt: 'bannertwo' },
    { id: 3, title: 'Best for men', img: bannerthree, alt: 'bannerthree' }
];