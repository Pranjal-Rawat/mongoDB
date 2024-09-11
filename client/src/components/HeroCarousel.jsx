import React, { useState, useEffect } from 'react';

export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXEcHZgDw-Hl_OY9YB_KIrqvHF8u1lr2768A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IDedXDPGVi2s7la2Lv5MFURHLMy49fbUgA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhct9ZGpOhO9eT4OeiCWgqTVxQbFg-obj3_w&s"
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000); // Change slide every 4 seconds

        return () => {
            clearInterval(interval); // Cleanup the interval on component unmount
        };
    }, [activeIndex]);

    return (
        
        <div id="controls-carousel" className="relative w-full py-2" data-carousel="static">
            <div className="relative top-20 h-full overflow-hidden rounded-lg md:h-[300px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        data-carousel-item={index === activeIndex ? "active" : ""}
                    >
                        <img src={slide} className="w-full object-top" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
