import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="contact-page">
            {/* Header Banner */}
            <div className="page-header contact-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="page-header-content"
                    >
                        <h1>Get in <span className="gold-text">Touch</span></h1>
                        <p>Connect with our elite concierge team</p>
                    </motion.div>
                </div>
            </div>

            <section className="contact-section section-padding">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="contact-info"
                        >
                            <h2 className="section-title">Global <span className="gold-text">Headquarters</span></h2>
                            <p className="contact-desc">
                                Our global advisors are available to assist you with the utmost discretion and expertise. Reach out to schedule a private consultation or property viewing.
                            </p>

                            <div className="info-list">
                                <div className="info-item glass">
                                    <div className="info-icon"><MapPin size={24} /></div>
                                    <div className="info-text">
                                        <h4>Visit Us</h4>
                                        <p>123 Elite Avenue, Suite 500<br />Beverly Hills, CA 90210</p>
                                    </div>
                                </div>

                                <div className="info-item glass">
                                    <div className="info-icon"><Phone size={24} /></div>
                                    <div className="info-text">
                                        <h4>Call Us</h4>
                                        <p>+1 (800) 123-4567<br />+1 (310) 987-6543 (Direct)</p>
                                    </div>
                                </div>

                                <div className="info-item glass">
                                    <div className="info-icon"><Mail size={24} /></div>
                                    <div className="info-text">
                                        <h4>Email Us</h4>
                                        <p>concierge@auraestates.com<br />press@auraestates.com</p>
                                    </div>
                                </div>

                                <div className="info-item glass">
                                    <div className="info-icon"><Clock size={24} /></div>
                                    <div className="info-text">
                                        <h4>Hours of Operation</h4>
                                        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Weekends: By Appointment Only</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="contact-form-container glass"
                        >
                            <h3>Send a Message</h3>
                            <p>Please fill out the form below and an advisor will contact you within 24 hours.</p>

                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group row">
                                    <div className="input-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="John" required />
                                    </div>
                                    <div className="input-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="input-group">
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="+1 (555) 000-0000" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Inquiry Type</label>
                                    <select>
                                        <option>Property Buying</option>
                                        <option>Property Selling</option>
                                        <option>Investment Advisory</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="How can we assist you?"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3305.088613437194!2d-118.40697968434!3d34.06734798059882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
