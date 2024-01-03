'use client';
import dynamic from 'next/dynamic';
import { Address } from '@/redux/reducers/addItems';
import { RootState } from '@/redux/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { closeForm } from '../../redux/reducers/formClick';
const PaymentButton = dynamic(() => import('../PaymentButton'));
import { z } from "zod";

export const adressSchema = z.object({
    name: z.string(),
    street: z.string(),
    phone: z.number(),
    city: z.string(),
    pincode: z.number(),
    state: z.string(),
})

export type TAddressSchema = z.infer<typeof adressSchema>;

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<TAddressSchema>({
        resolver: zodResolver(adressSchema),
    });
    const isOpen = useSelector((state: RootState) => state.form.isOpen);
    const dispatch = useDispatch();

    const onSubmit = (data: TAddressSchema) => {
        dispatch(Address(data));
    };
    
    return (
        <div
            className={
                isOpen
                    ? 'bg-white rounded-lg p-[20px] absolute top-0 left-0 z-10 w-full'
                    : 'hidden'
            }>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl uppercase text-black font-bold'>
                    Delivery Address
                </h2>
                <button
                    onClick={() => dispatch(closeForm())}
                    className='py-2 px-6 bg-black text-white  font-semibold my-5 rounded-md '>
                    CLose
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
            <input
                    {...register('name')}
                    placeholder='Full Name'
                    type='name'
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                {errors.name && (
                    <p className='text-red-500'>{errors.name.message}</p>
                )}

                <input
                    {...register('street')}
                    placeholder='Street'
                    type='street'
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                {errors.street && (
                    <p className='text-red-500'>{errors.street.message}</p>
                )}

                <input
                    {...register('city')}
                    placeholder='City'
                    type='city'
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                {errors.city && (
                    <p className='text-red-500'>{errors.city.message}</p>
                )}

                <input
                    {...register('pincode', { valueAsNumber: true })}
                    placeholder='Pincode'
                    type='pincode'
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                {errors.pincode && (
                    <p className='text-red-500'>{errors.pincode.message}</p>
                )}

                <input
                    {...register('phone', { valueAsNumber: true })}
                    placeholder='Contact Number'
                    type='phone'
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                {errors.phone && (
                    <p className='text-red-500'>{errors.phone.message}</p>
                )}
                <input
                    {...register('state')}
                    placeholder='State'
                    type='state'
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                {errors.state && (
                    <p className='text-red-500'>{errors.state.message}</p>
                )}
                <PaymentButton isValid={isValid} />
            </form>
        </div>
    );
};

export default Form;
