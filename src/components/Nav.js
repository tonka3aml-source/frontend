import { Link } from "react-router-dom"


const Nav = () => {
  return (
   
<nav className="navbar navbar-expand-lg">
  <div className="container ">
  <img src="img/favicon-max.png" width="60px"/>


    <a className="navbar-brand">MAXIMALNO ULJE - Snaga iz zemlje</a>

   
    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
      <span className="navbar-toggler-icon"></span>
    </button>

   
    <div className="collapse navbar-collapse" id="nav">
      <ul className="navbar-nav ms-auto">

        <li className="nav-item"><Link className="nav-link" to="/onama">O nama</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/proizvodi">Proizvodi</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/kosarica">🛒Košarica</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Nav