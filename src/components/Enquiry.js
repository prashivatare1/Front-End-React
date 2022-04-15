import React, { Component } from 'react'
import '../css/Enquiry.css'
import axios from 'axios'

export default class extends Component {

    
     
    constructor(){
        super();
        this.x1 = React.createRef();
        this.x2 = React.createRef();
        this.x3 = React.createRef();
        this.x4 = React.createRef();
       
        
   
        
      }
      
      myfunc(ev){
 
        
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        console.log(date);

        ev.preventDefault();
        // console.log(this.x1);
        // console.log(this.x2);
    
    
      var  dataForNodejs = {
          name:this.x1.current.value,
          contact:this.x2.current.value,
          email:this.x3.current.value,
          message:this.x4.current.value,
          enqDate:date  
          
        }
        console.log(dataForNodejs);
        console.log(axios)
         
        var ans_axios = axios.post('http://localhost:8055/enquiry/saveenquiry',dataForNodejs)
        console.log(ans_axios);
    
        ans_axios.then((res)=>{
          console.log(res.data);
          this.successfull();
          
        })
      }

      successfull()
      {
          alert("Successfully Registered");
          window.location.href = "http://localhost:3000";
      }


    render() {
        return (
            <div className='Enquiry container'>
                <div class="container">
                    <form onSubmit={(ev)=>{this.myfunc(ev)}} class="form-group ">
                    <br/>
                        <br/>
                        <div id="form">
                            <br/>
                            <h1 class="text-white text-center">Enquiry Form</h1>

                            <div id="first-group">

                                
                                <div id="content">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <input ref={this.x1} type="text" id="input-group" placeholder="Name" />
                                </div>

                                <div id="content">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <input ref={this.x2} type="text" id="input-group" placeholder="Phone" />
                                </div>

                                <div id="content">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <input type="email" ref={this.x3} id="input-group" placeholder="Email" />
                                </div>

                               

                               

                                <div id="content">
                                    <i class="fa fa-flag" aria-hidden="true"></i>
                                    <input ref={this.x4} type="text" id="input-group" placeholder="Message" />
                                </div>

                            </div>

                            <button type="submit" value="Submit" id="submit-btn">Save</button>
                            <br/>

                        </div>
                        <br/>
                        <br/>

                    </form>
                </div>
            </div>
        )
    }
}