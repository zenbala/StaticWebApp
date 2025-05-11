import React from 'react';

const phoneNumber = "+919876543210"; // Replace with your actual phone number

const handleCTA = () => {
    if (window.innerWidth >= 768) {
        // Copy phone number to clipboard
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(`Phone number ${phoneNumber} copied!`);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    } else {
        // Redirect to call page on mobile
        window.location.href = `tel:${phoneNumber}`;
    }
};

const CTAButton = () => {
    return (
        <button
            onClick={handleCTA}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-900 hover:bg-blue-700 rounded-lg shadow-lg transition-all duration-300"
        >
            Contact Us
        </button>
    );
};

export default CTAButton;