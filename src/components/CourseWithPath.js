import React from "react";
import DateConverter from "../Helper/DateConverter";
import SlashDeleder from "../Helper/SlashDeleder";

const CourseWithPath = ({ corses }) => {
  const [selectedCourse, setSelectedCourse] = React.useState(null);
  const codePath = SlashDeleder(window.location.pathname).trim().split(" ")[2];

  React.useEffect(() => {
    setSelectedCourse(corses?.filter((e) => e.pathName === codePath));
  }, [codePath, corses]);
  console.log(selectedCourse);
  return (
    <div className="courssse_abouta_container">
      {selectedCourse &&
        selectedCourse.map((e, idx) => (
          <section className="corel-draw" key={idx}>
            <div className="left-side">
              <div className="corel-draw_title">{e.courseName} kursi</div>
              {/* <div className="corel-draw_teacher">
            <div className="teacher-img">
              <img src="./assets/images/teacher img.png" alt="" />
            </div>
            <div className="teacher-name">Aboos Mutalov</div>
            <div className="teacher-student">404 student</div>
            <div className="teacher-reyting">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
            (0)
          </div> */}
              <div className="corel-draw_img">
                <img
                  src={`http://localhost:3030/images/${e.courseImgUrl}`}
                  alt=""
                />
                <i className="fa-brands fa-youtube fa-4x"></i>
              </div>
              <div className="corel-text">
                <span className="corel-text_head">{e.diskription}</span>

                <span className="corel-text_disk">{e.diskription}</span>
              </div>
            </div>
            <div className="right-side">
              <div className="discount-page">
                <div className="discount-title">Kurs o'z ichiga oladi</div>
                <div className="courses-time course-item">
                  <i className="bx bx-play-circle"></i>
                  Davomiyligi {DateConverter(e.duration)}{" "}
                </div>
                <div className="full-course course-item">
                  <i className="bx bx-file"></i>Komplekt kurs
                </div>
                <div className="support course-item">
                  <i className="bx bx-headphone"></i>24/7 Ustoz yordami
                </div>
                <div className="sertificate course-item">
                  <i className="bx bx-certification"></i>Sertifikat beriladi
                </div>
                <a href="#" className="order-btn">
                  Kursga yozilish
                </a>
              </div>
              <div className="raiting-page">
                <div className="raiting-header">
                  <div className="raitings-num">0</div>
                  <div className="course-raiting">
                    <div className="raiting-icon">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                    <div className="raiting-text">
                      kursga {e.rate} % reyting berildi
                    </div>
                  </div>
                </div>
                <div className="raiting-info">
                  <div className="raiting-row">
                    <i className="bx bxs-star"></i>
                    <div className="raiting-star_num">5</div>
                    <div className="raiting-line"></div>
                    <div className="raiting-percent">100%</div>
                  </div>
                  <div className="raiting-row">
                    <i className="bx bxs-star"></i>
                    <div className="raiting-star_num">4</div>
                    <div className="raiting-line"></div>
                    <div className="raiting-percent">100%</div>
                  </div>
                  <div className="raiting-row">
                    <i className="bx bxs-star"></i>
                    <div className="raiting-star_num">3</div>
                    <div className="raiting-line"></div>
                    <div className="raiting-percent">100%</div>
                  </div>
                  <div className="raiting-row">
                    <i className="bx bxs-star"></i>
                    <div className="raiting-star_num">2</div>
                    <div className="raiting-line"></div>
                    <div className="raiting-percent">100%</div>
                  </div>
                  <div className="raiting-row">
                    <i className="bx bxs-star"></i>
                    <div className="raiting-star_num">1</div>
                    <div className="raiting-line"></div>
                    <div className="raiting-percent">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </div>
  );
};

export default CourseWithPath;
