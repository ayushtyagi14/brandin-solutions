// ClientsSection.js
import { motion } from 'framer-motion';

const clientLogos = [
    '/client1.png',
    '/client2.png',
    '/client3.png',
    '/client4.png',
    '/client5.png',
    '/client6.png',
    '/client7.png',
    '/client8.png',
    '/client9.png',
    '/client10.png',
    '/client11.png',
];

const ClientsSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 text-center"
        >
            <h2 className="text-[48px] font-bold mb-6">Our Clients</h2>
            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto"
                whileHover={{ scale: 1.02 }}
            >
                {clientLogos.map((logo, index) => (
                    <motion.img
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        src={logo}
                        alt={`Client ${index + 1}`}
                        className="w-[9rem]"
                    />
                ))}
            </motion.div>
        </motion.section>
    );
};

export default ClientsSection;
