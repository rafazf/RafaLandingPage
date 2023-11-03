import React from "react";
import {Image, Link} from "@nextui-org/react";
const Inicio = ()=>{
    const styleOne = 'rounded-2xl w-1/6 hidden md:flex flex-col justify-center items-center relative'
    const styleTwo='rounded-2xl md:w-1/6 w-1/3 justify-center flex flex-col  items-center relative'

    const styleOneAlt = 'rounded-2xl w-1/3 flex md:hidden justify-center items-center relative'
    const styleCardProject='w-1/4 rounded-2xl md:flex hidden justify-center items-center'
    return(
        <>
            <div id='inicio' className='bg-[#F6F6F6] p-2 rounded-t-2xl w-5/6     m-auto flex flex-col gap-3'>
                <div className='text-white flex flex-row justify-start gap-3 md:h-36 h-28'>
                    <div className='bg-[#08084A] rounded-2xl p-3 md:w-4/6 w-full'>
                        <h1 className='text-sm md:text-3xl font-bold'>👋 Hola, mi nombre es Rafael Zapata</h1>
                        <p className='text-[12px] md:text-lg mt-1'>Soy desarrollador <span className='font-bold'>frontend</span> con experiencia en
                            <span className='font-bold'> Angular</span>. Manejo
                            <span className='font-bold'> HTML</span>,
                            <span className='font-bold'> CSS</span> y
                            <span className='font-bold'> JavaScript</span>.
                            Me apaciona aprender nuevas cosas y experimentar con nuevas tecnologías.</p>
                    </div>
                    <div className={styleOne} style={{backgroundColor:'#5865F2'}}>
                        <Image src="./img/logos_discord.png" radius='none' alt="discord" width='150px'/>
                    </div>
                    <div className={styleOne} style={{backgroundColor:'#08084A'}}>
                        <div className='top-2 right-2 absolute'>
                            <Link href='mailto:raelzapataf@gmail.com' target='_blank'>
                                <Image src="./img/open.png" alt="open" className='w-1/4 md:w-[25px] '/>
                            </Link>
                        </div>

                        <Image src="./img/email.png" alt="email" style={{width:'80px'}}/>

                    </div>
                </div>
                <div className='text-white flex flex-row justify-start md:h-36 h-28 gap-2'>
                    <div className={styleTwo} style={{backgroundColor:'#5865F2'}}>
                        <span>EDAD</span>
                        <h1 className='font-extrabold text-5xl'>24</h1>
                        <span>AÑOS</span>
                    </div>
                    <div className={styleTwo} style={{backgroundColor:'#C1D5FC'}}>
                        <div className='top-2 right-2 absolute'>
                            <Link href='https://www.linkedin.com/in/gerardozapataflores/' target='_blank'>
                                <Image src="./img/open.png" alt="open" className='md:w-[25px] w-[20px]'/>
                            </Link>
                        </div>
                        <Link href='https://www.linkedin.com/in/gerardozapataflores/' target='_blank'>
                        <Image  src="./img/linkedin.png" alt="linkedin" width='100px'/>
                        </Link>
                    </div>
                    <div className={styleTwo} style={{backgroundColor:'#192052', padding:'3px'}}>
                        <Image src="./img/skills1.png" alt="skills" width='120px'/>
                    </div>
                    <div className='bg-gray-400 w-1/2 rounded-2xl md:flex hidden p-3 justify-between items-center flex-row'
                         style={{backgroundImage: 'url(./img/unp-entrada.png)', backgroundSize:'cover'}} >
                        <div className='flex flex-col'>
                            <h1 className='font-bold'>UNIVERSIDAD NACIONAL DE PIURA</h1>
                            <h2>INGENIERÍA INFORMÁTICA</h2>
                        </div>
                        <Link href="https://www.unp.edu.pe/" target='_blank'>
                            <Image src="./img/unp.png" alt="unp" width='120px'/>
                        </Link>
                    </div>
                </div>
                <div className='bg-gray-400 w-full rounded-2xl md:hidden flex p-2 justify-between items-center flex-row text-white h-28'
                     style={{backgroundImage: 'url(./img/unp-entrada.png)', backgroundSize:'cover'}} >
                    <div className='flex flex-col'>
                        <h1 className='font-bold' style={{fontSize:'12px'}}>UNIVERSIDAD NACIONAL DE PIURA</h1>
                        <h2 style={{fontSize:'12px'}}>INGENIERÍA INFORMÁTICA</h2>
                    </div>
                    <Link href="https://www.unp.edu.pe/" target='_blank'>
                        <Image src="./img/unp.png" alt="unp" width='70px'/>
                    </Link>
                </div>

                <div className='flex flex-row gap-3 md:h-36 h-28'>
                    <div className='bg-[#38383C] md:w-1/2 w-1/3 rounded-2xl flex md:flex-row flex-col-reverse justify-between md:p-2 p-3 relative'>
                        <div className='flex flex-col justify-between items-start'>
                            <Image radius='none' className='hidden md:flex' src="./img/github-md.png" alt="git" width='50px'/>
                            <Image radius='none' className='w-[40px] md:w-[70px]' src="./img/rafazf.png" alt="rafazf" />
                        </div>
                        <div className='md:w-3/5 w-full flex md:justify-start md:mt-0 mt-3 items-center'>
                            <Image src="./img/github1.png" alt="github" className='w-[80px] md:w-[150px]'/>
                        </div>
                        <div className='flex flex-row justify-end items-end top-2 right-2 absolute'>
                            <Link href='https://github.com/rafazf' target='_blank'>
                                <Image src="./img/open.png" alt="open" className='md:w-[25px] w-[20px]'/>
                            </Link>
                        </div>
                    </div>

                    <div className={styleOneAlt} style={{backgroundColor:'#5865F2'}}>
                        <Image radius='none' src="./img/logos_discord.png" alt="discord" width='80px'/>
                    </div>

                    <div className={styleOneAlt} style={{backgroundColor:'#08084A'}}>
                        <div className='top-2 right-2 absolute'>
                            <Link href='mailto:raelzapataf@gmail.com' target='_blank'>
                                <img src="./img/open.png" alt="open" className='w-[20px] '/>
                            </Link>
                        </div>
                        <Image radius='none' src="./img/email.png" alt="email" className='w-[50px]'/>
                    </div>

                    <div className={styleCardProject} style={{backgroundColor:'#E5E5E5'}}>
                        <Image radius='none' src="./img/aloqe.png" alt="altoq" width='150px'/>
                    </div>
                    <div className={styleCardProject} style={{backgroundColor:'#ffffff'}}>
                        <Image radius='none' src="./img/sisprelogo.png" alt="logo" width='150px'/>
                    </div>

                </div>
                <div className='h-28 flex flex-row md:hidden'>
                    <div className='w-1/2 bg-[#E5E5E5] rounded-2xl md:hidden flex justify-center items-center'>
                        <Image src="./img/aloqe.png" radius='none' alt="altoq" width='100px'/>
                    </div>
                    <div className='w-1/2 bg-white rounded-2xl md:hidden flex justify-center items-center'>
                        <Image src="./img/sisprelogo.png" radius='none' alt="logo" width='100px'/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Inicio