import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import './Contact.css';
const Contact=()=>{
    return(
        <div id="maincons">
            

            <center>
                    <p className="parts">Join us at:</p>
                    <p className="paras"><FaFacebook/>&emsp;<FaLinkedin/>&emsp;<FaTwitterSquare/>&emsp;<FaWhatsappSquare/></p>
                    <p>Or Call Us At:</p>
                    <p><b>+111-245647643, +111-43566557847, +111-64642564764</b></p>
            </center>
            <br/>
            <div className="parttwo">
                <h1>Get inspired Weekly</h1>
                <p>Sign into our Weekly newsletter</p>
                <br/>
                <p className="newsletter">Signing Up into our newletter will help you stay updated about all our upcoming internship programs so that
                    you can utilise your time in learning skills and implementing them to create great websites and application.
                    Newsletter will also help you to stay updated about all your various internal programs that will not only help 
                    you to land up a good job but also in bagging the best positions in outstanding companies.
                </p>
                <label className="enters">Enter Your Email:</label>
                <br/>
                <input type="email" placeholder="abc@gmail.com" className="inputs"></input>
                <button id="buttn">Sign Up</button>
            </div>
            <a href="#home" className="goback"><FaStepBackward/></a>
            <center className="copyright">Copyright By Tarini, 2021</center>
        </div>
    )
}
export default Contact;