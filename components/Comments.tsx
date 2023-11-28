'use client';
import Image from 'next/image';
import UserImage from '@/images/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail(1).png';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
import RatingStars from './RatingStars';
const Comments = () => {
    const { user } = useUser();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(rating, review);
    };
    return (
        <>
            <section className='my-[80px] w-[90%] mx-auto flex items-center justify-between gap-x-8'>
                <div className='w-[50%]'>
                    <form onSubmit={handleSubmit} className=''>
                        <div className=''>
                            <label>Rating</label>
                            <select
                                value={rating}
                                onChange={(e) =>
                                    setRating(parseInt(e.target.value))
                                }>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <div className=''>
                            <label>Review</label>
                            <textarea
                                value={review}
                                onChange={(e) =>
                                    setReview(e.target.value)
                                }></textarea>
                        </div>
                        <button type='submit' className=''>
                            Submit
                        </button>
                    </form>
                </div>
                <div className='w-[50%]'>
                    <div className='flex gap-3 items-center'>
                        <Image
                            src={user?.imageUrl || UserImage}
                            alt='bannerone'
                            height={40}
                            width={40}
                            className='rounded-full'
                        />
                        <p className='black font-bold'>{user?.fullName}</p>
                    </div>
                    <div className="">
                      <RatingStars rating={rating} />
                    </div>
                    <p className="">{review}</p>
                </div>
            </section>
        </>
    );
};

export default Comments;
