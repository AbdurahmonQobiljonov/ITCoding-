import React from "react";
import { Link } from "react-router-dom";

const Edu = () => {
  return (
    <section className="edu_container">
      <div className="text_header">
        <h2>bizda mavjud kurslar</h2>
      </div>
      <div className="edu_box">
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/12.png"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Frontend kursi</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> Dasturlash kursi
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 4 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/15.jfif"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Backend kursi</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> Dasturlash kursi
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>

              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 3 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/13.png"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>IOS Development</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> IOS’ni o‘rganish
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 2 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/14.jfif"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Python Backend</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> Backend kursi
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 6 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/java.jfif"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Java Backend</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> Backend kursi
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 4 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/android.jfif"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Android Development</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" />
                Android OS’ni o‘rganish
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 4 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/found.jfif"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Foundation kursi</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> Dasturlashni kursi
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 6 oy
              </p>
            </div>
          </div>
        </div>
        <div className="edu_types">
          <div className="edu_types_header">
            <img src={"../../../img/django.jfif"} alt="" />
          </div>
          <div className="edu_types_main">
            <h4>Django Development</h4>
            <div className="edu_types_methods">
              <p>
                <i className="bx bx-check-circle" /> Dasturlash kursi
              </p>
              <p>
                <i className="bx bx-check-circle" /> Sinov darsi bepul
              </p>
              <p>
                <i className="bx bx-check-circle" /> Davomiyligi 6 oy
              </p>
            </div>
          </div>
        </div>
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
