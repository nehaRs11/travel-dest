"use client";
import React, { useEffect } from 'react'
import { Button, Input } from "@nextui-org/react";
import { MailIcon } from './MailIcon';
import { motion, useAnimation } from 'framer-motion';

const Subscribe = () => {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 900;

            if (scrollY > threshold) {
                controls.start({ x: 0, transition: { delay: 0 } });
            } else {
                controls.start({ x: '-100vw', transition: { delay: 5 } });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="rounded-2xl subscribe-box p-8 text-center">
                <h1 className="text-3xl text-pink-500 font-serif mb-8">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className="text-4xl font-sans" >Prepare yourself & lets explore beauty of the world</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
                    <div style={{ flex: 4 }}>
                        <Input type="email" variant='bordered' placeholder="Your email" startContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        } />
                    </div>
                    <Button color="secondary" size='md' >Submit</Button>
                </div>
            </div>
        </div>

    )
}

export default Subscribe