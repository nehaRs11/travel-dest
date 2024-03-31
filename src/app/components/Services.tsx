"use client";
import React from 'react'
import Carousel from './Carousel';
import { motion } from 'framer-motion';

const cards = [
    {
        title: 'Best tour guide', desc: 'Our experienced guides are more than just navigators; they are storytellers, history buffs, and cultural ambassadors who will enhance your travel experience with their knowledge and enthusiasm.Get ready to embark on a journey filled with authenticity, knowledge, and unforgettable adventures with our exceptional tour guides.', imageUrl: '/around-the-globe.png'
    },
    { title: 'Easy Booking', desc: 'Booking your dream vacation has never been easier! Our user-friendly website ensures a seamless booking experience from start to finish. With just a few clicks, you can browse through a wide range of destinations, select your preferred travel dates, and customize your itinerary to suit your preferences.Let us handle the details while you focus on creating unforgettable memories.', imageUrl: '/booking.png' },
    { title: 'Exciting offers', desc: 'Experience the adventure of a lifetime with our exclusive offers! From exotic beach getaways to thrilling mountain expeditions, we curate unforgettable journeys that ignite your wanderlust. With exclusive deals and discounts, now is the perfect time to turn your travel dreams into reality. Do not miss out on limited-time offers for unparalleled adventures and lifetime memories!', imageUrl: '/offers.png' },

];
const Services = () => {
    return (
        <div>
            <p className="text-pink-500 text-2xl" style={{ fontFamily: 'serif', marginLeft: 'calc(40vh)', marginTop: '80px' }}>SERVICES</p>
            <div style={{ display: 'flex' }}>
                <p className="text-black text-2xl font-semibold w-60 justify-center" style={{ marginLeft: 'calc(40vh)', marginTop: '20px' }}> Our top value categories for you</p>
                <motion.div initial={{ opacity: 0 }} whileInView={{
                    opacity: 1, width: 800, height: 300, marginLeft: 60
                }} transition={{ type: 'spring', stiffness: 500, duration: 0.5, delay: 0, ease: "easeInOut" }}>
                    <Carousel cards={cards} />
                </motion.div>
            </div>
        </div>
    )
}

export default Services