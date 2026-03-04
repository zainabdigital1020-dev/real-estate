import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, BedDouble, Bath, Square, SlidersHorizontal } from 'lucide-react';
import './Properties.css';

const MOCK_PROPERTIES = [
    {
        id: 1, title: "The Vertex Penthouse", location: "New York, NY", price: "$28,500,000",
        beds: 5, baths: 6.5, sqft: "8,200", type: "Penthouse", purpose: "Buy",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 2, title: "Oceanside Villa", location: "Malibu, CA", price: "$45,000,000",
        beds: 8, baths: 10, sqft: "12,500", type: "Villa", purpose: "Buy",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 3, title: "Royal Alpine Estate", location: "Aspen, CO", price: "$18,900,000",
        beds: 6, baths: 7, sqft: "10,000", type: "Mansion", purpose: "Buy",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 4, title: "Modern Glass House", location: "Beverly Hills, CA", price: "$32,000,000",
        beds: 7, baths: 9, sqft: "14,000", type: "Mansion", purpose: "Buy",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 5, title: "Dubai Marina Penthouse", location: "Dubai, UAE", price: "$75,000 / mo",
        beds: 4, baths: 5, sqft: "6,500", type: "Penthouse", purpose: "Lease",
        image: "https://images.unsplash.com/photo-1515263487965-0c2265f02f9c?auto=format&fit=crop&q=80&w=1000"
    },
    {
        id: 6, title: "Historic French Chateau", location: "Bordeaux, FR", price: "$50,000 / mo",
        beds: 12, baths: 14, sqft: "22,000", type: "Chateau", purpose: "Lease",
        image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&q=80&w=1000"
    }
];

const Properties = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'map'
    const [filter, setFilter] = useState({
        location: '',
        priceRange: '',
        type: '',
        beds: '',
        purpose: ''
    });

    const [filteredProperties, setFilteredProperties] = useState(MOCK_PROPERTIES);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter(prev => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        let result = MOCK_PROPERTIES;

        if (filter.location) {
            result = result.filter(p => p.location.toLowerCase().includes(filter.location.toLowerCase()));
        }

        if (filter.type) {
            result = result.filter(p => p.type === filter.type);
        }

        if (filter.purpose) {
            result = result.filter(p => p.purpose === filter.purpose);
        }

        if (filter.beds) {
            const bedsNum = parseInt(filter.beds);
            result = result.filter(p => p.beds >= bedsNum);
        }

        setFilteredProperties(result);
    };

    return (
        <div className="properties-page">
            {/* Header Banner */}
            <div className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="page-header-content"
                    >
                        <h1>Our <span className="gold-text">Collection</span></h1>
                        <p>Explore the finest properties across the globe</p>
                    </motion.div>
                </div>
            </div>

            <div className="container section-padding">
                {/* Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="filter-container glass"
                >
                    <div className="filter-header">
                        <SlidersHorizontal size={20} className="gold-text" />
                        <h3>Advanced Search</h3>
                    </div>
                    <div className="filter-form">
                        <div className="form-group">
                            <label>Location</label>
                            <div className="input-with-icon">
                                <MapPin size={18} />
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="City, State, or Area"
                                    value={filter.location}
                                    onChange={handleFilterChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Property Type</label>
                            <select name="type" value={filter.type} onChange={handleFilterChange}>
                                <option value="">Any Type</option>
                                <option value="Mansion">Mansion</option>
                                <option value="Penthouse">Penthouse</option>
                                <option value="Villa">Villa</option>
                                <option value="Chateau">Chateau</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Price Range</label>
                            <select name="priceRange" value={filter.priceRange} onChange={handleFilterChange}>
                                <option value="">Any Price</option>
                                <option value="10-20">$10M - $20M</option>
                                <option value="20-30">$20M - $30M</option>
                                <option value="30+">$30M+</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Bedrooms</label>
                            <select name="beds" value={filter.beds} onChange={handleFilterChange}>
                                <option value="">Any</option>
                                <option value="4">4+ Beds</option>
                                <option value="6">6+ Beds</option>
                                <option value="8">8+ Beds</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Purpose</label>
                            <select name="purpose" value={filter.purpose} onChange={handleFilterChange}>
                                <option value="">Any Purpose</option>
                                <option value="Buy">Buy / Purchase</option>
                                <option value="Lease">Lease / Rent</option>
                            </select>
                        </div>

                        <div className="filter-actions">
                            <button className="btn btn-primary search-btn" onClick={applyFilters}>
                                <Search size={18} /> Search
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* View Mode Toggle */}
                <div className="view-mode-toggle">
                    <button
                        className={`mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        onClick={() => setViewMode('grid')}
                    >
                        Grid View
                    </button>
                    <button
                        className={`mode-btn ${viewMode === 'map' ? 'active' : ''}`}
                        onClick={() => setViewMode('map')}
                    >
                        Map View
                    </button>
                </div>

                {/* Results Info */}
                <div className="results-info">
                    <p>Showing <strong>{filteredProperties.length}</strong> exclusive properties</p>
                </div>

                <AnimatePresence mode='wait'>
                    {viewMode === 'grid' ? (
                        <motion.div
                            key="grid"
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="property-grid"
                        >
                            {filteredProperties.map(property => (
                                <motion.div
                                    key={property.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="property-card glass"
                                >
                                    <div className="property-image-wrapper">
                                        <img src={property.image} alt={property.title} className="property-image" />
                                        <div className="property-flag">{property.type}</div>
                                        <div className="property-price">{property.price}</div>
                                        <div className="purpose-tag">{property.purpose}</div>
                                    </div>
                                    <div className="property-content">
                                        <h3 className="property-title">{property.title}</h3>
                                        <div className="property-location-flex">
                                            <MapPin size={16} className="gold-text" />
                                            <span>{property.location}</span>
                                        </div>

                                        <div className="property-metrics">
                                            <div className="metric">
                                                <BedDouble size={18} />
                                                <span>{property.beds}</span>
                                            </div>
                                            <div className="metric">
                                                <Bath size={18} />
                                                <span>{property.baths}</span>
                                            </div>
                                            <div className="metric">
                                                <Square size={18} />
                                                <span>{property.sqft} sqft</span>
                                            </div>
                                        </div>

                                        <Link to={`/properties/${property.id}`} className="btn btn-outline full-width">
                                            View Details
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="map"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="map-view-container glass"
                        >
                            <div className="map-placeholder">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344222377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1709559344402!5m2!1sen!2sus"
                                    width="100%"
                                    height="600"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <div className="map-overlay-info">
                                    <h4>Showing {filteredProperties.length} locations on Map</h4>
                                    <p>Interactive property pins are currently limited to premium advisor accounts.</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {filteredProperties.length === 0 && (
                    <div className="no-results">
                        <p>No properties match your exact criteria. Please adjust your filters or contact our concierge for off-market opportunities.</p>
                        <button className="btn btn-outline" onClick={() => { setFilter({ location: '', type: '', priceRange: '', beds: '', purpose: '' }); setFilteredProperties(MOCK_PROPERTIES); }}>
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Properties;
