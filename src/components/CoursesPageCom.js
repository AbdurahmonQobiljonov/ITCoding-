import React from "react";
import { Link } from "react-router-dom";

const CoursesPageCom = () => {
  return (
    <main className="courses">
      <div className="courses_container">
        <h1>Barcha kurslar</h1>
        <p>
          <Link to="/">
            <i className="bx bx-home" />
            Bosh Sahifa{" "}
          </Link>
          - Barcha kurslar
        </p>
      </div>
    </main>
  );
};

export default CoursesPageCom;
