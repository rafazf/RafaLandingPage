'use client'
import React from "react";

const Inicio = ()=>{
    const btn = ()=>{
        for (let i = 0; i < 10 ; i++) {
            console.log(i+'Geyby 😘😘😘❤️ 🍆 🤫😏😏')
        }
    }
    return(
        <>
            <div className='bg-[#F6F6F6] w-5/6 m-auto flex flex-col gap-3'>

                <div className='text-white flex flex-row justify-start gap-3 md:h-36 h-28'>
                    <div className='bg-[#08084A] rounded-2xl p-2 md:w-4/6 w-full' onClick={btn}>
                        <h1 style={{fontSize:'30px',fontWeight:'700'}}>👋</h1>
                        <p></p>
                    </div>
                    <div className='rounded-2xl w-1/6 bg-[#5865F2] hidden md:flex'>
                        <h1></h1>
                    </div>
                    <div className='rounded-2xl w-1/6 bg-[#08084A] hidden md:flex'>
                        <h1></h1>
                    </div>
                </div>

                <div className='text-white flex flex-row justify-start md:h-36 h-28 gap-2'>
                    <div className='rounded-2xl md:w-1/6 w-1/3 bg-[#5865F2] '>
                        <h1></h1>
                    </div>
                    <div className='rounded-2xl md:w-1/6 w-1/3 bg-[#C1D5FC]'>
                        <h1></h1>
                    </div>
                    <div className='rounded-2xl md:w-1/6 w-1/3 bg-[#192052]'>
                        <h1></h1>
                    </div>
                    <div className='bg-gray-400 w-1/2 rounded-2xl md:flex hidden'>
                        <h1></h1>
                    </div>
                </div>
                <div className='bg-gray-400 rounded-2xl h-28 w-full md:hidden'>
                    <h1></h1>
                </div>

                <div className='flex flex-row gap-3 md:h-36 h-28'>
                    <div className='bg-[#38383C] md:w-1/2 w-1/3 rounded-2xl'>
                        <a href="#"></a>
                    </div>

                    <div className='rounded-2xl w-1/3 bg-[#5865F2] flex md:hidden'>
                        <h1></h1>
                    </div>
                    <div className='rounded-2xl w-1/3 bg-[#08084A] flex md:hidden'>
                        <h1></h1>
                    </div>

                    <div className='myCard w-1/4 bg-[#E5E5E5] rounded-2xl md:flex hidden'>
                        <h1></h1>
                    </div>
                    <div className='myCard w-1/4 bg-white rounded-2xl md:flex hidden'>
                        <h1></h1>
                    </div>


                </div>
                <div className='h-28 flex flex-row md:hidden'>
                    <div className='myCard w-1/2 bg-[#E5E5E5] rounded-2xl md:hidden flex'>
                        <h1></h1>
                    </div>
                    <div className='myCard w-1/2 bg-white rounded-2xl md:hidden flex'>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inicio