import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default function Home() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <div>
        {/* <header id="header" className="header fixed-top header-scrolled">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      
            <a href="index.jsp" className="logo d-flex align-items-center">
              <img src="assets/img/Bohfylogo.png" alt=""/>
              {/* <!--<span>Bohfy</span>--> */}
            {/* </a>
      
            <nav id="navbar" className={hamToggle ? "navbar bi bi-list mobile-nav-toggle" : "navbar"}>
              <ul>
                <li><a className="nav-link scrollto active" href="/">Home</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#products">Products</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                <li><a className="getstarted" href="Membership.jsp">Get Membership</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle">
                <a href='#'  onClick="() => setHamToggle(!hamToggle)"></a>
              </i>
            </nav>
      
          </div>
        </header>  */}

        {/* Testing nav */}




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
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#products">Products</a></li>
                <li><a className="nav-link scrollto" href="#services">Services</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                
              </ul>
        </div>
        {/* hamburget menu start  */}
        <div className="hamburger-menu">
            <a href="#g" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        
      </nav>

        {/* Testing nav ends */}
        <section id="hero" className="hero d-flex align-items-center">
      
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">India's first peer to peer de-centralised distribution platform revolutionizing Restaurant Industry.</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">Join the club! Over 6500+ blockchain enthusiasts have already signed up and claimed their promotional  BohfyX </h2>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <a href="/" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Get BohfyX now</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                <img src="assets/img/hero-img1.png" className="img-fluid" alt=""/>
              </div>
            </div>
          </div>
      
        </section> 
      <main id="main">
          <section id="about" className="about">
      
            <div className="container" data-aos="fade-up">
              <div className="row gx-0">
      
                <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                  <div className="content">
                    <h3>Who We Are</h3>
                    <h2>We are a team of determined individuals who are passionate about solving the pain points of Restaurants.</h2>
                    <p>
                       Bohfy is a one-stop solution for all the Restaurants loopholes which is driving its business down. Bohfy's win-win-win strategy sets them apart.
                    </p>
                    <div className="text-center text-lg-start">
                      <a href="#products" className="btn-read-more scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Read More</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
      
                 <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                    <lottie-player src="assets/json/Team.json" className="img-fluid" background="transparent"  speed="1"  style={{width: '100%', height: 'auto'}} loop autoplay>
                    </lottie-player> 
                </div> 
      
              </div>
            </div>
      
           </section>
      
          
          <section id="products" className="values">
      
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>Our Impacts</h2>
                <p>Innovative products which ensures exponential growth</p>
              </header>
      
              <div className="row">
      
                <div className="col-lg-4">
                  <div className="box" data-aos="fade-up" data-aos-delay="200">
                    <img src="assets/img/values-1.png" className="img-fluid" alt=""/>
                    <h3>Restaurant Management System</h3>
                    <p>One stop solution to solve all your restaurant woes.</p>
                  </div>
                </div>
      
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="fade-up" data-aos-delay="400">
                    <img src="assets/img/values-2.png" className="img-fluid" alt=""/>
                    <h3>Guest Engagement & Magnet System</h3>
                    <p>Let GEMS bring more customers to serve, while you focus solely on food and service</p>
                  </div>
                </div>
      
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="fade-up" data-aos-delay="600">
                    <img src="assets/img/values-3.png" className="img-fluid" alt=""/>
                    <h3>AI-enabled Growth Mapping Engine</h3>
                    <p>Helps you Introspect and tide over all the hurdles to take smart decisions. </p>
                  </div>
                </div>
      
              </div>
      
            </div>
      
           </section>{/*<!-- End Values Section --> */}
      
          {/* <!-- ======= Counts Section ======= --> */}
          <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
      
              <div className="row gy-4">
      
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-emoji-smile"></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="0" data-purecounter-duration="1" className="purecounter">28</span>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}}></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter">2</span>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-headset" style={{color: '#15be56'}}></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" className="purecounter">100</span>
                      <p>Hours Of Support</p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-people" style={{color: '#bb0852'}}></i>
                    <div>
                      <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter">5</span>
                      <p>Hard Workers</p>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
           </section> {/*<!-- End Counts Section --> */}
      
          {/* <!-- ======= Features Section ======= --> */}
          <section id="services" className="features">
      
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>Solutions</h2>
                <p>Obstacles we detach using our cutting-edge tech</p>
              </header>
      
              <div className="row">
      
                <div className="col-lg-6">
                  <img src="assets/img/features.png" className="img-fluid" alt=""/>
                </div>
      
                <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                  <div className="row align-self-center gy-4">
      
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check"></i>
                        <h3>Contactless-Ordering</h3>
                      </div>
                    </div>
      
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check"></i>
                        <h3>Vacant to Housefull</h3>
                      </div>
                    </div>
      
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check"></i>
                        <h3>Engaging waiting period</h3>
                      </div>
                    </div>
      
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check"></i>
                        <h3>Seamless KOT</h3>
                      </div>
                    </div>
      
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check"></i>
                        <h3>Decisive Reports</h3>
                      </div>
                    </div>
      
                    <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                      <div className="feature-box d-flex align-items-center">
                        <i className="bi bi-check"></i>
                        <h3>Efficient Dine-in Service</h3>
                      </div>
                    </div>
      
                  </div>
                </div>
      
               </div> {/*<!-- / row --> */}
      
              {/* <!-- Feature Tabs --> */}
              <div className="row feture-tabs" data-aos="fade-up">
                <div className="col-lg-6">
                  <h3>What's in it for you?</h3>
      
                  {/* <!-- Tabs --> */}
                  <ul className="nav nav-pills mb-3">
                    <li>
                      <a className="nav-link active" data-bs-toggle="pill" href="#tab1">Restaurant</a>
                    </li>
                    <li>
                      <a className="nav-link" data-bs-toggle="pill" href="#tab2">Customer</a>
                    </li>
                    <li>
                      <a className="nav-link" data-bs-toggle="pill" href="#tab3">Investor</a>
                    </li>
                   </ul>{/*<!-- End Tabs --> */}
      
                  {/* <!-- Tab Content --> */}
                  <div className="tab-content">
      
                    <div className="tab-pane fade show active" id="tab1">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2"></i>
                        <h4>Discover your new top-line.</h4>
                      </div>
                      <p>Help you run your restaurant with greater efficiency and serve your customers with improved standards. We will lead you to your never before earned profit. </p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2"></i>
                        <h4>Grow with BOHFY</h4>
                      </div>
                      <p>Personalized reports and suggestions from which you can take insights, implement it and grow with us. </p>
                    </div> {/* <!-- End Tab 1 Content --> */}
      
                    <div className="tab-pane fade show" id="tab2">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2"></i>
                        <h4>Contactless digital dining</h4>
                      </div>
                      <p>Adopting the new normal, we ensure you a complete contactless transition time from placing an order to check-out.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2"></i>
                        <h4>Chill over food</h4>
                      </div>
                      <p>A good dining experience is not just limited to food, there is much more to it.The idea is to encash the time when order is placed to delivery and provide them with a gamified experience </p>
                     </div>{/*<!-- End Tab 2 Content --> */}
      
                    <div className="tab-pane fade show" id="tab3">
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2"></i>
                        <h4>Young and Passionate Team</h4>
                      </div>
                      <p>Join the under 25-aged team while building the rocket, so that we fly together to greater heights.</p>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check2"></i>
                        <h4>Your Experience, Our Expertise</h4>
                      </div>
                      <p></p>
                     </div>{/*<!--End Tab 3 Content--> */}
      
                  </div>
      
                </div>
      
                <div className="col-lg-6">
                  <img src="assets/img/features-2.png" className="img-fluid" alt=""/>
                </div>
      
               </div> {/*<!-- End Feature Tabs --> */}
      
              {/* <!-- Feature Icons --> */}
              <div className="row feature-icons" data-aos="fade-up">
                <h3>What makes us stand-out?</h3>
      
                <div className="row">
      
                  <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
                    <img src="assets/img/features-3.png" className="img-fluid p-4" alt=""/>
                  </div>
      
                  <div className="col-xl-8 d-flex content">
                    <div className="row align-self-center gy-4">
      
                      <div className="col-md-6 icon-box" data-aos="fade-up">
                        <i className="ri-line-chart-line"></i>
                        <div>
                          <h4>Win-Win-Win Model</h4>
                          <p>We ensure Customer pay less while Restaurants earns more.</p>
                        </div>
                      </div>
      
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <i className="ri-stack-line"></i>
                        <div>
                          <h4>Gamified Dining Experience</h4>
                          <p>50% chances of winning and getting your food free each time you play during your Dine-in.</p>
                        </div>
                      </div>
      
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <i className="ri-brush-4-line"></i>
                        <div>
                          <h4>Increased Footfall</h4>
                          <p>If you want to collect coins,trust us! we are the magnets.</p>
                        </div>
                      </div>
      
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <i className="ri-magic-line"></i>
                        <div>
                          <h4>One-Tap Bill split</h4>
                          <p>Pay only for what you eat. Teetotaller in a alcoholic group can relate. </p>
                        </div>
                      </div>
      
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                        <i className="ri-command-line"></i>
                        <div>
                          <h4>Personalized Live Offers</h4>
                          <p>Get live offers on specidfic foods while you are dining-in</p>
                        </div>
                      </div>
      
                      <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                        <i className="ri-radar-line"></i>
                        <div>
                          <h4>Diner to Diner Encrypted Chatting Experience</h4>
                          <p>Ever seen a beautiful girl/handsome boy in a bar and thought of approaching?Well..BOHFY social can be your trump card. </p>
                        </div>
                      </div>
      
                    </div>
                  </div>
      
                </div>
      
               </div>{/*<!-- End Feature Icons --> */}
      
            </div>
      
          </section>  {/*<!-- End Features Section --> */}
      
      
          {/* <!-- ======= Pricing Section ======= --> */}
          <section id="pricing" className="pricing">
      
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>Pricing</h2>
                <p>Check our Pricing</p>
              </header>
      
              <div className="row gy-4" data-aos="fade-left">
      
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                  <div className="box">
                    <h3 style={{color: '#07d5c0'}}>Quaterly Plan</h3>
                    <div className="price"><sup>INR</sup>5000<span> /3 mo</span> </div>
                    <img src="assets/img/pricing-free.png" className="img-fluid" alt=""/>
                    <ul>
                      <li>Restaurant Management System</li>
                      <li>Guest Magnet System</li>
                      <li>QR-based Ordering</li>
                      <li className="na">Growth Mapping Engine</li>
                      <li className="na">Free month</li>
                    </ul>
                    <a href="/" className="btn-buy">Get Beta Access</a>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                  <div className="box">
                    <span className="featured">Featured</span>
                    <h3 style={{color: '#65c600'}}>Half-Yearly Plan</h3>
                     <div className="price"><sup>INR</sup>9000<span> /6 mos</span></div>
                    <img src="assets/img/pricing-starter.png" className="img-fluid" alt=""/>
                    <ul>
                        <li>Restaurant Management System</li>
                        <li>Guest Magnet System</li>
                        <li>QR-based Ordering</li>
                      <li>Growth Mapping Engine</li>
                      <li className="na">Free month</li>
                    </ul>
                    <a href="/" className="btn-buy">Get Beta Access</a>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                  <div className="box">
                    <h3 style={{color: '#ff901c'}}>Yearly Plan</h3>
                    <div className="price"><sup>INR</sup>17000<span> /12 mo</span></div>
                    <img src="assets/img/pricing-business.png" className="img-fluid" alt=""/>
                    <ul>
                        <li>Restaurant Management System</li>
                      <li>Guest Magnet System</li>
                      <li>QR-based Ordering</li>
                        <li>Growth Mapping Engine</li>
                        <li>1-extra month free</li>
                    </ul>
                    <a href="/" className="btn-buy">Get Beta Access</a>
                  </div>
                </div>
      
                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <div className="box">
                    <h3 style={{color: '#ff0071'}}>Premium Plan</h3>
                    <div className="price"><sup>INR</sup>20000<span> /12 mo</span></div>
                    <img src="assets/img/pricing-ultimate.png" className="img-fluid" alt=""/>
                    <ul>
                        <li>Restaurant Management System</li>
                        <li>Guest Magnet System</li>
                        <li>QR-based Ordering</li>
                        <li>Growth Mapping Engine</li>
                        <li>2-extra month free</li>
                    </ul>
                    <a href="getAccess.jsp" className="btn-buy">Get Beta Access</a>
                  </div>
                </div>
      
              </div>
      
            </div>
      
           </section> {/*<!-- End Pricing Section --> */}
      
    
      
          {/* <!-- ======= Team Section ======= --> */}
          <section id="team" className="team">
      
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>Team</h2>
                <p>Our hard working team</p>
              </header>
      
              <div className="row gy-4">
      
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/img/team/white.png" className="img-fluid" alt=""/>
                      <div className="social">
                        <a href="/" title="Told you! Can't reveal my identity now...sorry"><i className="bi bi-twitter"></i></a>
                        <a href="/"><i className="bi bi-facebook"></i></a>
                        <a href="/"><i className="bi bi-instagram"></i></a>
                        <a href="/"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Alpha</h4>
                      <span>Co-creator</span>
                      <p>A fun-loving person with a goal to empower hoteliers. Literally he can sell refrigerators to Eskimos.He is also an awesome Orator and Influencer.</p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/img/team/red.png" className="img-fluid" alt=""/>
                      <div className="social">
                        <a href="/"><i className="bi bi-twitter"></i></a>
                        <a href="/"><i className="bi bi-facebook"></i></a>
                        <a href="/"><i className="bi bi-instagram"></i></a>
                        <a href="/"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Beta</h4>
                      <span>Co-creator</span>
                      <p>Being a strong believer of Innovation, he is helping the team in conceptualizing and test Marketing of our awesome product. He can solve Rubik's cube in 1min.</p>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/img/team/blue.png" className="img-fluid" alt=""/>
                      <div className="social">
                        <a href="/"><i className="bi bi-twitter"></i></a>
                        <a href="/"><i className="bi bi-facebook"></i></a>
                        <a href="/"><i className="bi bi-instagram"></i></a>
                        <a href="/"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Gama</h4>
                      <span>Co-creator</span>
                      <p>A guy who swears by coding. His humbleness and dedication has always helped keep the team motivated. In his free time, he can been seen clicking selfies!</p>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>
      
           </section> {/*<!-- End Team Section --> */}
      
          {/* <!-- ======= Clients Section ======= --> */}
          <section id="clients" className="clients">
      
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>Our Clients</h2>
                {/* <!--  <p>Temporibus omnis officia</p>--> */}
              </header>
      
              <div className="clients-slider swiper-container">
              <Swiper 
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={3}
  
     pagination={{clickable:true}}
  
     onSwiper={(swiper)=> console.log(swiper)}
     onSlideChange={()=> console.log('side change')}
    >
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/clients/soon.PNG" alt="dummy1"/></SwiperSlide>
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/clients/soon.PNG" alt="dummy1"/></SwiperSlide>
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/clients/soon.PNG" alt="dummy1"/></SwiperSlide>
      <SwiperSlide className="center"><img className="img-fluid" src="assets/img/clients/soon.PNG" alt="dummy1"/></SwiperSlide>
     </Swiper>
            </div>
            </div>
      
           </section> {/*<!-- End Clients Section --> */}
      
      
          {/* <!-- ======= Contact Section ======= --> */}
          <section id="contact" className="contact">
      
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </header>
      
              <div className="row gy-4">
      
                <div className="col-lg-6">
      
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-geo-alt"></i>
                        <h3>Address</h3>
                        <p>Gurgaon <br/> Haryana, 100021</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-cup"></i>
                        <h3>Coffee with BOHFY</h3>
                        <p>Fill out the form and someone from our team will get back to you shortly.If we talk business then bill is on us.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-envelope"></i>
                        <h3>Email Us</h3>
                        <p>contact@bohfy.com<br/>help@bohfy.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box">
                        <i className="bi bi-clock"></i>
                        <h3>Open Hours</h3>
                        <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                      </div>
                    </div>
                  </div>
      
                </div>
      
                <div className="col-lg-6">
                  <form action="https://usebasin.com/f/82f076a8b796" method="post" className="php-email-form">
                    <div className="row gy-4">
      
                      <div className="col-md-6">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                      </div>
      
                      <div className="col-md-6 ">
                        <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
                      </div>
      
                      <div className="col-md-12">
                        <input type="text" className="form-control" name="Restaurant Name" placeholder="Restaurant Name" required/>
                      </div>
      
                      <div className="col-md-12">
                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                      </div>
      
                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
      
                        <button type="submit">Send Message</button>
                      </div>
      
                    </div>
                  </form>
      
                </div>
    
      
              </div>
      
            </div>
      
           </section> {/*<!-- End Contact Section --> */}
           </main>
  <footer id="footer" className="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>And do not worry, we hate spam too! You can unsubcribe at anytime.</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

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

  <a href="/" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </div> 

  
    )
}