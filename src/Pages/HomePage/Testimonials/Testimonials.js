import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
        <section className='container mx-auto my-20'>
            <div className='flex justify-between px-4 py-2 md:px-0 md:py-0'>
                <div>
                    <h4 className='text-secondary text-xl font-bold'>Testimonial</h4>
                    <h3 className='text-accent text-4xl'>What Our Patients Say</h3>
                </div>
                <div>
                    <img className='w-28 md:w-48' src={quote} alt="quote" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonials;