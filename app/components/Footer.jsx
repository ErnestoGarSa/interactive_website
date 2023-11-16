import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  let emailAddress = "ernestogarsa.dev@gmail.com";
  return (
    <footer className="footer ">
      <h3 className="text-center pt-3 contact">Contact</h3>

      <div className="d-flex justify-content-around align-items-center">
        <Link
          href={`mailto:${emailAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail className="footer-icon  " />
        </Link>
        <Link href="https://www.github.com/ErnestoGarSa" target="_blank">
          <FaGithub className="footer-icon " />
        </Link>
        <Link href="https://www.linkedin.com/in/ErnestoGarSa" target="_blank">
          <FaLinkedin className="footer-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
