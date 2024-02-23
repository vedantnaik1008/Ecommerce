'use client';
import payment from '@/public/images/payment.webp';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/quickkart-high-resolution-logo-color-on-transparent-background.webp';


const Footer = () => {
    return (
        <footer className={` w-[95%] mx-auto my-4 shadow-sm shadow-black rounded-xl px-[20px] py-[40px] bg-white text-black h-full`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-y-4'>
                    <Link href='/' className=''>
                        <Image
                            src={Logo}
                            alt='items-image'
                            width={100}
                            height={10}
                            className='object-cover'
                        />
                    </Link>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ipsa in sint incidunt, minima quos voluptates
                    </p>
                    <div className='flex items-center gap-x-4'>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 16 16'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z'></path>
                        </svg>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 16 16'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'></path>
                        </svg>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 16 16'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'></path>
                        </svg>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 16 16'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                        </svg>
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            stroke-width='0'
                            viewBox='0 0 16 16'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z'></path>
                            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z'></path>
                        </svg>
                    </div>
                </div>
                <div>
                    <p className='text-lg'>Laset posts</p>
                    <ul className='text-sm font-light mt-2 flex flex-col gap-y-2'>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>
                                Where Music Is Headed Next
                            </span>
                            <span className='text-orange-600'>
                                January 31, 2022
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>
                                Where Music Is Headed Next
                            </span>
                            <span className='text-orange-600'>
                                January 31, 2022
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>
                                Where Music Is Headed Next
                            </span>
                            <span className='text-orange-600'>
                                January 31, 2022
                            </span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate hover:text-orange-600 cursor-pointer duration-200'>
                                Where Music Is Headed Next
                            </span>
                            <span className='text-orange-600'>
                                January 31, 2022
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg'>Links</p>
                    <ul className='text-base font-medium mt-2 flex flex-col gap-y-2'>
                        <li className='hover:text-orange-500 cursor-pointer duration-200'>
                            <Link href={'/dashboard'}>Home</Link>
                        </li>
                        <li className='hover:text-orange-500 cursor-pointer duration-200'>
                            <Link href={'/Shop'}>Shop</Link>
                        </li>
                        <li className='hover:text-orange-500 cursor-pointer duration-200'>
                            <Link href={'/order'}>Order</Link>
                        </li>
                        <li className='hover:text-orange-500 cursor-pointer duration-200'>
                            <Link href={'/cart'}>Cart</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg mb-2'>
                        Pay us with your trusted services
                    </p>
                    <Image
                        src={payment}
                        alt='payment banner image'
                        className='w-full  object-cover'
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
