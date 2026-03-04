import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square, ChevronLeft, ChevronRight, Check, Share2, Heart } from 'lucide-react';
import './PropertyDetails.css';

// Using mock data, in real app this would be fetched via API
const MOCK_PROPERTY = {
    id: 1,
    title: "The Vertex Penthouse",
    location: "Billionaire's Row, NY 10019",
    price: "$28,500,000",
    beds: 5,
    baths: 6.5,
    sqft: "8,200",
    type: "Penthouse",
    description: "Experience unparalleled luxury at The Vertex Penthouse. This exceptional residence offers panoramic views of Central Park and the Manhattan skyline. Featuring soaring 14-foot ceilings, custom floor-to-ceiling windows, and meticulous designer finishes throughout. \n\nThe grand salon is perfect for entertaining, seamlessly flowing into a formal dining room and a state-of-the-art chef's kitchen equipped with top-tier Gaggenau appliances. The primary suite is a true sanctuary with dual spa-like bathrooms and extensive custom dressing rooms. A private wraparound terrace provides the ultimate outdoor living experience in the sky.",
    images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1600",
        "https://images.unsplash.com/photo-1622866306950-81d17097d458?auto=format&fit=crop&q=80&w=1600",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd64bd15?auto=format&fit=crop&q=80&w=1600"
    ],
    amenities: [
        "Smart Home Integration",
        "Private Elevator Landing",
        "Wine Cellar (1,000 bottles)",
        "Wraparound Terrace",
        "24/7 White-Glove Concierge",
        "State-of-the-Art Fitness Center",
        "Indoor Infinity Pool",
        "Private Screening Room",
        "Automated Valet Parking",
        "Radiant Heated Floors"
    ]
};

const PropertyDetails = () => {
    const { id } = useParams();
    const [currentImg, setCurrentImg] = useState(0);
    // Ideally fetch property based on `id`
    const property = MOCK_PROPERTY;

    const nextImg = () => {
        setCurrentImg(prev => (prev === property.images.length - 1 ? 0 : prev + 1));
    };

    const prevImg = () => {
        setCurrentImg(prev => (prev === 0 ? property.images.length - 1 : prev - 1));
    };

    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            nextImg();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="property-details-page">
            {/* Gallery Slider */}
            <div className="gallery-slider">
                <div className="gallery-images">
                    {property.images.map((img, index) => (
                        <div
                            key={index}
                            className={`gallery-slide ${index === currentImg ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </div>

                <div className="gallery-controls">
                    <button className="gallery-btn prev" onClick={prevImg}><ChevronLeft size={30} /></button>
                    <button className="gallery-btn next" onClick={nextImg}><ChevronRight size={30} /></button>
                </div>

                <div className="gallery-indicators">
                    {property.images.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentImg ? 'active' : ''}`}
                            onClick={() => setCurrentImg(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="container details-container">
                <div className="details-layout">
                    {/* Main Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="main-info"
                    >
                        <div className="info-header">
                            <div className="title-section">
                                <div className="property-tags">
                                    <span className="tag-gold">For Sale</span>
                                    <span className="tag-outline">{property.type}</span>
                                </div>
                                <h1>{property.title}</h1>
                                <div className="location-flex">
                                    <MapPin size={20} className="gold-text" />
                                    <span>{property.location}</span>
                                </div>
                            </div>
                            <div className="price-section">
                                <div className="price">{property.price}</div>
                                <div className="action-btns">
                                    <button className="icon-btn"><Share2 size={20} /></button>
                                    <button className="icon-btn"><Heart size={20} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="metrics-bar glass">
                            <div className="metric-item">
                                <BedDouble size={26} className="gold-text" />
                                <div className="metric-text">
                                    <span className="val">{property.beds}</span>
                                    <span className="lbl">Bedrooms</span>
                                </div>
                            </div>
                            <div className="metric-item">
                                <Bath size={26} className="gold-text" />
                                <div className="metric-text">
                                    <span className="val">{property.baths}</span>
                                    <span className="lbl">Bathrooms</span>
                                </div>
                            </div>
                            <div className="metric-item">
                                <Square size={26} className="gold-text" />
                                <div className="metric-text">
                                    <span className="val">{property.sqft}</span>
                                    <span className="lbl">Square Feet</span>
                                </div>
                            </div>
                        </div>

                        <div className="section-block">
                            <h3>Property Overview</h3>
                            <div className="description">
                                {property.description.split('\n\n').map((para, idx) => (
                                    <p key={idx}>{para}</p>
                                ))}
                            </div>
                        </div>

                        <div className="section-block">
                            <h3>Features & Amenities</h3>
                            <div className="amenities-grid">
                                {property.amenities.map((amenity, idx) => (
                                    <div key={idx} className="amenity-item">
                                        <div className="check-box"><Check size={16} /></div>
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="section-block">
                            <h3>Location</h3>
                            <div className="map-container glass">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3021.9069777977735!2d-73.98064612344795!3d40.76406973443141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f700021c33%3A0xc0c4ffcf5910ebf1!2sBillionaires&#39;%20Row%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Property Location"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar / Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="sidebar"
                    >
                        <div className="inquiry-card glass sticky">
                            <h3>Inquire About This Property</h3>
                            <p>Contact our concierge team for a private viewing or further details.</p>

                            <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" placeholder="Full Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone Number" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Your Message" rows="4" defaultValue="I am interested in learning more about this property."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary full-width">Request Information</button>
                            </form>

                            <div className="agent-contact">
                                <div className="agent-avatar"></div>
                                <div className="agent-details">
                                    <h4>James Harrington</h4>
                                    <p>Senior Global Advisor</p>
                                    <a href="tel:+18001234567" className="gold-text">+1 (800) 123-4567</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
