import React from "react";
import { Link } from "react-router-dom";
import CourseWithPath from "../components/CourseWithPath";
const CoursesDetailes = ({ corses }) => {
  return (
    <>
      <main className="courses">
        <div className="courses_container">
          <h1>Barcha kurslar</h1>
          <p>
            <Link to="/">
              <i className="bx bx-home" />
              Bosh Sahifa{" "}
            </Link>
            -<Link to="/courses"> Barcha kurslar </Link>- Kurs
          </p>
        </div>
      </main>
      <CourseWithPath corses={corses} />
    </>
  );
};

export default CoursesDetailes;
