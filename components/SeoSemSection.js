// SeoSemSection.js
import { motion } from 'framer-motion';

const SeoSemSection = () => {
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
                    src="/seo-sem-image.jpg"
                    alt="SEO and SEM"
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Right Side - Title and Description */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-[48px] font-bold mb-4">SEO and SEM</h2>
                <p className="text-lg">
                    Our SEO and SEM services are designed to enhance your online visibility and drive targeted
                    traffic to your website. We implement strategies to improve search engine rankings and
                    optimize your online advertising campaigns.
                </p>
            </div>
        </motion.section>
    );
};

export default SeoSemSection;
