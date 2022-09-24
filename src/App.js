import "./App.css";
// import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, Suspense, useEffect, useState } from "react";
import Home from "./components/Home";

export const AppContext = createContext(0);

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  const resize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <AppContext.Provider value={{ width }}>
      <Router>
        <NavBar />
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            {/* <Route path={"/fastag"} element={<Fastag />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/about"} element={<About />} /> */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        {/* <Footer /> */}
      </Router>
    </AppContext.Provider>

    // <>
    //   <NavBar />
    //   <Home />
    //   <Footer />
    // </>
  );
}

export default App;
