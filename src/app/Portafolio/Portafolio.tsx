import React from "react";
import MyCard from "@/app/Portafolio/MyCard";
const Portafolio = () =>{
    const styleText = 'md:text-7xl text-4xl font-bold text-[#08084A]'
    return(
        <>
            <div id='portafolio' className='bg-[#F6F6F6] md:w-5/6 w-full m-auto flex flex-col items-center'>
                <span className={styleText}>PORTAFOLIO</span>
                <div className='w-3/4 py-10 text-center'>
                    <p>
                        Mi portafolio refleja la integración de diversas tecnologías y herramientas para crear interfaces atractivas y funcionales que se adaptan perfectamente a cualquier dispositivo o pantalla, brindando experiencias de usuario excepcionales.
                    </p>
                </div>
                <div className='flex flex-col gap-3 w-3/4 md:flex-row justify-between mb-10'>
                    <MyCard imgUrl={'/img/Portafolio/altoqueLanding0.png'} title={'Gestión de Ventas'} linkPage={'https://altoqe.com/'}/>
                    <MyCard imgUrl={'/img/Portafolio/elemental.png'} title={'Gestión Empresarial'} linkPage={'https://elemental.lat/'}/>
                    <MyCard imgUrl={'/img/Portafolio/sispre.png'} title={'Gestión de Préstamos'} linkPage={'https://software.sispre.lat'}/>
                </div>
            </div>

        </>
    )
}
export default Portafolio