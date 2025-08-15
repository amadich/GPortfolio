import React from 'react';
import ButtonSub from './ButtonSub';

const ContactBox = () => {
  return (
    <div className="bg-white shadow-lg  p-8 flex flex-col md:flex-row gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-gray-700 mb-4">Start the conversation</h2>
        <p className="text-gray-600 text-xl w-96">If none of the quick links above apply to you, please fill out the form. We'll be in touch as soon as possible to discuss your questions.</p>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <form className="space-y-4 text-black">
          {/* Name */}
          <div>
            <label className="block text-sm  text-gray-700" htmlFor="name">Name</label>
            <div className="flex gap-4">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="w-1/2 h-14 p-2 border border-gray-200  focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
              />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="w-1/2 h-14 p-2 border border-gray-200  focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm  text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full h-14 p-2 border border-gray-200  focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm  text-gray-700" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              className="w-full h-14 p-2 border border-gray-200  focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm  text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 border border-gray-200  focus:ring focus:ring-blue-200 focus:outline-none placeholder:text-gray-400 not-even:"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <ButtonSub text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactBox;
