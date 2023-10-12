import React from 'react'
import Video from './Video'
import { Button } from '@/components/ui/button'

const Examples = () => {
    return (
        <section className='w-full h-auto px-5 pb-7'>
            <div>
                <h1 className='text-center font-bold text-2xl text-black'>Post Like This <span className='bg-gradient-to-r from-[#F22E76] to-[#5D14A6] text-transparent bg-clip-text'>Top Content Creators</span></h1>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-5 py-7'>
                <div className='relative'>
                    <Video pauseAble={true} source='./landing-page-assets/videos/muslim.mp4' />
                </div>
                <div className='relative'>
                    <Video pauseAble={true} source='./landing-page-assets/videos/fish.mp4' />
                </div>
                <div className='relative'>
                    <Video pauseAble={true} source='./landing-page-assets/videos/captionVideo.mp4' />
                </div>
                <div className='relative'>
                    <Video pauseAble={true} source='./landing-page-assets/videos/khamzat.mp4' />
                </div>
            </div>
            <div className=' flex items-center justify-center'>
                {/* <button className="rounded-full px-10 py-3 text-white bg-[#F22E76]">Start Now</button> */}
                <Button variant={"default"} >Start Now</Button>
            </div>
        </section>
    )
}

export default Examples
