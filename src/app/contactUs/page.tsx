'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [message, setMessage] = useState<string>("")
  const [error, setError] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setMessage(`Your Message sent successfully`)
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setMessage("")
        }, 4000);
      } else {
        setError('Failed to send message');
        setTimeout(() => {
          setError("");
        }, 4000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form');
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };
  
  return (
    <div className='h-screen'>
      <section id="contact" className="p-16 bg-gray-200">
        <h2 className='text-4xl text-center font-bold'>Contact Me</h2>
        <form onSubmit={handleSubmit}
        className="flex flex-col w-3/4 sm:w-3/5 mx-auto ">
          <div className="mb-6">
              <label htmlFor="name" className='block mb-2 text-gray-800 text-base'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='w-full p-3 border border-gray-400 rounded-lg text-base'
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className='block mb-2 text-gray-800 text-base'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 border  border-gray-400 rounded-lg text-base'
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className='block mb-2 text-gray-800 text-base'>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='w-full p-3 border  border-gray-400 rounded-lg text-base'
              rows={5}
              required
            />
          </div>
          {message && <div className='text-center text-green-500'>{message}</div>}
          {error && <div className='text-center text-red-500'>{error}</div>}

          <button type="submit" className="w-40 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white text-base font-bold rounded-lg cursor-pointer text-center self-center">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-16 gap-16">
          <a href="https://www.linkedin.com/in/ghulam-akber-8221052bb/" target="_blank" rel="noopener noreferrer"
          >
            <Image 
            src={"/images/svg/linkedin-brands-solid.svg"}
            alt='LinkedIn'
            width={50}
            height={1}
            />
          </a>
          <a href="https://github.com/Akber261986" target="_blank" rel="noopener noreferrer"
          >
            <Image 
            src={"/images/svg/github-brands-solid.svg"}
            alt='GitHub'
            width={50}
            height={1}
            />
          </a>
          <a href="https://web.facebook.com/ghulam.dal?mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"
          >
            <Image 
            src={"/images/svg/facebook-brands-solid.svg"}
            alt='Facebook'
            width={50}
            height={1}
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
