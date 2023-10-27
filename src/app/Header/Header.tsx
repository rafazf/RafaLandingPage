'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Image
} from "@nextui-org/react";

const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Acerca de",
        "Skills",
        "Proyectos",
        "Contacto",
    ];
    return(
        <>
            <Navbar
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden w-1/3" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3 w-2/3 p-1" justify="center">
                    <NavbarBrand className='flex justify-start ml-3'>
                        <Image src='./img/rafa.png' alt='rafa' radius='none' width='80px'/>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4 w-full " justify="center">
                    <NavbarContent className='items-center justify-center'>
                        <NavbarItem>
                            <Link color="foreground" href="inicio">
                                Inicio
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href="#skills" aria-current="page">
                                Skills
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Proyectos
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Contacto
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarItem>

                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href={item === 'Acerca de' ? '#inicio': item === 'Skills'?'#skills':'#'}
                                size="lg"
                                onClick={()=>{setIsMenuOpen(false)}}
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}
export default Header