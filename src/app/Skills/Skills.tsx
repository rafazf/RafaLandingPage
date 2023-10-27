import React from "react";
import {Image} from "@nextui-org/react";
const Skills = () =>{
    const styleText = 'text-7xl font-bold text-[#08084A] py-10'
    const cardFirst = 'bg-white text-center flex flex-row justify-evenly gap-2 p-3 rounded-2xl'
    const cardFirstCustom = 'bg-white text-center flex md:hidden flex-row justify-evenly gap-2 p-3 rounded-2xl'

    const individualSkill='h-5/6 flex items-center'

    const cardIndividual = 'w-1/3 flex flex-col items-center justify-end'
    const individualCardCustom='w-1/3 flex items-center justify-center flex-col'
    return(
        <>
            <div id='skills' className='bg-[#F6F6F6] w-5/6 m-auto flex flex-col items-center '>

                <span className={styleText}>SKILLS</span>

                <div className='flex flex-row md:w-3/6 w-full justify-center gap-3 mb-10'>
                    <div className='flex flex-col md:w-4/5 w-full md:p-0 p-2 justify-between gap-3'>
                        <div className={cardFirst}>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/html.png' alt='html'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>HTML</h1>
                            </div>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/css.png' alt='css'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>CSS</h1>
                            </div>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/javascript.png' alt='javascript'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>JavaScript</h1>
                            </div>
                        </div>
                        <div className={cardFirst}>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/nextui.png' alt='nextui'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>NextUI</h1>
                            </div>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/tailwindcss.png' alt='tailwin'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>Tailwind</h1>
                            </div>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/bootstrap.png' alt='nextui'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>Bootstrap</h1>
                            </div>
                        </div>
                        <div className={cardFirst}>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/angular.png' alt='angular'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>Angular</h1>
                            </div>
                            <div className={cardIndividual}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/react.png' alt='react'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>React</h1>
                            </div>
                            <div className={cardIndividual}>
                                <div className='w-3/4 h-3/5'>
                                    <Image src='./img/img-skills/next.png' alt='nextjs'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>NextJs</h1>
                            </div>
                        </div>
                        <div className={cardFirstCustom}>
                            <div className={individualCardCustom}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/photoshop.png' alt='photoshop'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>Photoshop</h1>
                            </div>
                            <div className={individualCardCustom}>
                                <div className='w-3/5'>
                                    <Image src='./img/img-skills/figma.png' alt='figma'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>Figma</h1>
                            </div>
                            <div className={individualCardCustom}>
                                <div className='w-3/5 p-3 flex justify-center rounded-2xl'
                                     style={{backgroundColor:'#4170F0',color:'white'}}>
                                    <Image src='./img/img-skills/Vector.png' alt='arrowup' width='40px'/>
                                </div>
                                <h1 className='text-[#08084A] font-bold'>Proyectos</h1>
                            </div>
                        </div>
                    </div>

                    <div className='gap-3 md:flex flex-col w-1/5 justify-between hidden'>
                        <div className='bg-white text-center flex flex-col p-3 rounded-2xl h-1/3'>
                            <div className={individualSkill}>
                                <Image src='./img/img-skills/photoshop.png' alt='photoshop'/>
                            </div>
                            <h1 className='text-[#08084A] font-bold'>Photoshop</h1>
                        </div>
                        <div className='bg-white text-center flex flex-col p-3 rounded-2xl'>
                            <div className={individualSkill}>
                                <Image src='./img/img-skills/figma.png' alt='figma'/>
                            </div>
                            <h1 className='text-[#08084A] font-bold'>Figma</h1>
                        </div>
                        <div className='bg-white items-center flex flex-col p-3 rounded-2xl' style={{backgroundColor:'#4170F0',color:'white'}}>
                                <div className='w-3/4'>
                                    <Image src='./img/img-skills/Vector.png' alt='arrowup'/>
                                </div>
                                <h1 className='text-white font-bold'>Poyectos</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills