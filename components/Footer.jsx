import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import classes from "./Footer.module.css";

const Footer = () => {
  let emailAddress = "ernestogarsa.dev@gmail.com";
  return (
    <footer className={`${classes.footer} py-3`}>
      <h3 className={`text-center  ${classes.footer_contact}`}>Contact</h3>
      <div className="d-flex justify-content-around align-items-center">
        <Link
          href={`mailto:${emailAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail className={`${classes.footer_icon}`} />
        </Link>
        <Link href="https://www.github.com/ErnestoGarSa" target="_blank">
          <FaGithub className={`${classes.footer_icon}`} />
        </Link>
        <Link href="https://www.linkedin.com/in/ErnestoGarSa" target="_blank">
          <FaLinkedin className={`${classes.footer_icon}`} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
