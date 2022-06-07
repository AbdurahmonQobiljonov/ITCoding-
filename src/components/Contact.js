import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact_us">
      <div className="contact_container">
        <h2 className="text_header">
          Bilasizmi, bizda birinchi dars uchun pul to‘lanmaydi
        </h2>
        <div className="btn_box">
          <button className="btn">Kursga yozilish</button>
          <Link to="courses" className="btn btn-outline-light">
            Batafsil
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
