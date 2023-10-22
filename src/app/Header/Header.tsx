'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const Header = ()=>{
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Header",
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
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <p className="font-bold text-inherit">RAFA</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4 w-full " justify="center">
                    <NavbarContent className='items-center justify-center'>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Inicio
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page">
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
                                href="#"
                                size="lg"
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