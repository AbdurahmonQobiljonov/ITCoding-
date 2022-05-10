const About = () => {
  return (
    <section className="about_container" id="aboutContainer">
      <div className="about_content">
        <div className="about_content-text">
          <h1 className="text_header">ITCODDING qanday o‘quv markaz</h1>
          <p>
            ITCODDING - bu onlayn va oflayn ta’lim platformasi. Biz IT olamining yetakchi mutaxassislari jamlangan o‘quv markazimiz.
            Markazimizda dasturlash bilan birga ingliz tili fanidan ham bir qancha kuchli kurslardan dars beriladi. Kurs davomida real
            loyihalar ustida ishlash, stajirovka va iqtidorli o‘quvchilarimizni ishga joylashish bo'yicha ham ishlar yo‘lga qo‘yilgan.
          </p>
        </div>

        <div className="about_content-video">
          <video src={"../../../img/iTcodding.mp4"} autoPlay muted loop></video>
        </div>
      </div>
    </section>
  );
};

export default About;
