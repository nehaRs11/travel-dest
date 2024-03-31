'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ cards }: any) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handleNext = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cards.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="card card-carousel">
            <motion.div
                key={currentCardIndex}
                className="card"
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.5 }}
            >
                <Image src={cards[currentCardIndex].imageUrl} width={120} height={89} alt={cards[currentCardIndex].title} />
                <h2 className="text-3xl font-bold">{cards[currentCardIndex].title}</h2>
                <p className="text-gray-600 ">{cards[currentCardIndex].desc}</p>
            </motion.div>
            <div className="controls">
                <button onClick={handlePrev}> <Image src={'/back.png'} alt={'back image'} width={20} height={20} /></button>
                <button onClick={handleNext}><Image src={'/next.png'} alt={'next image'} width={20} height={20} /></button>
            </div>
        </div>
    );
};

export default Carousel;
