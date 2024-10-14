'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Logo() {
    const { resolvedTheme } = useTheme();
    const [logoSrc, setLogoSrc] = useState('');

    useEffect(() => {
        setLogoSrc(resolvedTheme === "dark" ? '/gt-logo-dark.svg' : '/gt-logo-light.svg');
    }, [resolvedTheme]);
    
    if (!logoSrc) return;

    return (
        <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
            <Image src={logoSrc} width={40} height={40} alt='GT, Inc.'/>
            <span className="sr-only">General Translation, Inc.</span>
        </Link>
    )
}