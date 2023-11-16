import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Mastering the web
        </Link>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link "
                aria-current="page"
                href="/palindrome"
              >
                Palindrome
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/factorial">
                Factorial
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/is_prime">
                Is prime
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/largest_smallest">
                Largest and smallest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/reverse_sentence">
                Reverse sentence
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/sum_of_all_numbers">
                Sum of all numbers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="/ascending_sort">
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
