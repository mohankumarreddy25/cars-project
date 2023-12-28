
import React from "react";

function Contact(){
  return(
      <div>
        <div className="contact-page">
      <h1>Contact Mahindra XUV 700</h1>
<div className="col-12 col-sm-12 col-md-12 col-lg-12">
<img className="img img-fluid" src="https://www.carlelo.com/source/Key-fact-about-Mahindra%C2%A0XUV700-Blog-2.jpg" alt="thar" />
{/* <img src={require('../ava-2.jpg')} alt="Description of the image" /> */}

</div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          If you have any questions or need more information about the Mahindra XUV 700, please feel free to contact us through the following channels:
        </p>
        <ul>
          <li>Email: contact@mahindra-xuv700.com</li>
          <li>Phone: +1-800-123-4567</li>
          <li>Address: 1234 Mahindra Lane, City, Country</li>
          
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Form</h2>
        <p>Send us a message using the form below:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
      </div>   
  )
}

export default Contact;