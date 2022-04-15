import React, { Component } from 'react'
import '../css/Book.css'
import axios from 'axios';

export default class    extends Component {
    constructor(){
        super();
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
        this.x4 = React.createRef();
        this.x5 = React.createRef();
        this.x6 = React.createRef();
        this.x7 = React.createRef();
        this.x8 = React.createRef();
    }

    myfunc(ev){
   
        ev.preventDefault();
        // console.log(this.x1);
        // console.log(this.x2);
    
    
      var  dataForNodejs = {
          FirstName:this.x1.current.value,
          MiddleName:this.x2.current.value,
          PhoneNumber:this.x3.current.value,
          ArrivalDate:this.x4.current.value,
          LastName:this.x5.current.value,
          NoGuest:this.x6.current.value,
          Email:this.x7.current.value,
          DepartureDate:this.x8.current.value
        }
        console.log(dataForNodejs);
        console.log(axios)
         
        var ans_axios = axios.post('',dataForNodejs)
        console.log(ans_axios);
    
        ans_axios.then((res)=>{
          console.log(res.data);
        })
      }



  render() {
    return (
      <div className='Book container' >
           <div class="container">
           <br/>
                        <br/>
        <form onSubmit={(ev) =>{this.myfunc(ev)}}  class="form-group">
            <div  className='new'>
                <h1 class="text-white text-center">Booking Now</h1>

                <div className="first">

                    <div  className='content'>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input ref={this.x1} type="text" id="input-group" class='id' placeholder="First name"/>
                    </div>

                    <div class="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input ref={this.x2} type="text" id="input-group" class='id' placeholder="Middle name"/>
                    </div>

                    <div class="content">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <input ref={this.x3} type="number" id="input-group" class='id' placeholder="Phone number"/>
                    </div>

                    <h6 class="text-white text-justify">Arrival Date</h6>
                    <div class="content">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <input ref={this.x4} type="date" id="input-group" class='id' placeholder="Arrival Date"/>
                    </div>

                    {/* <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" id="input-group" placeholder="No of Guest"/>
                    </div> */}

                </div>

                <div className="second">

                    <div class="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" ref={this.x5} id="input-group" class='id' placeholder="Last name"/>
                    </div>

                    <div class="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" ref={this.x6} id="input-group" class='id' placeholder="No of Guest"/>
                    </div>

                    <div class="content">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <input type="email" ref={this.x7} id="input-group" class='id' placeholder="Email"/>
                    </div>

                    <h6 class="text-white text-justify">Departure Date</h6>
                    <div class="content">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        <input type="date" ref={this.x8} id="input-group" class='id' placeholder="Departure Date"/>
                    </div>

                    {/* <div id="content">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        <select id="input-group" style="background-color: black;">
                            <option value="">Room Type</option>
                            <option value="">AC</option>
                            <option value="">Non-AC</option>
                            <option value="">Single Bed</option>
                            <option value="">Double Bed</option>
                        </select>
                    </div> */}
            
                </div>

                <button type="submit" value="Submit" id="submit-btn" class='save'>Book Now</button>

            </div>
        </form>
        <br/>
                        <br/>
    </div>
      </div>
    )
  }
}
