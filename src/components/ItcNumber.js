import React from 'react';
import CountUps from '../Helper/CountUp';
const ItcNumber = () => {
  return (
    <section className="itnumbers">
      <div className="itnumbers_container">
        <div className="itnumbers_description">
          <div className="itnumbers_text text_header">
            <h2>ITCODDING raqamlarda</h2>
          </div>

          <div className="itnumbers_box">
            <div className="itnumbers_box_main">
              <h3>{CountUps(2000)}</h3>
              <p>O‘quvchilar tanlovi</p>
            </div>
            <div className="itnumbers_box_main">
              <h3>{CountUps(50)}</h3>
              <p>Xalqaro sertifikat egalari</p>
            </div>
            <div className="itnumbers_box_main">
              <h3>{CountUps(30)}</h3>
              <p>Tajribali o‘qituvchilar</p>
            </div>
            <div className="itnumbers_box_main">
              <h3>{CountUps(100)}</h3>
              <p>Real loyihalar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItcNumber;
