import React, { Component } from 'react'
import { eventWrapper } from '@testing-library/user-event/dist/utils'
import '../css/Facilities.css'

export default class  extends Component {
  render() {
    return (
      <div className='Adventure container'>
            <div class="wrapper">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="100">
                            <img src="/images/bar.jpg" class="d-block w-100 h-80" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="slogan" >An ideal world. If only for a night </h5>
                                <p class="desription"> A resort is a place used for vacation, relaxation or as a daytime getaway. While this can be a single
                                     structure such as a hotel, it also can be a whole island or a ship at sea</p>
                                     
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="/images/swimming_pool.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5 class="slogan">Check into another world.</h5>
                                <p class="desription"> Holiday and event weekends are subject to high season rates.</p>
                            
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="/images/spa-fac.jpg" class="d-block w-100" alt="..." />
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
        <div class="text-wrapper">
            <h1></h1>
        </div>
    </div>

    {/* <!--Navigation Code starts here-->
   
    <!--Navigation Code Ends Here--> */}
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <h1>  Event Planning Services</h1>
    <div>
        <p>We at 7X believe that a wedding becomes a beautiful experience if the smallest of details are taken care of
            in the best possible manner.
            We take pleasure in crafting and managing every moment of your special day to make it an extraordinary one.
            Our Wedding planning Services will help you know us better and gain an understanding in-depth on how we
            provide 360-degree solutions to weddings and events planning and management.</p>
    </div> */}

    <br/>
    <br/>




    <div class="container border border-1 text-center">

        <br/><br/>

        <div class="row">

            <div class="col-5 ">
                <img src="/images/corporate-bar.jpg" />

            </div>




            <div class="col-7">
                <h2 class="post-title">Bar Services</h2>

                <p class="paraghraph"> <br/>we will provide full-fledged Bar tending services equipped to accommodate any type  event. 
                    We'll take matters in our hands and give you the peace of mind to enjoy the party.
                    The professional bartenders will bring all the bartending tools necessary to operate a bar. We can provide garnishes, cups, 
                    ice and anything else you need at an additional cost.



                    </p>
            </div>



        </div>
        <br/>
        <br/>

        <h6>__________________________________________________________________________________________________________________________________________________
        </h6>

        <br/>
        <br/>

        <div class="row">
            <div class="col-7">
                <h2 class="post-title">Beverages</h2>

                <p class="paraghraph"> <br/>Beverages play an important role in accompanying food. Beverages also enhance flavor of main dish and help to cleanse the taste buds in between bites, and complement the dish.
                    
                    Hot beverages such as hot tea or coffee, and hot chocolate are prepared in the kitchen and generally served from the kitchen pantry. Cold beverages such as mocktails and alcoholic beverages such as spirits, liquors, and cocktails come to the guests’ tables from bars. </p>
            </div>


            <div class="col-5">
                <img src="/images/corporate-beverage.jpg" />

            </div>
        </div> <br/>
        <br/>
        <br/>

        <h6>__________________________________________________________________________________________________________________________________________________
        </h6>

        <br/>
        <br/>







        <div class="row">

            <div class="col-5 ">
                <img src="/images/2.jpg" />

            </div>




            <div class="col-7">
                <h2 class="post-title">swimming pool</h2>

                <p class="paraghraph"> <br/>This Sinhagad Farm & Resort with swimming pool offers you a memorable stay in its 15 Premium Rooms, 20 Deluxe Rooms and 14 Executive Pool access well-furnished room.</p>
            </div>



        </div>
        <br/>
        <br/>

        <h6>__________________________________________________________________________________________________________________________________________________
        </h6>

        <br/>
        <br/>


        <div class="row">
            <div class="col-7">
                <h2 class="post-title">spa</h2>

                <p class="paraghraph"> <br/>The spa offers revitalizing therapies from around the world for adults. Spread over a considerable area within the premises of The Resort, Iyãsya provides a blissful relaxation quarter with facilities that will redefine wellness and indulgence. Also, The Resort’s location amidst sylvan surroundings with a treasure trove of natural beauty, lends a perfect setting for the spa and the patrons who come to de-stress. </p>
            </div>


            <div class="col-5">
                <img src="/images/image-spa.jpg" width="500" />

            </div>
        </div> <br/>
        <br/>
        <br/>

        <h6>__________________________________________________________________________________________________________________________________________________
        </h6>

        <br/>
        <br/>


        <div class="row">

            <div class="col-5  ">
                <img src="/images/corporate-conference.jpg" />

            </div>




            <div class="col-7">
                <h2 class="post-title">Conference management</h2>

                <p class="paraghraph"> <br/>The main function of Conference Management Service (CMS) is to provide Member States and intergovernmental bodies with the services required for the smooth functioning of meetings. 
                    Staff of the Conference Management Service work tirelessly, often behind the scenes, to enable deliberations. </p>
            </div>



        </div>
        <br/>
        <br/>

        <h6>__________________________________________________________________________________________________________________________________________________
        </h6>

        <br/>
        <br/>




        <div class="row">
            <div class="col-7">
                <h2 class="post-title">Your Perfect Wedding</h2>

                <p class="paraghraph"> <br/>Wed amidst a lush garden, with reception options including long banquet tables, live music, and a fireworks performance. We would curate the perfect wedding set up to make your special day an extra memorable one. </p>
            </div>


            <div class="col-5">
                <img src="/images/photography.jpg" />

            </div>
        </div> <br/>
        <br/>
        <br/>

        <h6>__________________________________________________________________________________________________________________________________________________
        </h6>

        <br/>
        <br/>



        <br/>
        <br/>




        
       

        <br/>
        <br/>






























    </div>
    <br/>
    <br/>
    <br/>



    
      </div>
    )
  }
}
