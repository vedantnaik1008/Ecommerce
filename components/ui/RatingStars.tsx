import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface Props {
    rating: number;
}

const RatingStars = ({ rating }: Props) => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2;

    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            stars.push(<FaStar key={i} color='gold' />);
        } else if (i - 0.5 === roundedRating) {
            stars.push(<FaStarHalf key={i} color='gold' />);
        } else {
            stars.push(<FaStar key={i} color='gray' />);
        }
    }

    return <div className='flex'>{stars}</div>;
};

export default RatingStars;
