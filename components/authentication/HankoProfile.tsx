"use client"
import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { LogoutBtn } from "./LogoutButton";
import { CookieFont } from "./userData";



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

