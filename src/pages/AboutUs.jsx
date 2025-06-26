import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const member = {
  name: 'Jahid Hasan Sabbir',
  role: 'Frontend Developer',
  image: 'https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/321807283_898964284571023_8321969724478849044_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGPXRlDTH1sCxusbbgZ2i7bT0xcFh3AccxPTFwWHcBxzNGk91KA4y2CAJiphqGPLNTtXtluX8hukAtBTFqOHN8R&_nc_ohc=l4wSHs23AcgQ7kNvwG64oq-&_nc_oc=AdkyjlFbRwbxOOiLg59uhK69EUb6SI6IFohtPEkRAcTHE4yxq6thypZ_qKXw9KznL18&_nc_zt=23&_nc_ht=scontent.fzyl2-1.fna&_nc_gid=MPLiQV1c0xx5U-x537Z94A&oh=00_AfOe9f0_5jBLRcepmeRTQifDuTN8_NMLVfZXNCELwDpeBQ&oe=68630346',
  description: 'I love building modern web applications using React.js, Node.js, and Tailwind CSS.',
  social: {
    facebook: 'https://www.facebook.com/jahid.hasan.sabbir01',
    linkedin: 'https://www.linkedin.com/in/jahid-hasan-sabbir-035ab2290',
    github: 'https://github.com/jahidhasansabbir',
  },
};

const AboutUs = () => {
  return (
    <div className=" py-10 w-11/12 mx-auto">
      {/* Intro Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          I’m a passionate developer dedicated to building impactful digital solutions. My mission is to create innovative, scalable, and user-friendly experiences.
        </p>
      </div>

      {/* Card Section: Responsive Layout */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-base-100 shadow-xl rounded-lg overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-2/5">
          <img src={member.image} alt={member.name} className="w-full  h-80 xl:h-96 object-cover" />
        </div>

        {/* Text & Icons */}
        <div className="w-full md:w-1/2 p-6 text-center md:text-left">
          <h2 className="text-2xl font-bold">{member.name}</h2>
          <p className="text-sm text-gray-500">{member.role}</p>
          <p className="mt-3 text-gray-700">{member.description}</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl text-primary">
            <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
