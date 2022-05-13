import React from "react";
import { Link } from "react-router-dom";

const linksAll = [
  { main: "Bosh Sahifa", path: "/" },
  { main: "Kurslar", path: "courses" },
  { main: "O‘qituvchilar", path: "/" },
  { main: "Bog'lanish", path: "/" },
];

const Header = () => {
  const [first, setfirst] = React.useState(false);
  return (
    <header className="header" id="header">
      <div className="header_container">
        <Link to="/">
          <h1 className="header_logo">ITCODDING</h1>
        </Link>
        <div
          className={first ? "header_controll active" : "header_controll"}
          id="controll"
        >
          <nav className="navbar_nav">
            <ul className="navbar_menu">
              {linksAll.map((e, idx) => (
                <li className="navbar_item" key={idx * 2}>
                  <Link
                    to={e.path}
                    className="navbar_link"
                    onClick={() => setfirst(false)}
                  >
                    {e.main}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="header_login">
              <div className="header_login-in">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 12H7M7 12L10 9M7 12L10 15"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p>Kirish</p>
              </div>
              <button className="header_login-btn btn btn-outline">
                ro‘yxatdan o‘tish
              </button>
            </div>
          </nav>
        </div>

        <div
          className={first ? "burger active" : "burger"}
          id="burger"
          onClick={() => setfirst(() => !first)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
