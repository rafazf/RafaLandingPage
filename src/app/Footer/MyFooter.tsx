import React from "react";
import {Image} from "@nextui-org/react";

const MyFooter = () => {
    return(
        <>
            <div id='portafolio' className='bg-[#08084A]  text-white w-5/6 md:h-40 m-auto flex flex-col justify-center items-center '>
                <div className='flex md:flex-row flex-col p-5 md:text-start text-center w-full justify-evenly'>
                    <div className='flex flex-col gap-2'>
                        <p className='font-bold'>Dirección</p>
                        <p>Chulucanas - Piura - Perú 🇵🇪</p>
                    </div>
                    <div className='flex flex-col gap-2 md:mt-0 mt-2'>
                        <p className='font-bold'>Número de Celular</p>
                        <p>925 - 578 -536</p>

                        <p className='font-bold'>Email</p>
                        <p>raelzapataf@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-2 md:items-start items-center'>
                        <p className='font-bold'>Redes Sociales</p>
                        <div className='flex flex-row w-1/6 md:w-1/2'>
                            <a href="https://instagram.com/rafaelzapataf?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target='_blank'>
                                <Image src='/img/Portafolio/ig.png'/>
                            </a>
                            <a href="https://www.facebook.com/gerardo.zapataflores?mibextid=LQQJ4d" target='_blank'>
                                <Image src='/img/Portafolio/fb.png'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyFooter