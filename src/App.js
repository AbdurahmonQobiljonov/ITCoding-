import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  HomeP,
  Courses,
  CoursesDetailes,
  ErrorItem,
  Register,
  Login,
} from "./Pages";

import "./Sass/all.scss";
import Api from "./server/Api";

function App() {
  const [corses, setCorses] = React.useState([]);

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
    return () => {
      fetch();
    };
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomeP corses={corses} />} />
        <Route path="courses" element={<Courses corses={corses} />} />
        <Route
          path="courses/course/:id"
          element={<CoursesDetailes corses={corses} />}
        />
        <Route path="*" element={<ErrorItem />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
