// SocialMediaMarketingSection.js
import { motion } from 'framer-motion';

const SocialMedia = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-10 items-center md:justify-between p-8 bg-white"
        >
            {/* Left Side - Title and Description */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-[48px] font-bold mb-4">Social Media Marketing</h2>
                <p className="text-lg">
                    Our Social Media Marketing services focus on creating engaging content and strategic
                    campaigns across various social platforms. We help you build and grow your online
                    presence, connect with your audience, and achieve your marketing goals.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2">
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/social-media-marketing-image.jpg"
                    alt="Social Media Marketing"
                    className="w-full h-auto rounded-md shadow-md"
                />
            </div>
        </motion.section>
    );
};

export default SocialMedia;
