// VideoEditingSection.js
import { motion } from 'framer-motion';

const VideoEditing = () => {
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
                    src="/video-editing-image.jpg"
                    alt="Video Editing"
                    className="w-full h-auto rounded-md shadow-md"
                />
            </div>

            {/* Right Side - Title and Description */}
            <div className="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-[48px] font-bold mb-4">Video Editing</h2>
                <p className="text-lg">
                    Our Video Editing services ensure your content stands out. We offer professional video
                    editing solutions to enhance your visual storytelling, creating impactful and memorable
                    videos for your audience.
                </p>
            </div>
        </motion.section>
    );
};

export default VideoEditing;
