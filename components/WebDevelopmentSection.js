// WebDevelopmentSection.js
import { motion } from 'framer-motion';

const WebDevelopmentSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:gap-10 items-center md:justify-between p-8 bg-white"
        >
            {/* Left Side - Title and Description */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-[48px] font-bold mb-4">Web Development</h2>
                <p className="text-lg">
                    We specialize in creating responsive and user-friendly websites tailored to meet your
                    business needs. Our team of experienced developers ensures the highest quality and
                    performance for your online presence.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2">
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/web-development-image.jpg"
                    alt="Web Development"
                    className="w-full rounded-lg shadow-md"
                />
            </div>
        </motion.section>
    );
};

export default WebDevelopmentSection;
