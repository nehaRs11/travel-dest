"use client";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import CardGrid from "./CardGrid";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }
const TravelPoint = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
        style={{ width: '60%', marginRight: '50px' }} // Increase width and adjust margin
      >
        <Image
          className="animatedImage"
          src={'/f1.png'}
          alt={'Pic 2'}
          width={600}
          height={300}
          style={{ marginTop: '200px' }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }}
        style={{ marginTop: '90px' }}
      >
        <p className="text-pink-500 text-2xl" style={{ fontFamily: 'serif', marginBottom: '20px', marginTop: '50px' }}>
          TRAVEL POINT
        </p>
        <p className="text-black text-2xl font-semibold mb-10">
          We help you find your dream location
        </p>
        <CardGrid />
      </motion.div>
    </div>

  )
}

export default TravelPoint