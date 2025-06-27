import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral ">
      <div className=" footer  sm:footer-horizontal text-neutral-content py-10 w-11/12 mx-auto ">
        <aside>
          <p>
            <NavLink to="/" className="font-bold text-xl">
              <span>RoomMate</span>
              <span className="ml-2 text-blue-500">Finder</span>
            </NavLink>
            <br />
            Making shared living easier since 2024
          </p>
          <p className="mt-2 text-sm">
            📞 Phone:{" "}
            <a href="tel:+880123456789" className="link link-hover">
              +880 1234-56789
            </a>
          </p>
          <p className="text-sm">
            📧 Email:{" "}
            <a href="mailto:support@roommate.com" className="link link-hover">
              support@roommate.com
            </a>
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <NavLink className="link link-hover" to="/">
            Home
          </NavLink>
          <NavLink className="link link-hover" to="/browse-listing">
            Browse Listing
          </NavLink>
          <NavLink className="link link-hover" to="/about-us">
            About Us
          </NavLink>
          <NavLink className="link link-hover" to="/support">
            Support
          </NavLink>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/jahid_sabbir1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 1200 1227"
                className="fill-current"
              >
                <path d="M706 545 1164 0H1057L653 478 336 0H0L487 722 0 1227H107l429-496 329 496h336L706 545ZM587 643 542 585 150 83h149l302 421 44 58 411 572H905L587 643Z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
