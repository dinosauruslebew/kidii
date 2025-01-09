import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan ini
import { ArrowRightIcon } from '@heroicons/react/solid';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate(); // Hook untuk navigasi
    const [isTransitioning, setIsTransitioning] = useState(false);

const handleNavigate = () => {
    setIsTransitioning(true); // aktifkan transisi
    setTimeout(() => {
        navigate('/detail'); // pindah halaman setelah delay
    }, 500); // delay sesuai durasi transisi
};


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section id="about" className={`p-8 bg-gray-50 relative ${isTransitioning ? '' : 'page-transition active'}`} ref={ref}>
            <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
            <div className={`flex flex-col items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-950 to-orange-500">
                    Tentang Kami
                </h2>
            </div>

            <div className={`relative flex items-center transition-transform duration-1000 ${isVisible ? 'translate-y-0' : 'translate-y-10 opacity-0 justify-start'}`}>
                <img
                    src={require('../asset/haechan.jpg')}
                    alt="Mie Ayam"
                    className="w-1/3 h-auto object-cover rounded-l-full shadow-md shadow-amber-600 ml-16 mt-5"
                />
                <div className="absolute left-1/3 w-[2px] h-3/4"></div>
                <div className="ml-10 w-1/2">
                    <p className="text-5xl ml-8 font-semibold text-left leading-tight text-amber-700 relative">
                        Satu Suap <br />
                        Sejuta Rasa
                        <span className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-amber-500 blur-md opacity-50"></span>
                    </p>

                    <p className="text-lg mt-4 ml-8 text-gray-600 tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <button
                        onClick={() => navigate('/detail')} // Navigasi ke halaman baru
                        className="mt-6 px-6 py-2 ml-8 outline outline-1 outline-amber-500 text-black hover:text-white font-semibold rounded-full hover:bg-amber-500 transition duration-300 flex space-x-1"
                    >
                        <span className="mr-2">Selengkapnya</span>
                        <ArrowRightIcon className="w-5 h-5 mt-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
