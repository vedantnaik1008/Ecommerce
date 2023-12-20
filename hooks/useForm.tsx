import { Address } from '@/redux/reducers/addItems';
import { RootState } from '@/redux/store';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const useForm = () => {
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
  return { handleSubmit, handleChange, isValid, isOpen, address, dispatch };
}

export default useForm
