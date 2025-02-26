

import React from "react";
import Navbar from "./component/Navbar.jsx";
import About from "./component/About.jsx";
import Projects from "./component/Project.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";
import "./index.css";
import Profile from "./component/Profile.jsx";


function App() {
    return (
        <div>
            <Navbar />
            <Profile/>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>

    );
}

export default App;
