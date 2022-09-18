import React, { Component } from 'react'
import '../css/payment.css'
import axios from 'axios';
export default class  Payment extends Component {
   
    constructor(props){
        super(props);
        
    }
   
   
    myfunc(ev){
   
        ev.preventDefault();
        // console.log(this.x1);
        // console.log(this.x2);
        var test=JSON.parse(localStorage.getItem('customerObj'));
        console.log(test[0].customerId);

        var test1=JSON.parse(localStorage.getItem('react-use-cart'));
        console.log(test1.items[0].id);

        var checkin = localStorage.getItem('LOCcheckin');
        var checkout = localStorage.getItem('LOCcheckout');
        var id = test1.items[0].id;
        var cost = test1.cartTotal;
        var customerId=test[0].customerId;
        
     var  dataForNodejs = {
         id:id,
         customerId:customerId,
         checkin:checkin,
         checkout:checkout,
         cost:cost
         }
        console.log(dataForNodejs);
    //     console.log(axios)
         
       var ans_axios = axios.post('http://localhost:8055/Booking/SaveBooking',dataForNodejs)
        console.log(ans_axios);
    
     ans_axios.then((res)=>{
       console.log(res.data)
    //       localStorage.setItem('customerObj',JSON.stringify(res.data) );
    //      // console.log(sessionStorage);
    //        var customerString = JSON.parse(localStorage.getItem('customerObj'));
    //        console.log(customerString);
          this.pass()
        
        
         })
     }
      pass()
     {
        window.location="http://localhost:3000/invoice"
     }
   
    
  render() {
    return (
      <div class="container">

<div class="container p-0">
    <div class="card  card2 px-4">
        <p class="h8 py-3">Payment Details</p>
        <div class="row gx-3">
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1 form-head">Person Name</p> <input class="form-control mb-3 form-mine" type="text" placeholder="Name" />
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1 form-head">Card Number</p> <input class="form-control mb-3 form-mine" type="text" placeholder="1234 5678 435678"/>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text  mb-1 form-head">Expiry</p> <input class="form-control mb-3 form-mine " type="text" placeholder="MM/YYYY"/>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1 form-head">CVV/CVC</p> <input class="form-control mb-3 pt-2  form-mine" type="password" placeholder="***"/>
                </div>
            </div>
            <div class="col-12">
                <div class="btn btn-primary button-pay" onClick={(ev) =>{this.myfunc(ev)}}> <span class="ps-3">Pay $243</span> <span class="fas fa-arrow-right"></span> </div>
            </div>
        
        </div>
        <br/>
    </div>
   
</div>









      </div>
        )
  }
}
