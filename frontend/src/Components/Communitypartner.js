import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function CommunityPartnerComponent() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        async function fetchPartnerData() {
            try {
                const response = await fetch('http://localhost:5000/partners');
                const data = await response.json();
                setPartners(data);
            } catch (error) {
                console.error('Error fetching partner data:', error);
            }
        }

        fetchPartnerData();
    }, []);

    return (
        <div className='communitypartner'>
            <div className='headcommunity'>
                <h1>Connect and Learn about our precious community partners</h1>
            </div>
            <div className='partners'>
            {partners.length > 0 ? (
                partners.map(partner => (
                    <div key={partner.id} className="partner-card">
                        <div className="partner-img">
                            <img src={partner.imgUrl} alt={partner.name} />
                        </div>
                        <div className="partner-name">{partner.name}</div>
                        <div className="partner-bio">{partner.bio}</div>
                        <div className="partner-links">
                            {partner.instaLink && (
                                <a href={partner.instaLink} target="_blank">
                                    <FaInstagram />
                                </a>
                            )}
                            {partner.twitterLink && (
                                <a href={partner.twitterLink} target="_blank">
                                    <FaTwitter />
                                </a>
                            )}
                            {partner.linkedinLink && (
                                <a href={partner.linkedinLink} target="_blank">
                                    <FaLinkedin />
                                </a>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
            </div>
        </div>
    );
}

export default CommunityPartnerComponent;
