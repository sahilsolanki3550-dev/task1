import React from 'react'

export const HeroBanner = () => {
    return (
        <div className='flex p-10 mx-10'>
            <div className='w-[1000px] flex flex-col'>
                <h1 className='text-7xl font-medium'> Stay ahed of the curve with our forward-thinking</h1>
                <p className='py-2 text-gray-500 w-[500px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum quisquam dolores praesentium alias quis odit atque, fugit labore consequuntur excepturi?</p>
                <div>

                    <button className='px-5 py-2 rounded-3xl bg-black text-white mr-3   '>Schedule a call</button>
                    <button>View case study</button>
                </div>
                <div className='py-10 flex  gap-10'>
                    <p className='w-50 font-m'>Trusted by worlds biggest brands</p>
                    <p>afterpay</p>
                    <p>basecamp</p>
                    <p>maze</p>
                </div>
            </div>

            <div className='justify-right flex flex-col'>
                {/* <img src="" alt="" /> */}
                <div className='flex '>

                    <div className='w-[300px] h-[300px] bg-gray-200 rounded-2xl p-10 mx-10'>
                        <img src="" alt="" />
                        <h1>Image</h1>
                    </div>
                    <div className='w-[300px] h-[300px] bg-gray-200 rounded-2xl p-10'>
                        <h1 className='text-7xl font-bold mb-5'>230+</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perspiciatis nemo minima magnam adipisci laborum, eaque provident illo consequuntur aliquid.</p>
                    </div>
                </div>
                <div className='w-[650px] p-5 bg-black rounded-2xl m-5 ml-10 text-white'>

                    <div className='flex flex-col w-[300px] ml-5'>
                        <p>---------------- Drive More trafficSales</p>
                        <h1 className='text-3xl my-5 font-medium'>Drive more traffic  and products sales</h1>
                    </div>
                    <div></div>
                </div>

            </div>
        </div>
    )
}
