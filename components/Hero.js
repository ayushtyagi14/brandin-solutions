// Hero.js
import { dmSans } from '@/app/layout';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-screen flex items-center justify-center heroComponent"
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-white text-center z-10">
                <h1 className={`${dmSans.className} text-4xl md:text-6xl font-extrabold mb-4`}>Welcome to Brandin Solutions</h1>
                <p className="text-lg md:text-xl">
                    We provide cutting-edge solutions for your branding needs.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#060640] text-white font-bold px-6 py-3 mt-4 rounded-full"
                >
                    Book Now
                </motion.button>
            </div>
        </motion.section>
    );
};

export default Hero;
