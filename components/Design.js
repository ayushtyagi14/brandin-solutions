// UiUxGraphicDesignSection.js
import { motion } from 'framer-motion';

const Design = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-10 items-center md:justify-between p-8 bg-white"
        >
            {/* Left Side - Title and Description */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-[48px] font-bold mb-4">UI/UX & Graphic Designing</h2>
                <p className="text-lg">
                    Our UI/UX + Graphic Designing services focus on creating visually appealing and
                    user-friendly designs. We blend creativity with functionality to deliver designs that
                    enhance the overall user experience.
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2">
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src="/ui-ux-design-image.jpg"
                    alt="UI/UX + Graphic Designing"
                    className="w-full h-auto rounded-md shadow-md"
                />
            </div>
        </motion.section>
    );
};

export default Design;
