import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">
                    {/* Brand & About */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="brand footer-brand">
                            <span className="brand-gold">ZENNY</span>
                            <span className="brand-text">Estates</span>
                        </Link>
                        <p className="footer-desc">
                            Discover exceptional luxury living with Zenny Estates. We provide exclusive access to the world's most premium real estate, tailored for elite investors and discerning homeowners.
                        </p>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn"><Facebook size={20} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn"><Twitter size={20} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn"><Instagram size={20} /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/properties">Properties</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Property Valuation</a></li>
                            <li><a href="#">Investment Advisory</a></li>
                            <li><a href="#">Legal Assistance</a></li>
                            <li><a href="#">Architecture & Design</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4 className="footer-title">Contact Us</h4>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <MapPin size={20} className="gold-text" />
                                <span>123 Elite Avenue, Beverly Hills, CA 90210</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={20} className="gold-text" />
                                <span>+1 (800) 123-4567</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={20} className="gold-text" />
                                <span>concierge@zennyestates.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter & Copyright */}
                <div className="footer-bottom">
                    <div className="newsletter">
                        <h4 className="newsletter-title">Subscribe to our Exclusive Newsletter</h4>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your email address" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} Zenny Estates. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
