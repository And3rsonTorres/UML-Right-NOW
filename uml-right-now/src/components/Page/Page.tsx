// Next
import { ReactNode, useContext } from "react";

// Components
import Nav from "../Nav/Nav";
import HamburgerMenu from "../Nav/HamburgerMenu";

// Contexts
import { HamburgerMenuContext, HamburgerMenuContextType } from "@/contexts/HamburgerMenuContext";

// Library
import PageInfo from "@/PageInfo";

// Types
type PageProps = {
    children: ReactNode
};

// Pages
const pages = [
    new PageInfo("Home", "/"),
    new PageInfo("Pathways", "/pathways"),
    new PageInfo("Help", "help"),
    new PageInfo("Sign Up", "sign-up"),
    new PageInfo("Login", "login")
];

export default function Page({ children }: PageProps) {
    // Contexts
    const { hamburgerMenuIsVisible } = useContext(HamburgerMenuContext) as HamburgerMenuContextType;

    return (
        <>
            {/* Nav Bar */}
            <Nav pages={pages} />

            {/* Hamburger Menu */}
            {hamburgerMenuIsVisible && <HamburgerMenu pages={pages} />}

            {/* Hamburger Menu */}
            {children}
        </>
    );
}