import { Alert } from "bootstrap";
import React from "react";
import { useCart } from "react-use-cart";

const Roomcart = (props) => {
    {
        function addedsuccesfulyy()
        {
            alert("Successfully Added")
        }}
    const { addItem } = useCart();
    
    return (
        <div>
            <div class="container room text-left">

                <div className="row">
                    <div className="col-xl-4 imgagecol">

                        <img src={props.roomphotos} width="400px" height="300px" />
                    </div>
                    <div class="col text-left">
                         <br/>
                        <h2> {props.roomType} </h2>
                        <h3>{props.description}</h3>
                        <hr/>
                        <h3 class="description">If you are looking for privacy and tranquility you’ve just found it in Sinhgad Resort. From “Garden Studio” to “Tree Top Nest” our cottages
                            and  villas are designed to complement
                            and co-exist with the landscape. Here; outside becomes inside as the mesmerising view is perfectly framed by floor to ceiling.</h3>
                        
                        <h3> Allowed Adluts : {props.adluts} </h3>
                        <h3> Allowed Childs : {props.child} </h3>
                        <h3> Price ₹: {props.price} </h3>
                        <br/>
                        
                        <div class="container">
                        <div class="row">
                            <div class="col-sm">
                            <img  class="image-amenties" src="images/shower.png" width="50px" length="50px"/>
                            <br/>
                             <p class="amenities">SKY SHOWER</p>  
                            </div>
                            <div class="col-sm">
                            <img  class="image-amenties" src="images/wifi.png" width="50px" length="50px"/>
                            <br/>
                             <p class="amenities">WI - FI</p> 
                            </div>
                            <div class="col-sm">
                            <img class="image-amenties" src="images/ac.png" width="50px" length="50px"/>
                            <br/>
                             <p class="amenities">AIR CONDITION</p> 
                            </div>
                            <div class="col-sm">
                            <img  class="image-amenties"src="images/couple.png" width="50px" length="50px"/>
                            <br/>
                             <p class="amenities">COUPLE FRIENDLY</p>    
                            </div>
                            <div class="col-sm">
                            <img  class="image-amenties" src="images/children.png" width="50px" length="50px"/>
                            <br/>
                             <p class="amenities">CHILDREN FRIENDLY</p>   
                            </div>
                            <div class="col-sm">
                            <img  class="image-amenties" src="images/bath.png" width="50px" length="50px"/>
                            <br/>
                             <p class="amenities">BATHTUB</p> 
                            </div>
                        </div>
                        
                    </div>

                        <button type="button" class="btn btn-primary text-center btn2" onClick={() => addItem(props.room)}  >  Add to Booking </button><br /><br />
                       
                    </div>
                </div>
                <hr />
            </div>
    
        </div>
    );

    
}

export default Roomcart;