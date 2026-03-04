import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Award, Globe, Home as HomeIcon, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const featuredProperties = [
        {
            id: 1,
            title: "The Vertex Penthouse",
            location: "Billionaire's Row, NY",
            price: "$28,500,000",
            beds: 5,
            baths: 6.5,
            sqft: "8,200",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 2,
            title: "Oceanside Villa",
            location: "Malibu, CA",
            price: "$45,000,000",
            beds: 8,
            baths: 10,
            sqft: "12,500",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
        },
        {
            id: 3,
            title: "Royal Alpine Estate",
            location: "Aspen, CO",
            price: "$18,900,000",
            beds: 6,
            baths: 7,
            sqft: "10,000",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hero-title"
                    >
                        Discover Exceptional <br /><span className="gold-text">Luxury Living</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hero-subtitle"
                    >
                        Exclusive Properties for Elite Investors
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="hero-btns"
                    >
                        <Link to="/properties" className="btn btn-primary">View Properties</Link>
                        <Link to="/contact" className="btn btn-outline glass-btn">Schedule a Private Tour</Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="featured-section section-padding">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="section-header"
                    >
                        <h2 className="section-title">Exclusive <span className="gold-text">Residences</span></h2>
                        <p className="section-subtitle">Curated collection of the worlds finest homes</p>
                    </motion.div>

                    <motion.div
                        className="property-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {featuredProperties.map(property => (
                            <motion.div key={property.id} variants={fadeIn} className="property-card glass">
                                <div className="property-image-wrapper">
                                    <img src={property.image} alt={property.title} className="property-image" />
                                    <div className="property-price">{property.price}</div>
                                </div>
                                <div className="property-content">
                                    <h3 className="property-title">{property.title}</h3>
                                    <p className="property-location">{property.location}</p>
                                    <div className="property-features">
                                        <span>{property.beds} Beds</span>•
                                        <span>{property.baths} Baths</span>•
                                        <span>{property.sqft} SqFt</span>
                                    </div>
                                    <Link to={`/properties/${property.id}`} className="view-btn">
                                        View Details <span>→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us-section section-padding">
                <div className="container">
                    <div className="why-us-grid">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="why-us-text"
                        >
                            <h2 className="section-title">The Standard of <span className="gold-text">Excellence</span></h2>
                            <p className="why-us-desc">
                                With over two decades of experience in the luxury real estate market, Aura Estates delivers unparalleled service, discretion, and access to the world's most coveted properties.
                            </p>

                            <div className="features-list">
                                <div className="feature-item">
                                    <div className="feature-icon"><Shield size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Uncompromising Trust</h4>
                                        <p>Total discretion and security for our high-profile clients.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><Award size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Premium Listings</h4>
                                        <p>Access to off-market and exclusive luxury properties.</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon"><Globe size={24} /></div>
                                    <div className="feature-text">
                                        <h4>Global Reach</h4>
                                        <p>International network of elite buyers and sellers.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="why-us-image"
                        >
                            <img src="https://images.unsplash.com/photo-1622866306950-81d17097d458?auto=format&fit=crop&q=80&w=800" alt="Luxury interior" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section-padding">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="section-header center"
                    >
                        <h2 className="section-title">Client <span className="gold-text">Legacy</span></h2>
                    </motion.div>

                    <motion.div
                        className="testimonials-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {[1, 2, 3].map((item) => (
                            <motion.div key={item} variants={fadeIn} className="testimonial-card glass">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--gold-primary)" color="var(--gold-primary)" />)}
                                </div>
                                <p className="testimonial-quote">
                                    "Aura Estates provided an immaculate experience. Their access to off-market properties allowed me to find the perfect penthouse that exactly matched my vision."
                                </p>
                                <div className="client-info">
                                    <div className="client-avatar"></div>
                                    <div>
                                        <h5 className="client-name">Alexander Worthington</h5>
                                        <p className="client-role">International Investor</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-overlay"></div>
                <div className="container cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="cta-title"
                    >
                        Ready to secure your <span className="gold-text">Legacy</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="cta-desc"
                    >
                        Speak with one of our elite property advisors today.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/contact" className="btn btn-primary cta-btn">Begin Your Journey</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
