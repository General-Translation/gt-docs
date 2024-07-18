import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link className="flex items-center gap-2 text-lg font-semibold" href="https://www.generaltranslation.com">
            <Image src={'/light-logo.png'} width={45} height={45} alt='GT, Inc.'/>
        </Link>
    )
}