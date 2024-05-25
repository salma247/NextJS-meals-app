'use client'
import Link from "next/link";
import logoImg from "@/public/images/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-bg";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="NextLevel Logo" priority  />
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><NavLink href="/meals">Meals</NavLink></li>
                        <li><NavLink href="/community">Community</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}