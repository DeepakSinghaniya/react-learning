import React, { lazy, Suspense } from "react";
import { Home } from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
// import { About } from "./pages/About";
// import { Contact } from "./pages/Contact";

const About = lazy(() => {
  return import("./pages/About");
});
const Contact = lazy(() => {
  return import("./pages/Contact");
});

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/contact"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
