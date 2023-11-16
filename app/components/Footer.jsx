import Link from "next/link";

const Footer = () => {
  let emailAddress = "ernestogarsa.dev@gmail.com";
  return (
    <footer className="footer">
      <h3 className="text-center pt-3 contact">Contact</h3>

      <Link
        href={`mailto:${emailAddress}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="email text-center"> ernestogarsa.dev@gmail.com</p>
      </Link>
    </footer>
  );
};

export default Footer;
