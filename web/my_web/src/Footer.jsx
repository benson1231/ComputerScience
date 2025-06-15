import React from "react";
import "./Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer id ="footer" className="site-footer">
      <div className="wrapper">
        <div className="footer-col">
          <a
            href="https://github.com/benson1231"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <AiFillGithub size={48} />
          </a>
          <a
            href="https://www.linkedin.com/in/chin-yu-lee-471109294"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={48} />
          </a>
          <a
            href="https://benson1231.gitbook.io/benson1231-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link gitbook"
            aria-label="Gitbook"
          >
            <FaBookOpen size={48} />
          </a>
          <a
            href="mailto:benson106075@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link email"
            aria-label="Email"
          >
            <MdEmail size={48} />
          </a>
        </div>
        <div className="footer-col">
          <div className="contact-list">
            <p>&copy; {new Date().getFullYear()} Chin-Yu Lee</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
