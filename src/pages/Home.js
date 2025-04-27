import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
// import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import HeroTop from '../components/Herotop';
import NavBar from '../components/Navbar/NavBar';
// import Serviceproviders from '../components/Serviceproviders'
import Serviceproviders from '../components/serviceproviders';


const Home = () => {
    return (
        <>
            <NavBar />
            <HeroTop />
            <Hero />
            {/* <Intro /> */}
            <Services />
            {/* <Portfolio /> */}
            <Clients />
            <Serviceproviders />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

