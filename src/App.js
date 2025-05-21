import "./App.css";
import React from "react";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Portfolio from "./component/Portfolio/Portfolio";
import Services from "./component/Services/Services";
import Resume from "./component/Resume/Resume";
import Pricing from "./component/Pricing/Pricing";
import Contact from "./component/Contact/Contact";
import Testimonials from "./component/Testimonials/Testimonials";
import Blog from "./component/Blog/Blog";
function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
