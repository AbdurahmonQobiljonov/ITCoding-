import React from "react";
import Api from "../server/Api";
import CourseItems from "./CourseItems";

const CoursesPageCom = () => {
  const [first, setFirst] = React.useState(false);
  const [corses, setCorses] = React.useState([]);
  const [filterCorses, setFilterCorses] = React.useState("");

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

  const coursesFiltered = corses.filter((item) =>
    item.courseName.toLowerCase().includes(filterCorses.toLocaleLowerCase())
  );
  return (
    <div className="courses_type_container">
      <div className="main-hero">
        <div
          className={
            !first
              ? "type-of_search menuList"
              : "type-of_search menuList active"
          }
        >
          <div
            className="x-icon active"
            onClick={() => setFirst(false)}
            id="x-icon"
          >
            <i className="bx bx-x"></i>
          </div>
          <div className="type-search_column">
            <div className="type-search_header">
              <h3 className="type-search_title">Filterlab qidirish</h3>
            </div>
            <div className="type-search_content">
              <select name="kurs" id="" className="">
                <option value="tanlang">Tanlang</option>
                <option value="topKurslar">Top kurslar</option>
                <option value="yangiKurslar">Yangi kurslar</option>
              </select>
            </div>
          </div>
          <hr className="hr" />
          <div className="type-search_column">
            <div className="type-search_header">
              <h3 className="type-search_title">Narxlar bo'yicha</h3>
            </div>
            <div className="type-search_content">
              <select name="kurs" id="" className="">
                <option value="tanlang">Barchasi</option>
                <option value="topKurslar">Bepul</option>
                <option value="yangiKurslar">Premium</option>
              </select>
            </div>
          </div>
          <hr className="hr" />
          <div className="type-search_column">
            <div className="type-search_header">
              <h3 className="type-search_title">Kategoriyalar</h3>
            </div>
            <div className="type-search_content">
              <select name="kurs" id="" className="">
                <option value="tanlang">Tanlang</option>
                <option value="topKurslar">Top kurslar</option>
                <option value="yangiKurslar">Yangi kurslar</option>
              </select>
            </div>
          </div>
          <hr className="hr" />
          <div className="type-search_column">
            <div className="type-search_header">
              <h3 className="type-search_title">Level</h3>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="type-search_content">
              <select name="kurs" id="" className="">
                <option value="tanlang">Tanlang</option>
                <option value="topKurslar">Top kurslar</option>
                <option value="yangiKurslar">Yangi kurslar</option>
              </select>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="header-search">
            <button
              className="btn btn_filter"
              onClick={() => setFirst(() => !first)}
            >
              <i className="bx bx-filter"></i>
              <p className="filter">Filter</p>
            </button>
            <div className="input-search">
              <div className="search_input">
                <div className="search__input-row">
                  <i className="bx bx-search-alt-2"></i>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Saytdan qidirish..."
                    value={filterCorses}
                    onChange={(e) => setFilterCorses(e.target.value)}
                  />
                </div>
                <button href="#" className="btn btn_search">
                  Qidirish
                </button>
              </div>
            </div>
          </div>

          <div className="courses-div">
            {coursesFiltered.length > 0 ? (
              coursesFiltered.map((item, idx) => (
                <CourseItems {...item} key={idx * 21} />
              ))
            ) : (
              <div className="courses_main">
                <div className="courses-column col_not">
                  <div className="courses-img_not">
                    <i className="bx bx-image"></i>
                  </div>
                  <div className="not_text">Ma'lumotlar topilmadi</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPageCom;
