import React from "react";
import { Link } from "react-router-dom";
import image from "./navimg.png";
const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-8 dark:text-gray-600 font-semibold">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full">
              <img src={image} alt="" />
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <a rel="noopener noreferrer" href="/">
                  Terms of Use
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com"
              >
                Facebook
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://twitter.com">
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <hr />
          <p className="text-center pt-5">
            © Copyright 2022 MamunMridha. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
