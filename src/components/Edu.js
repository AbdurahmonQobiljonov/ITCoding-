import React from "react";
import DateConverter from "../Helper/DateConverter";
import EduCoverter from "../Helper/EduCoverter";
import Api from "../server/Api";

const Edu = () => {
  const [corses, setCorses] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      try {
        await new Api()
          .coursesApi("courses")
          .then(({ data }) => setCorses(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, []);
  return (
    <section className="edu_container">
      <div className="text_header">
        <h2>bizda mavjud kurslar</h2>
      </div>
      <div className="edu_box">
        {corses &&
          corses.slice(0, 4).map((item, idx) => (
            <div className="edu_types" key={idx}>
              <div className="edu_types_header">
                <img
                  src={`http://localhost:3030/images/${item.courseImgUrl}`}
                  alt=""
                />
              </div>
              <div className="edu_types_main">
                <h4>{item.courseName}</h4>
                <div className="edu_types_methods">
                  <p>
                    <i className="bx bx-check-circle" />{" "}
                    {EduCoverter(item.courseType)} kursi
                  </p>
                  <p>
                    <i className="bx bx-check-circle" /> Sinov darsi bepul
                  </p>
                  <p>
                    <i className="bx bx-check-circle" /> Davomiyligi{" "}
                    {DateConverter(item.duration)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="edu_btn">
        <a href={"courses"}>
          <button className="btn btn-outline btn_edu">
            barcha kurslarni ko‘rish <i className="bx bxs-right-arrow-alt" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Edu;
