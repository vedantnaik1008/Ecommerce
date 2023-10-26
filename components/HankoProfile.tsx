"use client"

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { LogoutBtn } from "./LogoutButton";
import { Cookie } from "next/font/google";

const CookieFont = Cookie({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-family',
    weight: "400"
  })


const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);

return (
    <>
    <div className={`${CookieFont.variable}`}>
      <hanko-profile />
    </div>
      <LogoutBtn />
    </>
  );
}

