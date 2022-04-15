import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'


export default class extends Component {
    render() {
        return (
            <div className='Home  container'>
                <br/>
                 <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="100">
                            <img src="/images/sula-feat.png" class="d-block w-100 h-80" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="slogan" >An ideal world. If only for a night </h5>
                                <p class="desription"> A resort is a place used for vacation, relaxation or as a daytime getaway. While this can be a single
                                     structure such as a hotel, it also can be a whole island or a ship at sea</p>
                                     
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/image-a.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="slogan">Check into another world.</h5>
                                <p class="desription"> Holiday and event weekends are subject to high season rates.</p>
                            
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/images/image -b.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="slogan">Designed for natural living.</h5>
                                <p class="desription">“Sand-dusted serenity,” “Georgian country estate,” “Bright lights, full bellies.” 😍Swoon! </p>
                                                       
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                 {/* ----------------360deg  Gallery------------- */}
                 <section class="products" id="products">
                 <br/>
                <h1 class="Heading-a">360 Degree View  </h1>
                <hr/>
                <br/> 
                <div class="container">
                            <iframe  class="tshome"src="https://momento360.com/e/u/6e94c26029a94a61ad5c7475ebb4904f?utm_campaign=embed&utm_source=other&heading=-73.3&pitch=-36.03&field-of-view=97.4&size=medium" />
                </div>
                <hr/>
                <div class="container">
                            <iframe  class="tshome"src="https://momento360.com/e/u/1062080d6d004f8895cc3fef2a58bdb0?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium" />
                </div>
                        
                 </section>



                {/* ----------------Adventure Idea------------- */}
                <br />


                <section class="products" id="products">
                <br/>
                <h1 class="Heading-a"> Adventure Idea ...! </h1>
                <hr/>
                <br/>
            
                <div class="box-container">

                    <div class="box">

                        <div class="image">
                            <img src="/images/Bull.png" alt="" />
                        </div>
                        <div class="content">
                            <h3 class="head">Bullock Cart</h3>
                            <div >
                                <h4 class="description" >Travel by Bullock cart, a long lost mode of commuting can be relieved here with friendly bulls named Raja. Experince the Village Life</h4>
                            </div>

                            <Link to ='/Activities'><button type="button" class="btn btn-warning">Explore More</button></Link>
                            <br/>    <br/>

                        </div>
                    </div>

                    <div class="box">

                        <div class="image">
                            <img src="images/mountain.jpeg" alt="" />
                        </div>
                        <div class="content">
                            <h3 class="head">mountain climbing</h3>
                            <div>
                                <h4 class="description" >Sahyadri is home to some amazing Rocky Mountains and pinnacles, historic hill forts, steep canyons, and some massive.</h4>
                            </div>
                            <Link to ='/Activities'><button type="button" class="btn btn-warning">Explore More</button></Link>
                            <br/><br/>
                        </div>
                    </div>

                    <div class="box">

                        <div class="image">
                            <img src="images/zip.jpg" alt="" />
                        </div>
                        <div class="content">
                            <h3 class="head">Zip Lines</h3>
                            <h4 class="description" > A zip-line, zip line, zip-wire, or flying fox is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope</h4>
                        </div>
                        <Link to ='/Activities'><button type="button" class="btn btn-warning">Explore More</button></Link>
                        <br/><br/>
                    </div>
                </div>




            </section>
                {/* ---------------------What we offers------------------------  */}

                <br />
                <section class="services">
                    <br/>
                    
                    <h1 class="Heading-c"> what &nbsp;  We &nbsp;  offer </h1>
                    <hr/>
                    <br />
                    <div class="box-container">

                        <div class="box">
                            <img src="images/serv-1.png" alt="" />
                            <h3>complete guide</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        

                        <div class="box">
                            <img src="images/serv-3.png" alt="" />
                            <h3>family trips</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        
                        <div class="box">
                            <img src="images/serv-5.png" alt="" />
                            <h3>adventure trail</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                        <div class="box">
                            <img src="images/serv-6.png" alt="" />
                            <h3>various adventures</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>

                        </div>

                    </div>

                </section>

                {/* ---------------------Drop Down----------------------- */}
                <section id="services" class="services_wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 section-title text-center mb-5">
                                <div class="content">
                                    <br/>
                                    <br/>
                                    
                                    <h1 class ='Heading-b'> We Are Here for You <br /> <span>Our Awesome Services</span></h1>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center service-item-wrap">
                            <div class="col-lg-7 p-lg-0">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="spa" role="tabpanel">
                                        <img src="/images/Services/service1.webp" class="img-fluid" />
                                    </div>
                                    <div class="tab-pane fade" id="restaurant" role="tabpanel">
                                        <img src="/images/Services/service2.webp" class="img-fluid" />
                                    </div>
                                    <div class="tab-pane fade" id="swimming" role="tabpanel">
                                        <img src="/images/Services/service3.webp" class="img-fluid" />
                                    </div>
                                    <div class="tab-pane fade" id="conference" role="tabpanel">
                                        <img src="/images/Services/service6.webp" class="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 position-relative">
                                <div class="service-menu-area">
                                    <ul class="nav">
                                        <li>
                                            <a data-bs-toggle="tab" href="#spa" class="active">
                                                <span class="service-icon">
                                                    <img src="/images/Services/service-icon1.webp" alt="" />
                                                </span>
                                                <h3>Spa, beauty & Health</h3>
                                                <p><span>Spa and beauty</span> Relax and enjoy a rejuvenating experience at our
                                                    urban luxury hotels. </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tab" href="#restaurant">
                                                <span class="service-icon">
                                                    <img src="/images/Services/service-icon2.webp" alt="" />
                                                </span>
                                                <h3>Restaurant</h3>
                                                <p><span>Restaurant</span> Located on the Lobby Level, open 24 hours this venue is
                                                    available to host breakfast, lunch and dinner. </p>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tab" href="#swimming">
                                                <span class="service-icon">
                                                    <img src="/images/Services/service-icon3.webp" alt="" />
                                                </span>
                                                <h3>Swimming Pool</h3>
                                                <p><span>Swimming</span> A holiday is incomplete without a swimming pool story.</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a data-bs-toggle="tab" href="#conference">
                                                <span class="service-icon">
                                                    <img src="/images/Services/service-icon4.webp" alt="" />
                                                </span>
                                                <h3>Conference Hall</h3>
                                                <p><span>Conference</span>The Sinhagad Resort lonavala offers large and spacious
                                                    banqueting area. </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>






                {/* <!-- review section starts  --> */}
                <br />
                <section class="review" id="review">
                    <br/>
                    
                    <h1 class="Heading-d"> customer's review </h1>
                    <hr/>
                    <br />
                    <div class="box-container">

                        <div class="box">
                            <img src="/images/quote-img.png" alt="" class="quote" />
                            <p> One of the best resort I have visited till now. The receptionists were really helpful and friendly. Great staff who knew how to serve the customer.he room was well equipped and the service was excellent.  </p>
                            <img src="/images/pic-1.jpeg" class="user" alt="" />
                            <h3>Raj Patil</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="box">
                            <img src="/images/quote-img.png" alt="" class="quote" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <img src="/images/pic-2.jpeg" class="user" alt="" />
                            <h3>Apurva Roy</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="box">
                            <img src="/images/quote-img.png" alt="" class="quote" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                            <img src="/images/pic-3.jpeg" class="user" alt="" />
                            <h3>Mohan Murti</h3>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                    </div>

                </section>
                {/* ---------------------patners-------------------------- */}
               
            </div>
        )
    }
}
