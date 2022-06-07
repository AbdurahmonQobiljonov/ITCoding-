import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Main = () => {
  return (
    <Carousel
      autoPlay={true}
      autoFocus={true}
      emulateTouch={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      interval={5000}
      showThumbs={false}
    >
      <main className="main">
        <div className="main_container">
          <div className="main_content">
            <div className="main_text">
              <p>ITCodding -</p>
              <p>dasturlash olamini</p>
              <p>biz bilan o‘rganing</p>
            </div>
            <button className="btn btn_main">Kursga yozilish</button>
          </div>
        </div>
      </main>
      <main className="main second">
        <div className="main_container second">
          <div className="main_content second">
            <div className="main_text">
              <p>Markaz Haqida</p>
            </div>
            <button className="btn btn_main">Batafsil ma'lumot</button>
          </div>
        </div>
      </main>
      <main className="main three">
        <div className="main_container">
          <div className="main_content">
            <div className="main_text">
              <p>Barcha Kurslar</p>
            </div>
            <button className="btn btn_main">Batafsil</button>
          </div>
        </div>
      </main>
    </Carousel>
  );
};

export default Main;
