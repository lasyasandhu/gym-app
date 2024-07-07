// import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p className='text-4xl'>GET FIT WITH</p>
                <h1 className='uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>FITLAB</h1>
            </div>
            <p className='text-sm md:text-base font'>
            <span className='font-semibold text-2xl'>Discover your perfect workout with our intuitive exercise guide!</span> Get ready to elevate your fitness journey—one muscle at a time!
            Whether you're aiming to build strength, tone up, or improve flexibility, our site offers personalized recommendations and step-by-step instructions to help you get there.
            </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Begin"}></Button>
        </div>
    )
}