import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import './About.css';

const AnimatedCounter = ({ end, duration, label, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [inView, end, duration]);

    return (
        <div className="stat-item glass" ref={ref}>
            <h3 className="stat-number gold-text">{count}{suffix}</h3>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const team = [
        {
            name: "Eleanor Sterling",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "James Harrington",
            role: "Head of International Sales",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
        },
        {
            name: "Victoria Vanguard",
            role: "Luxury Property Director",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="about-page">
            {/* Header Banner */}
            <div className="page-header about-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="page-header-content"
                    >
                        <h1>Defining <span className="gold-text">Luxury</span></h1>
                        <p>Our Legacy in Elite Real Estate</p>
                    </motion.div>
                </div>
            </div>

            {/* Story Section */}
            <section className="story-section section-padding">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="story-content"
                        >
                            <h2 className="section-title">A Heritage of <span className="gold-text">Excellence</span></h2>
                            <p className="lead-text">
                                Founded in 1998, Aura Estates emerged from a singular vision: to revolutionize the luxury real estate experience for the world's most discerning clientele.
                            </p>
                            <p>
                                Our firm has spent over two decades cultivating an unparalleled network of international buyers, sellers, and off-market opportunities. We understand that acquiring a signature property is not merely a transaction; it is the acquisition of a lifestyle, a sanctuary, and a legacy.
                            </p>
                            <p>
                                From magnificent chateaus in the French Riviera to soaring penthouses in Manhattan, our curated portfolio represents the pinnacle of architectural excellence and prestigious living.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="story-image"
                        >
                            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200" alt="Luxury office interior" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section section-padding parallax-bg">
                <div className="cta-overlay"></div>
                <div className="container relative-z">
                    <div className="stats-grid">
                        <AnimatedCounter end={25} duration={2000} label="Years of Excellence" suffix="+" />
                        <AnimatedCounter end={150} duration={2500} label="Properties Sold" suffix="+" />
                        <AnimatedCounter end={40} duration={2000} label="Global Markets" />
                        <AnimatedCounter end={1} duration={2000} label="Billion in Sales" suffix="B+" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-section section-padding">
                <div className="container">
                    <div className="mission-grid">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="mission-card glass"
                        >
                            <h3 className="gold-text">Our Mission</h3>
                            <p>To provide unprecedented access to the world's most exceptional real estate properties while delivering an experience characterized by supreme discretion, absolute integrity, and white-glove service at every touchpoint.</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            transition={{ delay: 0.2 }}
                            className="mission-card glass"
                        >
                            <h3 className="gold-text">Our Vision</h3>
                            <p>To remain the undisputed leader in international luxury real estate, continuously setting new benchmarks for service excellence and curating a portfolio of the globe's most architecturally significant and prestigious homes.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section section-padding">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="section-header center"
                    >
                        <h2 className="section-title">Our Elite <span className="gold-text">Advisors</span></h2>
                        <p className="section-subtitle">The architects of your real estate success</p>
                    </motion.div>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="team-card glass"
                            >
                                <div className="team-image-wrapper">
                                    <img src={member.image} alt={member.name} className="team-image" />
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <p className="gold-text">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
