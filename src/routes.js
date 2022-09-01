import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  Home,
  AboutUs,
  Contact,
  Courses,
  Login,
  Register,
  Error,
  Cart,
} from "./pages";
import CourseDetails from "./pages/courses/CourseDetails";

const RoutesMain = () => {
  return (
    <Routes>
      {/* pubplic routes */}
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Outlet />}>
          <Route index element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's no course with such id here!</p>
              </main>
            }
          />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
