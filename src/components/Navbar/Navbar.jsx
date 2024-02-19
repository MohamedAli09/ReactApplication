import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const active = (e) => {
    let anchors = document.querySelectorAll(".nav-link");
    anchors.forEach((anchor) => {
      anchor.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <nav className="navbar navbar-expand-lg py-4 fixed-p    ">
      <div className="container">
        <Link className="navbar-brand text-light" to="">
          START FRAMEWORK
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                onClick={(e) => active(e)}
                className="nav-link text-light about active"
                aria-current="page"
                to="/"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={(e) => active(e)}
                className="nav-link text-light portfolio"
                to="/portfolio"
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={(e) => active(e)}
                className=" nav-link text-light contact"
                to="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
