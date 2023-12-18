'use client';
import { RootState } from '../../redux/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../../redux/reducers/formClick';
import { Address } from '../../redux/reducers/addItems';
import PaymentButton from '../PaymentButton';

const Form = () => {
    const [address, setAddress] = useState({
        name: '',
        street: '',
        phone: 0,
        city: '',
        pincode: 0,
        state: '',
    });
    const [isValid, setIsValid] = useState(false);
    const isOpen = useSelector((state: RootState) => state.form.isOpen);
    const dispatch = useDispatch();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        checkValidation();
    }

    function checkValidation() {
        const allFields = Object.values(address).every((field) => field);
        setIsValid(allFields);
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(Address(address));
        console.log(address);
    }
    
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
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input
                    required
                    placeholder='Full Name'
                    type='text'
                    name='name'
                    value={address.name}
                    onChange={handleChange}
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                <input
                    required
                    placeholder='Street'
                    type='text'
                    name='street'
                    value={address.street}
                    onChange={handleChange}
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                <input
                    required
                    placeholder='City'
                    type='text'
                    name='city'
                    value={address.city}
                    onChange={handleChange}
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                <input
                    required
                    placeholder='Pincode'
                    type='number'
                    name='pincode'
                    value={address.pincode}
                    onChange={handleChange}
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                <input
                    required
                    placeholder='Contact Number'
                    type='number'
                    name='phone'
                    value={address.phone}
                    onChange={handleChange}
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                <input
                    required
                    placeholder='State'
                    type='text'
                    name='state'
                    value={address.state}
                    onChange={handleChange}
                    className='mb-2 bg-white px-4 py-2 rounded focus:outline-none  border hover:border-black placeholder:text-black'
                />
                <PaymentButton isValid={isValid} />
            </form>
        </div>
    );
};

export default Form;
