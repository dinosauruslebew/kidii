import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once it's visible
                }
            },
            { threshold: 0.1 } // Adjust this value as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative p-10 overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Background wrapper with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${require('../asset/background.jpg')})`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative flex items-center">
                <div className="w-1/2 ml-12 -mt-16">
                    <p className="text-white text-5xl font-bold text-left leading-tight">
                        Rasain <br />
                        Nikmatnya Cita <br />
                        Rasa
                        <span className="text-amber-500"> Mi Ayam.</span>
                    </p>

                    <p className="text-lg mt-4 text-gray-400">
                        Gmw? yang bener aja njir gamau mi ayam. Makanan terenak di dunia kok kmu tolak?
                    </p>
                </div>

                <div className="w-1/2 flex justify-end -mt-10 ml-12">
                    <img
                        src={require('../asset/mieayam.png')}
                        alt="Mie Ayam"
                        className="w-[50] h-auto object-cover shadow-lg shadow-amber-600 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;