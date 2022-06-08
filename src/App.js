import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { HomeP, Courses, CoursesDetailes, ErrorItem } from "./Pages";

import "./Sass/all.scss";
import Api from "./server/Api";

function App() {
  const [corses, setCorses] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      await new Api().coursesApi("courses").then(({ data }) => setCorses(data));
    };
    return () => {
      fetch();
    };
  }, []);
  console.log(corses);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeP corses={corses} />} />
        <Route path="courses" element={<Courses corses={corses} />} />
        <Route path="courses/course/:id" element={<CoursesDetailes />} />
        <Route path="*" element={<ErrorItem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
