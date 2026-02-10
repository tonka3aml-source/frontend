import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const location = useLocation();
  const [name, setName] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) setName(user);
  }, []);

  if (location.pathname === "/signin") {
    return;
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    //window.location.reload();
    setName(null);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container ">
        <img src="img/favicon-max.png" width="60px" alt="" />

        <Link to="/" className="navbar-brand">
          {" "}
          MAXIMALNO ULJE - Snaga iz zemlje
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*  <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
         */}

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/onama">
                O nama
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proizvodi">
                Proizvodi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kategorije">
                Kategorije
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kosarica">
                🛒Košarica
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              {name ? (
                <button onClick={logout} className="btn btn-primary">
                  Dobrodošli, {name}
                </button>
              ) : (
                <Link className="nav-link" to="/signin" title="Sign in">
                  <img
                    src="img/header/user.svg"
                    alt="Sign in"
                    className="icon-sm"
                  />
                </Link>
              )}
            </li>

            {/*  <li className="nav-item">
              <Link className="nav-link" to="/signin" title="Sign in">
                <img
                  src="img/header/user.svg"
                  alt="Sign in"
                  className="icon-sm"
                />

                {name}
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/cart" title="Cart">
                <img src="img/header/cart.svg" alt="Cart" className="icon-lg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
