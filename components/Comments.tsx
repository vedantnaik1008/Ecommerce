'use client'
import React, { useState } from 'react'
import RatingStars from './ui/RatingStars';
import { comment, comments } from '@/redux/reducers/formClick';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type Props = {
    id: number | undefined;
}



const Comments = ({id}: Props) => {
    const [input, setInput] = useState('')
    const [ratingInput, setRatingInput] = useState(0)
    const data = useSelector((state: RootState) => state.form.comment)
    const dispatch = useDispatch()
    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!input || !ratingInput){
            alert('please fill in all fields')
            return;
        }
        const newComments: comments = {
            productId: id !== undefined ? id : 0,
            id: 1,
            comments: input,
            ratings: ratingInput
        };
        dispatch(comment(newComments))
        console.log(input, ratingInput)
        setInput('')
        setRatingInput(0)
    }
  return (
      <><form onSubmit={onSubmitHandle}>
          <input
              type='text'
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
          <RatingStars rating={ratingInput} />
          <input type="number" value={ratingInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRatingInput(e.target.valueAsNumber)} min={0} max={5} />
          <button type='submit'>Submit</button>
      </form><div>
              {data.filter((item)=> id === item.productId).map((res) => (
                  <><p key={res.id}>{res.comments}</p>{res.ratings === 0 ? null : <RatingStars rating={res.ratings}/>}</>
              ))}
          </div></>
  );
}

export default Comments
