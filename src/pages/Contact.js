import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import Notiflix from 'notiflix';

const Contact = () => {
    useDocTitle('Yugam HR Solutions - Send Us a Message');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // Manage button state

    useEffect(() => {
        if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
            const script = document.createElement('script');
            script.src = "https://tally.so/widgets/embed.js";
            script.async = true;
            script.onload = () => {
                if (window.Tally) {
                    window.Tally.loadEmbeds();
                }
            };
            document.head.appendChild(script);
        } else {
            if (window.Tally) {
                window.Tally.loadEmbeds();
            }
        }
    }, []);

    return (
        <>
            <NavBar />
            <iframe 
                data-tally-src="https://tally.so/embed/nGqOJz?hideTitle=1&transparentBackground=1" 
                loading="lazy" 
                width="100%" 
                height="1127"  
                title="SEND US MESSAGE"
                style={{ display: 'block', margin: '0 auto', paddingTop: '50px' }} // Adds padding above the form
            ></iframe>
            <Footer />
        </>
    );
};

export default Contact;
