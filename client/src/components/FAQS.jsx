import React, { useState } from 'react';
import './FAQS.css';

const Accordion = () => {
    // Define the FAQ data
    const faqData = [
        { question: "What is your return policy?", answer: "We offer a 30-day return policy on all items." },
        { question: "How long does shipping take?", answer: "Shipping typically takes 3-5 business days." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide!" }
    ];

    // State to track which accordion item is open
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle function
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            <h1>Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <div className="accordion" key={index}>
                    <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                    </div>
                    <div
                        className={`accordion-content ${
                            activeIndex === index ? 'open' : ''
                        }`}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
