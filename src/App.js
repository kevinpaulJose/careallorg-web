import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, Suspense, useEffect, useState } from "react";
import Home from "./components/Home";
import Apply from "./components/Apply/Apply";

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
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path="/apply/:type" element={<Apply />} />
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
