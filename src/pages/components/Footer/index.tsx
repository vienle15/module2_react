<>
  import {"{"} Component, ReactNode {"}"} from "react"; class Header extends
  Component {"{"}
  render() {"{"}
  return (
  <header>
    <div>
      <div className="top-bar d-flex justify-content-between container py-1">
        <div className="logo">
          <img src="./bt.img/top-left-img.png " alt="" width={20} />
        </div>
        <ul className="info d-flex">
          <li>Find a Store</li>
          <li>Help</li>
          <li>Join us</li>
          <li id="login-nosuccess" />
        </ul>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <div className="container-fluid-img">
                <img
                  className="navbar-brand"
                  src="./bt.img/nike logo.png"
                  width={60}
                  alt=""
                />
              </div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    New &amp; Features
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Men
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Women
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Kids
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SNKRS
                  </a>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="input-search"
                />
                <button className="btn btn-success">
                  <a href="#carousel-banner" id="label-smooth">
                    🔎
                  </a>
                </button>
                <a className="top-cart-top" href="cart.html">
                  <img className="top-cart" src="./bt.img/bag.svg" width={30} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="d-block w-1000">Giày đi rừng</p>
          </div>
          <div className="carousel-item">
            <p className="d-block w-1000">Giày độc lạ</p>
          </div>
          <div className="carousel-item">
            <p className="d-block w-1000">Giày đá bóng</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
  {"}"}
  {"}"}
  export default Header;
</>;
