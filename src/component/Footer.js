import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaRedditAlien,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark bg-opacity-50 text-center py-4 text-white">
      <Container>
        <p className="mb-2 small">
          Platform LocalSe Private Limited
          <br />
          Registered Address: G-39, Vardhman Grand Market, Dwarka, New Delhi
        </p>
        <p className="mb-2">
          Contact:{" "}
          <a href="mailto:awareness@localse.in" className="text-info">
            awareness@localse.in
          </a>
        </p>

        <div className="d-flex justify-content-center gap-3 mb-2">
          <a href="/terms" className="text-info text-decoration-none">
            Terms & Conditions
          </a>
          <a href="/privacy" className="text-info text-decoration-none">
            Privacy Policy
          </a>
          <a href="/disclaimer" className="text-info text-decoration-none">
            Disclaimer
          </a>
        </div>

        {/* Social Media Links */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://www.instagram.com/localseofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/people/LocalSe/61575924641843/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.linkedin.com/company/localseindiai/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://www.reddit.com/user/Chance-Macaron-1016/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Reddit"
          >
            <FaRedditAlien size={20} />
          </a>
          <a
            href="https://www.youtube.com/@PlatformLocalse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.pinterest.com/awareness0182/?invite_code=91d5b73214994c3ab0e52d2c9bfb439e&sender=930908322885037777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            aria-label="Pinterest"
          >
            <FaPinterestP size={20} />
          </a>
        </div>

        <p className="small">
          © 2025 Platform LocalSe Private Limited. All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
