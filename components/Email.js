// EmailMarketingSection.js
import { motion } from 'framer-motion';

const Email = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-10 items-center md:justify-between p-8"
        >
            {/* Left Side - Image */}
            <div className="md:w-1/2">
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/email-marketing-image.jpg"
                    alt="Email Marketing"
                    className="w-full h-auto rounded-md shadow-md"
                />
            </div>

            {/* Right Side - Title and Description */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-[48px] font-bold mb-4">Email Marketing</h2>
                <p className="text-lg">
                    Our Email Marketing services are designed to help you connect with your audience directly.
                    We create compelling email campaigns, ensuring your messages are impactful and resonate
                    with your subscribers.
                </p>
            </div>
        </motion.section>
    );
};

export default Email;
