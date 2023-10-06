import React from 'react'
import Image from 'next/image'
import { PlayIcon } from '@radix-ui/react-icons'

const Examples = () => {
    return (
        <section className='w-full h-auto px-5 pb-7'>
            <div>
                <h1 className='text-center font-bold text-2xl text-black'>Post Like This <span className='bg-gradient-to-r from-[#F22E76] to-[#5D14A6] text-transparent bg-clip-text'>Top Content Creators</span></h1>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-5'>
                <div className='relative'>
                    <Image
                        className="py-7"
                        src={"./landing-page-assets/short.svg"}
                        width={250}
                        height={50}
                        alt="short video image"
                    />
                    <div className='absolute bg-[#5D14A6] rounded-full p-1 flex items-center justify-center bottom-12 right-5'>
                        <PlayIcon color='red' width={30} height={30} />
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        className="py-7"
                        src={"./landing-page-assets/short.svg"}
                        width={250}
                        height={50}
                        alt="short video image"
                    />
                    <div className='absolute bg-[#5D14A6] rounded-full p-1 flex items-center justify-center bottom-12 right-5'>
                        <PlayIcon color='red' width={30} height={30} />
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        className="py-7"
                        src={"./landing-page-assets/short.svg"}
                        width={250}
                        height={50}
                        alt="short video image"
                    />
                    <div className='absolute bg-[#5D14A6] rounded-full p-1 flex items-center justify-center bottom-12 right-5'>
                        <PlayIcon color='red' width={30} height={30} />
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        className="py-7"
                        src={"./landing-page-assets/short.svg"}
                        width={250}
                        height={50}
                        alt="short video image"
                    />
                    <div className='absolute bg-[#5D14A6] rounded-full p-1 flex items-center justify-center bottom-12 right-5'>
                        <PlayIcon color='red' width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className=' flex items-center justify-center'>
                <button className="rounded-full px-10 py-3 text-white bg-[#F22E76]">Start Now</button>
            </div>
        </section>
    )
}

export default Examples
