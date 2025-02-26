//
// import './App.css'
// import {useState,useEffect} from 'react'
// const Card = ({title , actors}) => {
//     const [count, setCount] = useState(0);
//     const [hasLiked, setHasLiked] = useState(false);
//     useEffect(() => {
//         console.log(`${title} has ${hasLiked ? '' : 'not '}been liked`)
//     })
//   return (
//       <div className= "card" >
//         <h2>{title}</h2>
//         <button onClick={ () => setCount(count+1) }>
//             { hasLiked ? '❤️' : '🤍'}
//         </button>
//       </div>
//   )
// }
// const App = () => {
//
//   return(
//
//       <div className="card-container">
//         <Card title = "Star Wars" rating={5} isCool={true} actors = {['hope', ' and ','Faith', ]}/>
//         <Card title="Avatar" />
//         <Card title="The Lion King"/>
//
//
//       </div>
//
//   )
// }
//
// export default App


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
