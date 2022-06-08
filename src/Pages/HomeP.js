import {
  ItcNumber,
  Main,
  About,
  Edu,
  Contact,
  Charackter,
} from "../components";
const HomeP = ({ corses }) => {
  return (
    <>
      <Main />
      <div id="about"></div>
      <About />
      <ItcNumber />
      <Edu corses={corses} />
      <Contact />
      <Charackter />
    </>
  );
};

export default HomeP;
