import React from "react"
import myimage from "../images/img2.png"

const Profile = () => {
    return (
        <section id="profile" className="profile">

            <div >
                <img src={myimage} alt="profile pic " className="circular-image"/>

            </div>

            <div>
                <p>
                    <h4>Hi,I'm Ifeanyi Obi! 👋</h4>
                    You can call me <i>Obi-Wan-Kanobi 🚀. </i>
                    I'm a passionate software developer with Project experience in machine learning, IoT, cybersecurity, and web development.
                    I love solving problems, building innovative solutions, and pushing the boundaries of computer technology. </p>
            </div>



        </section>
    );
};

export default Profile;