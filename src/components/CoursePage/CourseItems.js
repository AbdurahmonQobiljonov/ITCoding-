import React from "react";
import { Link } from "react-router-dom";
import DateConverter from "../../Helper/DateConverter";

const CourseItems = ({
  courseName,
  courseImgUrl,
  courseSkills,
  courseType,
  diskription,
  duration,
  pathName,
  rate,
  students,
}) => {
  return (
    <div className="courses_main">
      <div className="courses-column">
        <div className="courses-img">
          <img src={`http://localhost:3030/images/${courseImgUrl}`} alt="" />
        </div>
        <div className="courses-info">
          <div className="course-name">{courseName}</div>

          <div className="courses-title">
            {courseSkills.map((elem, idx) => (
              <span key={elem + idx}>{elem} </span>
            ))}
          </div>

          <div className="course-teacher">
            <div className="left">
              <div className="teacher-name">
                Davomiyligi <b>{DateConverter(duration)}</b>
              </div>
            </div>
            <div className="rigth">
              <div className="student">{students} student</div>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className="chiziq-vertical"></div>
        <div className="courses-links">
          <Link to={`course/${pathName}`}>
            <div className="courses-link_2">Batafsil ko'rish</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseItems;
