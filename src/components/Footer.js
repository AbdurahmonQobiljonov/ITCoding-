import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_left">
          <h1>ITCODDING</h1>
          <br />
          <p>+998 93 553-3352</p>
          <p>+998 93 553-3352</p>
          <p>itcodding@gmail.com</p>
        </div>
        <div className="footer_right">
          <ul className="footer_menu">
            <li className="footer_item">
              <Link className="footer_link" to="/">
                Biz haqimizda
              </Link>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="courses">
                Kurslar
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="s">
                Jamoa
              </a>
            </li>
            <li className="footer_item">
              <a className="footer_link" href="s">
                Hamkorlik
              </a>
            </li>
          </ul>

          <div className="footer_social">
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-telegram"></i>
            <i className="bx bxl-youtube"></i>
          </div>

          <div className="footer_condition">
            <p>
              © 2022. ITCODDING. All rights reserved. Design by Begmatov Bekzod
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
