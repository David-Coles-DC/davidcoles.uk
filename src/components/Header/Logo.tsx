"use client";

import Image from "next/image";

export default function Logo() {
    return <div className={'david-container'}>
        <Image alt={'David Coles'} height={50} src={'/images/david-coles.jpg'} priority={true} width={50}></Image>
    </div>
}