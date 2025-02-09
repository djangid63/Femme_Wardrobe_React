import React from 'react'
import { useState } from 'react';
import ContactHome from './ContactHome';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section className='flex flex-col items-center justify-center h-[120vh] bg-white md:py-32'>
      <div className='w-[34vw] h-[100%] flex flex-col items-center justify-start gap-4 mb-10'>
        <p className="antialiased box-border clear-both font-mont text-[11px] font-semibold tracking-[2px] leading-[13.75px] break-words uppercase">Get in touch</p>
        <h1 className='antialiased box-border clear-both font-mainHead text-[31px] italic font-bold leading-[43.4px] break-words text-center capitalize'>We value the connection with our community and are here to assist in any way we can. Feel free to reach out through the following channels:</h1>
      </div>
      {/* Form section */}
      <div className='w-[100vw] h-[100%] flex flex-col items-center justify-start gap-8'>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-[50vw] p-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 mb-4 w-full font-mont"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 mb-4 w-full font-mont"
            />
            <textarea
              placeholder="Message"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 mb-4 w-full font-mont"
            />
            <button
              type="submit"
              className="border p-2 w-full font-mont bg-transparent text-black hover:bg-gray-200"
            >
              SEND
            </button>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="contact-info ">
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className="text-sm font-semibold  font-mont text-gray-400 mb-2">PHONE</h3>
                  <p className="text-xl font-bold italic font-mainHead ">(303) 555-0105</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold font-mont text-gray-400 mb-2 ">EMAIL</h3>
                  <p className="text-xl font-bold italic font-mainHead ">mail@example.com</p>
                </div>
              </div>
              {/* Separator line */}
              <div className='w-[100%] border-t-[0.1px] my-6 border-gray-300 '></div>
              <h3 className="text-sm font-semibold mb-2 font-mont text-gray-400 mt-4">ADDRESS</h3>
              <p className="text-xl font-bold italic font-mainHead ">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
              <div className='w-[100%] border-t-[0.1px] my-6 border-gray-300 '></div>
              <div className="social-media mt-4">
                <span className="text-sm font-bold font-mont text-gray-400">FOLLOW US:</span>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-2xl">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="text-2xl">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-2xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm
