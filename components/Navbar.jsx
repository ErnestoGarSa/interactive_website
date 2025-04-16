import Link from "next/link";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${classes.navbar}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${classes.nav_title}`} href="/">
          Mastering the web
        </Link>
        <button
          className={`${classes.navbar_toggler}  d-lg-none`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item ">
              <Link
                className={`${classes.nav_link}`}
                aria-current="page"
                href="/palindrome"
              >
                Palindrome
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${classes.nav_link}`} href="/factorial">
                Factorial
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${classes.nav_link}`} href="/is_prime">
                Is prime
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${classes.nav_link}`} href="/largest_smallest">
                Largest and smallest
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${classes.nav_link}`} href="/reverse_sentence">
                Reverse sentence
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`${classes.nav_link}`}
                href="/sum_of_all_numbers"
              >
                Sum of all numbers
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${classes.nav_link}`} href="/ascending_sort">
                Ascending sort
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
