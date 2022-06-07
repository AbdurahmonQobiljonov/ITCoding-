const EduCoverter = (e) => {
  switch (true) {
    case e.it:
      return "Dasturlash";
    case e.edu:
      return "Til";

    case e.design:
      return "Dizaynerlik";

    default:
      return "Ta'lim";
  }
};

export default EduCoverter;
