import "./App.css";
// import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Fastag from "./components/Fastag/Fastag";

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={"/"} element={<Fastag />} />
          <Route path={"/fastag"} element={<Fastag />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/about"} element={<About />} />
          <Route path="*" element={<Fastag />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </Router>
    // <>
    //   <NavBar />
    //   <Home />
    //   <Footer />
    // </>
  );
}

export default App;
