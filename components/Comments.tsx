'use client';
import React, { useState } from 'react';
import RatingStars from './ui/RatingStars';
import { comment, comments, removeReview } from '@/redux/reducers/formClick';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import User from '@/public/images/quickkart-high-resolution-logo-color-on-transparent-background.webp';
import Image from 'next/image';

type Props = {
    id: number | undefined;
};

const Comments = ({ id }: Props) => {
    const [input, setInput] = useState('');
    const [review, setReview] = useState(false)
    const [ratingInput, setRatingInput] = useState(0);
    const data = useSelector((state: RootState) => state.form.comment);
    const dispatch = useDispatch();
    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input || !ratingInput) {
            alert('please fill in all fields');
            return;
        }
        const newComments: comments = {
            productId: id !== undefined ? id : 0,
            id: Date.now(),
            comments: input,
            ratings: ratingInput
        };
        dispatch(comment(newComments));
        console.log(data.length , data);
        
        console.log(input, ratingInput);
        setInput('');
        setRatingInput(0);
    };
    return (
        <>
            <section className='py-10'>
                <div className='text-center my-[20px]'>
                    <h2 className='font-bold min-[320px]:text-4xl md:text-5xl text-black'>
                        Reviews
                    </h2>
                </div>
                <button
                    onClick={() => setReview(!review)}
                    type='button'
                    className='flex-start px-4 my-4 py-2 ml-8 text-white font-semibold bg-black rounded-md'>
                    write your review
                </button>
                {review ? (
                    <form
                        onSubmit={onSubmitHandle}
                        className='flex flex-col w-[95%] md:w-[50%] gap-4 py-10 px-5 border-2 border-black rounded-lg mx-auto md:ml-8 bg-white'>
                        <input
                            className='rounded-md px-2 border border-black'
                            placeholder='write review'
                            type='text'
                            value={input}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setInput(e.target.value)}
                        />
                        <div className='flex items-center gap-4'>
                            <input
                                className='rounded-md px-2 border border-black'
                                type='number'
                                value={ratingInput}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setRatingInput(e.target.valueAsNumber)}
                                min={0}
                                max={5}
                            />
                            <RatingStars rating={ratingInput} />
                        </div>
                        <button
                            type='submit'
                            className='flex-start px-4 py-2 text-white font-semibold bg-black rounded-md'>
                            Submit
                        </button>
                    </form>
                ) : null}
                <div>
                    {data
                        .filter((item) => id === item.productId)
                        .map((res) => (
                            <>
                                <div className='bg-white border-black border-2 rounded-md my-5 p-5 w-[95%] mx-auto relative'>
                                    <button
                                        onClick={() =>
                                            dispatch(removeReview(res.id))
                                        }
                                        type='button'
                                        className='flex-start px-4 my-4 py-2 ml-8 text-white font-semibold bg-black rounded-full absolute top-0 right-4'>
                                        X
                                    </button>
                                    <div className='flex items-center gap-4 '>
                                        <Image
                                            src={User}
                                            alt='user'
                                            width={50}
                                            height={50}
                                            className='rounded-full border-black border-2'
                                        />
                                        <p className=''>vedant naik</p>
                                        {res.ratings === 0 ? null : (
                                            <RatingStars rating={res.ratings} />
                                        )}
                                    </div>
                                    <p
                                        key={res.id}
                                        className='my-2 w-[98%] mx-auto'>
                                        {res.comments}
                                    </p>
                                </div>
                            </>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Comments;
