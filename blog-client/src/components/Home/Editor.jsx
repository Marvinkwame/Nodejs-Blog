import React from 'react'
import blog from "../../assets/blog.webp";

const Editor = () => {
  return (
    <section className='py-12'>
        <div className='max-w-[1444px] w-full my-0 mx-auto py-8 border-blue-950 md:px-10 px-3'>
            <h2>Editor's Picks</h2>
            <div className='flex flex-col md:flex-row mx-auto items-center justify-between gap-4'>
                {/* Cards */}
                <div className='grid place-items-center md:place-items-start'>
                    <img src={blog} alt="" />
                    <div className='flex items-center mt-2'>
                        <p className='px-1 border-r-2 border-r-green-900 font-semibold'>2.4k Views</p>
                        <p className='px-1'>3 minute read</p>
                    </div>
                    <h2 className='font-semibold'>Gary Inman Wants to Teach You How to Build A House</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores eveniet mollitia.</p>
                    <div className='flex items-center mt-2'>
                        <p className='px-1 border-r-2 border-r-green-900 font-semibold'>by Hatake Kakashi</p>
                        <p className='px-1'>22 July 2023</p>
                    </div>
                </div>

                <div className='grid place-items-center md:place-items-start'>
                    <img src={blog} alt="" />
                    <div className='flex items-center mt-2'>
                        <p className='px-1 border-r-2 border-r-green-900'>2.4k Views</p>
                        <p className='px-1'>3 minute read</p>
                    </div>
                    <h2 className='font-semibold'>Gary Inman Wants to Teach You How to Build A House</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores eveniet mollitia.</p>
                    <div className='flex items-center mt-2'>
                        <p className='px-1 border-r-2 border-r-green-900 font-semibold'>by Hatake Kakashi</p>
                        <p className='px-1'>22 July 2023</p>
                    </div>
                </div>

                <div className='grid place-items-center md:place-items-start'>
                    <img src={blog} alt="" />
                    <div className='flex items-center mt-2'>
                        <p className='px-1 border-r-2 border-r-green-900'>2.4k Views</p>
                        <p className='px-1'>3 minute read</p>
                    </div>
                    <h2 className='font-semibold'>Gary Inman Wants to Teach You How to Build A House</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam asperiores eveniet mollitia.</p>
                    <div className='flex items-center mt-2'>
                        <p className='px-1 border-r-2 border-r-green-900 font-semibold'>by Hatake Kakashi</p>
                        <p className='px-1'>22 July 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Editor