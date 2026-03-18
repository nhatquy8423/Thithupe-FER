import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container-fluid d-flex bg-success justify-content-between align-items-center py-2">
        <div className="d-flex">
          <img
            src="/images/logo.png"
            alt="logo"
            className="mx-5"
            style={{ height: "40px" }}
          />
        </div>
        <div className="d-flex gap-2">
          <Link to={"/"} className="text-white text-decoration-none me-3">
            Home
          </Link>
          <Link
            to={"/contact-us"}
            className="text-white text-decoration-none me-3"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
