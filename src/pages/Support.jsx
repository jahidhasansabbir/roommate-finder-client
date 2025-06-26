import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaComments } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="w-11/12 py-12  mx-auto">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500">Support</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Need help using RoomMate Finder? We're always here to assist with any questions, issues, or concerns you may have. Reach out using any method below.
        </p>
      </div>

      {/* Support Options */}
      <div className="grid gap-8 md:grid-cols-3 text-center">
        {/* Email */}
        <div className="card bg-base-200 shadow-md p-6 rounded-lg">
          <div className="flex flex-col items-center">
           <div className='flex-grow'>
             <div className='flex justify-center'><FaEnvelope className="text-3xl text-blue-500 mb-3" /></div>
            <h3 className="text-xl font-semibold mb-1">Email Us</h3>
            <p className="text-gray-400 mb-2">support@roommate.com</p>
           </div>
            
            <a href="mailto:support@roommatefinder.com" className="btn btn-sm   bg-blue-500 mt-6">
              Send Email
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="card bg-base-200 shadow-md p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <div className='flex-grow'>
              <div className='flex justify-center'><FaPhoneAlt className="text-3xl text-blue-500 mb-3" /></div>
              
            <h3 className="text-xl font-semibold mb-1">Call Us</h3>
            <p className="text-gray-400 mb-2">+880 1234-56789</p>
            </div>
            <a href="tel:+8801234567890" className="btn mt-6 btn-sm    bg-blue-500">
              Call Now
            </a>
          </div>
        </div>

        {/* Live Chat */}
        <div className="card bg-base-200 shadow-md p-6 rounded-lg">
          <div className="flex flex-col items-center">
           <div className='flex-grow'>
            <div className='flex justify-center'><FaComments className="text-3xl text-blue-500 mb-3" /></div>
             
            <h3 className="text-xl font-semibold mb-1">Live Chat</h3>
            <p className="text-gray-400 mb-2">Chat with our support team instantly</p>
           </div>
            <a href="mailto:support@roommatefinder.com" className="btn btn-sm   bg-blue-500">
              Start Chat 
            </a>
          </div>
        </div>
      </div>

      {/* Extra Info */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Support hours: Sunday – Friday, 9 AM – 8 PM (GMT+6)</p>
        <p>We aim to respond to all inquiries within 12 hours.</p>
      </div>
    </div>
  );
};

export default Support;
