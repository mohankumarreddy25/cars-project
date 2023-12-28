import React from "react";
import { useNavigate } from "react-router-dom"; 
// import { Route } from 'react-router-dom';
function Services(){
  const navigate=useNavigate();
    return(
      //   <div>
      //       {/* <h1>Welcome to Services</h1> */}
      //       {/* <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/gallery/xuv700/photos/popup-images/big10.jpg?rev=d7d74571b02343c9bee6fccbe1010a62" alt="mahindra" /> */}
      //       <div className="service-page">
      // <h1>Services Offered by Mahindra</h1>

      // <div className="service">
      //   <h2>1. Vehicle Sales</h2>
      //   <p>
      //     Mahindra offers a wide range of vehicles, including SUVs, trucks, and more. Explore our collection of high-quality vehicles designed to meet your specific needs.
      //   </p>
      //   <img src="https://www.cartoq.com/wp-content/uploads/2022/10/xuv700-interior-customised-featured.jpg" alt="Vehicle Sales" />
      // </div>

      // <div className="service">
      //   <h2>2. Vehicle Servicing and Maintenance</h2>
      //   <p>
      //     Our service centers provide top-notch maintenance and repair services for your Mahindra vehicles. Keep your vehicle running smoothly with our expert technicians.
      //   </p>
      //   <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/custom-drive-modes-feature.jpg?h=490&w=1171&rev=02a41be441ce4200a4a2e1419428c2cd" alt="Vehicle Servicing and Maintenance" />
      // </div>
      //   </div>
      //   </div>
      <div>
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Mahindra XUV700 Service</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
        </ul>
    </div>
</nav> */}

{/* <!-- Hero section --> */}
<div class="container-fluid hero">
    <div class="row">
        <div class="col-md-6">
            <h1>Welcome to Mahindra XUV700 Service Center</h1>
            <p>Your trusted partner for XUV700 maintenance and repairs.</p>
            <button className="btn btn-primary" onClick={()=>{navigate("/Contact")}}>Contact Us</button>

        </div>
        <div class="col-md-6">
            {/* <!-- Add an image of Mahindra XUV700 here --> */}
            <img src="https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/features-and-specifications/xuv-700/custom-drive-modes-feature.jpg?h=490&w=1171&rev=02a41be441ce4200a4a2e1419428c2cd" alt="Mahindra XUV700" class="img-fluid"/>
        </div>
    </div>
</div>

{/* <!-- Services section --> */}
<div class="container" id="services">
    <h2 class="mt-5">Our Services</h2>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <img src="https://www.rushlane.com/wp-content/uploads/2021/12/mahindra-xuv700-smart-ax7-variant-launch.jpeg" class="card-img-top" alt="Service 1"/>
                <div class="card-body">
                    <h5 class="card-title">Routine Maintenance</h5>
                    <p class="card-text">Keep your XUV700 in top condition with regular maintenance.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://www.rushlane.com/wp-content/uploads/2021/09/mahindra-xuv700-colours.jpg" class="card-img-top" alt="Service 2"/>
                <div class="card-body">
                    <h5 class="card-title">Repairs and Diagnostics</h5>
                    <p class="card-text">We diagnose and fix issues to ensure your XUV700 runs smoothly.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <img src="https://img.indianautosblog.com/2017/03/2017-Ssangyong-Rexton-Mahindra-XUV700-interior-unveiled.jpg" class="card-img-top" alt="Service 3"/>
                <div class="card-body">
                    <h5 class="card-title">Custom Upgrades</h5>
                    <p class="card-text">Enhance your XUV700 with custom upgrades and accessories.</p>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Pricing section --> */}
<div class="container" id="pricing">
    <h2 class="mt-5">Pricing</h2>
    <p>Our pricing is competitive and transparent. Contact us for a detailed quote.</p>
</div>

{/* <!-- Contact section with a response form --> */}
{/* <div class="container" id="contact">
    <h2 class="mt-5">Contact Us</h2>
    <p>If you have any questions or need to schedule a service, please get in touch with us.</p>

    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name"/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Your Email"/>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form> */}
{/* </div> */}
      </div>
    )
}
export default Services;