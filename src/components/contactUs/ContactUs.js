import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <div className="contactUs-main">
      <div className="aboutme">
          <h3>Contact Us</h3>
          <p>
            <strong>Email : </strong> abc@gmail.com
          </p>
          <p>
            <strong>Address : </strong> 16/1 Ganesh Chandra Avenue,
            Kolkata-700013
          </p>
          <p>033-40-550-550 (Mon - Sat)
From 10:00 AM To 5:00 PM</p>
<p className="covid-para">Want to know current covid 19 report of INDIA !!</p>
<p><strong>Click Below</strong></p>
<button className="buttton">
<a className="anchor-covid" href="https://covid-19-xi-one.vercel.app/">  Covid</a>
</button>
        </div>
           {/* <div className="covid-button">
               
               </div> */}
        <div className="contactUs-container">
          <h3 className="contactus-sechead">Send Some query</h3>
          <input className="contactusInput" placeholder="Enter your name" />
          <input className="contactusInput" placeholder="your email" />
          <textarea className="contactusInput" placeholder="query" cols="100" rows="100"></textarea>
          <button className="contactus-button">SUBMIT</button>
        </div>
       
      </div>
    </div>
  );
}

export default ContactUs;
