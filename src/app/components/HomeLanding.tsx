"use client";
import Image from 'next/image';
import Button from './Button';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HomeLanding = () => {
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 600);
    };
    return (
        <div>
            <div className="main-page-headline">
                <Button title="Explore the world!" variant="explore" />
                <div className="gap-40" style={{ display: 'flex' }} >
                    <p className="z-2 font-sans text-6xl text-black font-bold gap-12">Travel <span className="text-pink-400"> top destination</span> of the world</p>
                    <motion.img
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{
                            duration: 0.5, delay: 0, ease: "easeInOut"
                        }}
                        animate={{
                            height: imageLoading ? "auto" : "16rem",
                        }}

                        onLoad={imageLoaded}
                        width="100%"
                        src="/pic.png"
                    />
                </div>
                <p className="text-gray-600">We always make our customer happy by providing as many choices as possible.</p>
                <div style={{ display: 'flex', marginTop: '40px' }}>
                    <Button title="Get Started" variant="sign-up" />
                    <Button title="Watch Demo" variant="watch-demo" />
                </div>
            </div>
        </div >
    )
}

export default HomeLanding