import React from "react";
const Charackter = () => {
  let users = [
    {
      firstName: "Asrbek",
      secondName: "Suvanov",
      skill: "Full Stack kursi o‘qituvchisi",
      userImg: "../../../img/122.jfif",
      description:
        "3 yildan ko‘proq Full Stack kurslaridan o‘quvchilarga dars berib kelmoqda",
      email: "itcodding@gmail.com",
      phoneN: "+99890 517-30-07",
    },
    {
      firstName: "Abduvaliyev",
      secondName: "Asadillo",
      userImg: "../../../img/122.jfif",
      skill: "Front-end kursi o‘qituvchisi",
      description:
        "3 yildan ko‘proq Frontend kurslaridan o‘quvchilarga dars berib kelmoqda",
      email: "itcodding@gmail.com",
      phoneN: "+99890 777-77-77",
    },
    {
      firstName: "Begmatov",
      secondName: "Bekzod",
      skill: "WEB & UX/UI dizayner",
      userImg: "../../../img/122.jfif",
      description:
        "1 yildan ko‘proq Web dizayn hamda UX/UI dizayn sohasida real loyihalar ustida ishlab kelmoqda",
      email: "itcodding@gmail.com",
      phoneN: "+99890 777-77-77",
    },
    {
      firstName: "Qobiljonov",
      secondName: "Abdurahmon",
      skill: "Js engineer kursi o‘qituvchisi",
      userImg: "../../../img/122.jfif",
      description:
        "3 yildan ko‘proq Frontend kurslaridan o‘quvchilarga dars berib kelmoqda",
      email: "itcodding@gmail.com",
      phoneN: "+99890 777-77-77",
    },
  ];

  return (
    <section className="character">
      <div className="character_container">
        <h2 className="text_header">Kurs Mentorlari</h2>

        <div className="character_box ">
          {users.map((item, idx) => (
            // <Slider {...settings}>
            <div className="character_carts" key={item + idx}>
              <div className="character_carts_img">
                <img src={item.userImg} alt="" />
              </div>
              <div className="character_carts_text">
                <h3 className="character_carts_name">
                  {item.firstName} <br /> {item.secondName}
                </h3>
                <p className="character_carts_skill">{item.skill}</p>
                <p className="character_carts_skillMain">{item.description}</p>
                <p className="character_carts_email">{item.email}</p>
              </div>
              <div className="character_overlay">
                <div className="character_social">
                  <div className="character_social_icon">
                    <i className="bx bxl-telegram"></i>
                    <a
                      href="https://github.com/AsrbekCoder"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                    <i className="bx bxl-facebook-circle"></i>
                  </div>
                  <div className="character_social_number">
                    <i className="bx bxs-phone"></i>
                    <a href={`tel:${item.phoneN}`}>{item.phoneN}</a>
                  </div>
                </div>
              </div>
            </div>
            // </Slider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Charackter;
