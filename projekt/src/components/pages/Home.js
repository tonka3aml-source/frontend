const Home = () => {
  return (


<>

 <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container">
        
        <a className="navbar-brand" href="/index.html">
          <img src="img/header/logo.svg" alt="logo" height="12"/> 
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> 
        </button>

        <div className="navbar-collapse collapse show" id="mainNavbar">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
         <li className="nav-item dropdown text-end">
              <a className="nav-link dropdown-toggle" href="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">ELECTRIC</a>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><a className="dropdown-item text-end" href="#">Electric Ace</a></li>
                <li><a className="dropdown-item text-end" href="#">Electric Ivy</a></li>
              </ul>
            </li>
          <li className="nav-item dropdown text-end">
              <a className="nav-link dropdown-toggle" href="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">CITY</a>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><a className="dropdown-item text-end" href="#">Caféracer</a></li>
                <li><a className="dropdown-item text-end" href="#">Robyn</a></li>
              </ul>
            </li>
           <li className="nav-item dropdown text-end">
              <a className="nav-link dropdown-toggle" href="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">KIDS</a>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><a className="dropdown-item text-end" href="#">El Bear</a></li>
                <li><a className="dropdown-item text-end" href="#">El Robin</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-end" href="#">ACCESSORIES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-end" href="#">STORES</a>
            </li>
           <li className="nav-item dropdown text-end">
              <a className="nav-link dropdown-toggle" href="#" id="ddElectric" role="button" data-bs-toggle="dropdown" aria-expanded="false">LEASING</a>
              <ul className="dropdown-menu" aria-labelledby="ddElectric">
                <li><a className="dropdown-item text-end" href="#">Private</a></li>
                <li><a className="dropdown-item text-end" href="#">Business</a></li>
              </ul>
            </li>
          </ul>

    <ul className="navbar-nav ms-auto align-items-center">
      <li className="nav-item">
        <a className="nav-link" href="/signin" title="Sign in">
            <img src="img/header/user.svg" alt="Sign in" className="icon-sm"/>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cart" title="Cart">
            <img src="img/header/cart.svg" alt="Cart" className="icon-lg "/>
        </a>
      </li>
    </ul>
          
        </div>
      </div>
    </nav>


    <section className="hero d-flex align-items-center text-white mb-5">
      <div className="container">
        <span className="text-uppercase">Veloretti Business</span>
        <h1>Bike Lease Plan For Employees.</h1>
      </div>
    </section>



    <section className="home-1 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="img/home-1.jpg" alt="Naslovna 1. slika" />
          </div>
          <div className="col-md-6">
            <div className="max-466 ms-md-auto my-4">
              <h2 className="opacity-90">Bike plans for employees.</h2>
              <p className="opacity-90 mt-3 mb-4">
                Veloretti Electrics benefit both the environment and the health of
                your employees. Oh, and they look good too. Cost-free for the
                employer and outside of the WKR.
              </p>
              <a href="#">Discover More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-2 d-flex align-items-center text-white">
      <div className="container">
        <div className="col-md-12">
          <div className="max-466 ms-md my-4">
            <h2 className="opacity-90">Service, maintenance and insurance</h2>
             <p className="opacity-90 mt-3 mb-4">
                The lease includes an all-in service package. 
                Throughout the entire 36 months, 
                you are fully insured against damage, 
                theft and maintenance. In addition, 
                you always have access to roadside assistance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="home-3 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="img/home-3.jpg" alt="Naslovna 3. slika" />
          </div>
          <div className="col-md-6">
            <div className="max-466 ms-md-auto my-4">
              <h2 className="opacity-90">Free of charge for employers</h2>
              <p className="opacity-90 mt-3 mb-4">
                The bike plan is totally independent of the WKR and is free for you as
                an employer. The employee pays the lease costs and you, as the
                employer, decide whether you want to contribute to the costs.
              </p>
              <a href="#">Cost example</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-4 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-md-2">
            <img src="img/home-4.jpg" alt="naslovna 4. slika"/>
          </div>
          <div className="col-md-6">
            <div className="max-466 ms-md-auto my-4">
              <h2 className="opacity-90">How it works</h2>
              <ul className="opacity-90 mt-3 mb-4">
                <li className="opacity-90">
                  
                  <h3 className="list-item">Register your company</h3>
                  <p className="opacity-50 mt-3 mb-4">
                    Fill in our registration form with your company details. After
                    your registration, our leasing partner will do a credit check. You
                    will hear whether your application has been approved within 24
                    hours.
                  </p>
                </li>
                <li className="opacity-90">
                  
                  <h3 className="list-item">Determine the requirements</h3>
                  <p className="opacity-50 mt-3 mb-4">
                    You get acces to the digital platform. Set the requirements for
                    your employees and share the registration link.
                  </p>
                </li>
                <li className="opacity-90">
                  
                  <h3 className="list-item ">Ride your bike!</h3>
                  <p className="opacity-50 mt-3 mb-4">
                    Let's go! Your employees can choose their bikes and they'll be
                    delivered straight to their homes.
                  </p>
                </li>
                <li className="opacity-90">
                  
                  <h3 className="list-item">Administration</h3>
                  <p className="opacity-50 mt-3 mb-4">
                    Everything in one place. The digital platform gives you an easy
                    overview of all the information for your payroll.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="faq">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1>Najčešće postavljana pitanja</h1>
          </div>
        </div>
      </div>
    </section>

    <section className="footer-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <p className="mb-0 px-md-5">Ready to take the Electric Ivy or Ace for a spin? Electric test rides are now available in Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag, Nijmegen, Weesp, Wormerveer, Berlin, Hamburg and Munich. Schedule your test ride now and we'll see you there.</p>
          </div>
          <div className="col-md-5 text-center">
            <a href="#" className="btn">BOOK NOW</a>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <h4>Explorer</h4>
                <ul>
                  <li><a href="#">Electric bikes</a></li>
                  <li><a href="#">City bikes</a></li>
                  <li><a href="#">Kid's bikes</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Outlet</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Insurance Electric</a></li>
                  <li><a href="#">Size Guide</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>About</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Journal</a></li>
                  <li><a href="#">Reviews</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Jobs</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Help</h4>
                <ul>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Assembly & manuals</a></li>
                  <li><a href="#">Payment options</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms & conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
              <h4>Join the ride.</h4>
              <p>Sign up for our newsletter.</p>
          </div>
        </div>
      </div>
    </footer>

</>



)
}

export default Home