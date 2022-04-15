import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/About.css'


export default class extends Component {
    render() {
        return (

            <div className='xyz container'>
                

                <section class="about" id="about">


                    <div class="image">
                        <img src="/images/about-page.jpg" alt="" />
                    </div>


                    <div class="content">
                    <u> <h1>About Sinhagad Farms & Resort </h1></u>


                        <p class="about">Cities with developed infrastructure ,jungles of glass and concentrate buildings leave little time for people to enjoy the beauty of surrounding nature.
                            Today we lack the opportunity to breathe fresh air and maintain comfortable and healthy environment for our families.
                            Many people dream of escaping from city tension during week ends at least.Having a second home in the city outskirts or near the river side or in the hills is a great opportunity to get refreshed after a hectic week and spend time with your families surrounded by nature and peace.
                            By choosing sinhagad farms as your second home you give yourself and your family a ticket into a new life.
                            Sinhagad farms assures you more life full of freshness,calmness,natural touch and happy hours spent.
                            Couple of days spent at sinhagad farms will be equal to week of body and mind rejuvenating programme.
                            Sinhagad farms will be the ideal second home complete with scenic view,massive open garden space and full range of recreational facilities to enrich life.
                            Located at the foot hills of MORDAREE Sinhagad farms has a scenic location and can prove to be a excellent destination for a holiday trip.
                            Sinhagad farms is a good opportunity to own a week end home that will offer your family a quick break at a picturesque location with pleasant climate.</p>

                    </div>

                </section>

                <br />


                <section class="contacts" id="contact">

                    <h1 class="heading"> contact us </h1>


                    <div className='container'>
                        <div class="row">
                            <div class="col-1">
                            </div>
                            <div class="col-4">

                                <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div className='col-1'>
                            </div>

                            <div className='col-xl-4'>
                                <h4 >Office</h4>

                                <h3>
                                    Resorts near Sinhagad fort
                                    Management By: www.mapsindustries.net
                                    Sinhagad Farms, Office No.24 1st floor,
                                    Navrang plaza, near sawant petrol pump,
                                    Vishrantwadi Tingarenager road
                                    Vishrantwadi,<br />
                                    Pune – 411015
                                    <br />
                                    For Booking 77 67 0046 56 / 57
                                    <br />
                                    Email: booking@sinhagadfarms.com
                                    <br />
                                    Web: www.sinhagadfarms.com
                                    <br />

                                </h3>


                            </div>






                        </div>
                    </div>


                </section>

                <section>
                    <div class="container testi">
                        <div class="content">
                            <h1>Our Team</h1>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="box">
                                    <img src="/images/feedback/image1.jpg" class="img-fluid" alt="" /><br />
                                    
                                    <h6>Gaurav Nikam</h6>
                                    <p>Really it’s our favorite place for relaxation where we enjoy nature & food at the same 😊
                                        Me and my friends enjoyed being there.. Thank you for everything. .
                                    </p>
                                </div>
                            </div>

                            <div class="col-sm-4 mid">
                                <div class="box">
                                    <img src="/images/feedback/images.jpg" class="img-fluid" alt="" /><br />
                                    
                                    <h6>Prerana Salunke</h6>
                                    <p>It was a fantabulous experience yesterday at Sinhagad Farm. People’s enjoyed a lot especially
                                        food at all the time.Thanks for everything.</p>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="box">
                                    <img src="/images/feedback/image2.jpg" class="img-fluid" alt="" /><br />
                                    
                                    <h6>Pradyumna Shivtare</h6>
                                    <p>The service was excellent and the food was incredible and delicious. All your staff was very
                                        accommodating and welcoming.
                                        We will definately be visiting again 🙏</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Enquiry"><button type="button" class="btn btn-dark"> Enquire Form</button></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a target="_blank" href="https://forms.gle/EqAM6ja3SqWhHicL9"><button type="button" class="btn btn-dark"> Feedback</button></a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                {/* <Link to="#"><button type="button" class="btn btn-warning"> Book Now</button></Link>
                &nbsp;&nbsp;&nbsp;&nbsp; */}


            </div >
        )
    }
}

