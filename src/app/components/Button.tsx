import React from 'react'
import Image from 'next/image';

type ButtonProps = {
    title: string,
    variant?: string,
}

const Button = ({ title, variant }: ButtonProps) => {
    return (
        <button className={`rounded-full flexCenter gap-3 border cursor-pointer mx-5 ${variant}`} type='submit' >
            <label className="bold-16 whitespace-nowrap cursor-pointer font-sans font-semibold px-8 py-5">{title}</label>
        </button>
    )
}

export default Button