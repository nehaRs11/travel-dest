"use client";
import { Link, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{
            opacity: 1
        }} transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}>
            <footer className=" text-black py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="footer-column">
                            <div className="text-lg font-semibold mb-4"><Link className="text-black text-4xl font-sans font-bold flex items-center" href={''}>
                                <Image src={'/final-logo.png'} alt={'logo'} width={44} height={20} />
                                <span>Travlog</span>
                            </Link></div>
                            <ul className="space-y-2">
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                                <li>
                                    <div>

                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>Career</li>
                                <li>Mobile</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li>Why Travlog?</li>
                                <li>Partner with us</li>
                                <li>FAQs</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="text-lg font-semibold mb-4">Meet Us</h3>
                            <ul className="space-y-2">
                                <li>+040 1235 4544</li>
                                <li>info@travlog.com</li>
                                <li>Abc street, CA.</li>
                                <li>123654</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
};

export default Footer;
