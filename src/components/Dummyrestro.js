import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





export default function Dummyrestro() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
        <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
        <a href="index.jsp" className="logo d-flex align-items-center">
              <img src="assets/img/Bohfylogo.png" alt=""/>
              {/* <!--<span>Bohfy</span>--> */}
            </a>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
                <li><a className="nav-link scrollto active" href="/">Home</a></li>
                <li><a className="nav-link scrollto" href="/">About</a></li>
                <li><a className="nav-link scrollto" href="/">Products</a></li>
                <li><a className="nav-link scrollto" href="/">Services</a></li>
                <li><a className="nav-link scrollto" href="/">Contact</a></li>
                
              </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
            <a href="#g" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
      </nav>
 <section id="portfolio" className="portfolio" > 
      <header className="section-header">
                <p className="mt-5">Kitchen King Restaurant</p>
                <h2 className="mt-5">To get exciting offer, download our app and enjoy the benefits.</h2>
                
              </header>

<div className="container justify-content-center" data-aos="fade-up">
     <Swiper 
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={1}
     navigation
     pagination={{clickable:true}}
     scrollbar={{draggable:true}}
     onSwiper={(swiper)=> console.log(swiper)}
     onSlideChange={()=> console.log('side change')}
    >
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/portfolio/dummy1.jpeg" alt="dummy1"/></SwiperSlide>
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/portfolio/dummy2.jpeg" alt="dummy1"/></SwiperSlide>
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/portfolio/dummy3.jpeg" alt="dummy1"/></SwiperSlide>
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/portfolio/dummy1.jpeg" alt="dummy1"/></SwiperSlide>
     </Swiper>
     </div>
    </section>
      <section className="bgc">
      <div className="client-logos my-5" id="download">
                        <div className="container text-center">
                        <h2>Download our app and be a part of the revolution</h2>
                        <div className="my-4">
                        <a href="/" className="btn btn-light mr-2"><img src="assets/img/appleicon.png" alt="icon"/> App Store</a>
                        <a href="/" className="btn btn-light"><img src="assets/img/playicon.png" alt="icon"/> Google play</a>
                        </div>
                        </div>
                    </div> 
                    </section>
  <footer id="footer" className="footer">


    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/Bohfylogo.png" alt=""/>
              {/* <!--<span>Bohfy</span>--> */}
            </a>
            <p>We are a next-gen SaaS based solution provider with a vision to revolutionise the restaurant industry by functioning as a Guest-Magnet and seamlessly offering Restaurant Management System. We help Restaurants discover thier new top line.</p>
            <div className="social-links mt-3">
              <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="/" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>
              <a href="/" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/">Terms of service</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="/">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a className="nav-link scrollto" href="#products">Restaurant Management System</a></li>
              <li><i className="bi bi-chevron-right"></i> <a className="nav-link scrollto" href="#products">Guest Engagement Magnet System</a></li>
              <li><i className="bi bi-chevron-right"></i> <a className="nav-link scrollto" href="#products">Growth Mapping Engine</a></li>
              <li><i className="bi bi-chevron-right"></i> <a className="nav-link scrollto" href="#products">Contactless QR-based Menu</a></li>
              <li><i className="bi bi-chevron-right"></i> <a className="nav-link scrollto" href="#products">BOHFY social</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Gurgaon <br/>
              Haryana, 110038<br/>
              India <br/><br/>
              <strong>Email:</strong> contact@bohfy.com<br/></p>
            

          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Bohfy</span></strong>. All Rights Reserved
      </div>
      <div className="credits">

        Designed by <a href="/">Team Bohfy</a>
      </div>
    </div>
   </footer> 
    </>

    )
}