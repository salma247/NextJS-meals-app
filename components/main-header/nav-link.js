'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './main-header.module.css';

export default function NavLink({ href, children }) {
    const pathname = usePathname()
    return (
        <Link href={href} className={pathname === '/meals' ? classes.active : ''}>{children}</Link>
    )
}
