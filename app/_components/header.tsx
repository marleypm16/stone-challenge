import React from 'react';
import Image from "next/image";
const Header = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const utcHour = new Date().getUTCHours();
    return (
        <header className="flex items-center gap-5">
            <Image src="./Main Logo.svg" alt="" width={100} height={100} />
            <div>
                <div>
                    <p className="font-roboto font-medium text-header text-lg">{day}/{month}/{year} | {utcHour}:00 UTC</p>
                </div>
                <p>Dados de câmbio disponibilizados pela Morningstar.</p>
            </div>
        </header>
    );
};

export default Header;