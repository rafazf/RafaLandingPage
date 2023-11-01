import {Button} from "@nextui-org/react";
import Header from "@/app/Header/Header";
import Inicio from "@/app/Home/Inicio";
import Skills from "@/app/Skills/Skills";
import Portafolio from "@/app/Portafolio/Portafolio";
import MyFooter from "@/app/Footer/MyFooter";
export default function Home() {
  return (
    <>
        <Header/>
        <Inicio/>
        <Skills/>
        <Portafolio/>
        <MyFooter/>
    </>
  )
}
