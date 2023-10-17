import HankoAuth from "@/components/HankoAuth";
import Image from 'next/image'

export default function LoginPage() {
 return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <HankoAuth />
    </div>
 );
}
