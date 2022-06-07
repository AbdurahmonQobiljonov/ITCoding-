import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomeP, Courses } from "./Pages";

import "./Sass/all.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeP />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
