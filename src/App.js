import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/signup/SignIn";
import Signup from "./components/signup/Signup";
import Todo from "./components/todo/Todo";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/todo" element={<Todo />} />
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/signin" element={<SignIn />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
