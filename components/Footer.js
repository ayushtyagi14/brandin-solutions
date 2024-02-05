// FooterContactSection.js
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" p-8 text-center"
        >
            <h2 className="text-[48px] font-semibold mb-6">Let&apos;s Start a conversation!</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
                <div className='flex flex-col items-center gap-4'>
                    <p className="text-lg font-semibold">Phone:</p>
                    <p>+123 456 7890</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <p className="text-lg font-semibold">Email:</p>
                    <p>info@brandinsolutions.com</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    {/* Add your social media icons or links as needed */}
                    <p className="text-lg font-semibold">Book a Consultation:</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#060640] text-white font-bold px-6 py-3 rounded-full"
                    >
                        Book Now
                    </motion.button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <p className="text-lg font-semibold">Follow us on:</p>
                    <div className="flex space-x-4 justify-center">
                        <a href="#" className="text-black">
                            <img src="/instagram-icon.png" alt="Social Icon" width={28} />
                        </a>
                        <a href="#" className="text-black">
                            <img src="/twitter-icon.png" alt="Social Icon" width={28} />
                        </a>
                        <a href="#" className="text-black">
                            <img src="/facebook-icon.png" alt="Social Icon" width={28} />
                        </a>
                        {/* Add more social icons as needed */}
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center pt-4 mt-8 border-t-2 border-[#060640]'>
                <p className="mt-4">&copy;2024 BrandIn Solutions. All rights reserved.</p>
            </div>
        </motion.section>
    );
};

export default Footer;
