// ServicesSection.js
import { motion } from 'framer-motion';

const services = [
    { id: 1, title: 'Web Development', image: '/web-development.jpg' },
    { id: 2, title: 'SEO and SEM', image: '/seo-sem.jpg' },
    { id: 3, title: 'Social Media Marketing', image: '/social-media-marketing.jpg' },
    { id: 4, title: 'Video Editing', image: '/video-editing.avif' },
    { id: 5, title: 'UI/UX + Graphic Designing', image: '/ui-ux-design.jpg' },
    { id: 6, title: 'Email Marketing', image: '/email-marketing.jpg' },
];

const Services = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 text-center"
        >
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            {/* Add more details about the service if needed */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Services;
