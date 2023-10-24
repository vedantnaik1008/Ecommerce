'use client'

import { Hanko } from "@teamhanko/hanko-elements";
import { redirect } from "next/navigation";
import React, { useEffect } from 'react'
import HankoAuth from "./HankoAuth";

const UserData = () => {
   useEffect(()=> {
    const userData = async() => {
        try {
            const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;
            const hanko = new Hanko(hankoApi);
            const user = await hanko.user.getCurrent();
            
            if(user && user.id){
                redirect('/dashboard');  
            }
        } catch(error) {
            console.log(error);
        } 
    }
    userData()
   },[])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <HankoAuth />
    </div>
  )
}

export default UserData



