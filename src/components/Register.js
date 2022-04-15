import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css'
import '../css/Register.css'

export default class extends Component {
    constructor(){
        super();
        this.x1 =React.createRef();
        this.x2 =React.createRef();
        this.x3 =React.createRef();
        this.x4 =React.createRef();
        this.x5 =React.createRef();
        this.x6 =React.createRef();
        this.x7 =React.createRef();
        this.x8 =React.createRef();
        this.x9 =React.createRef();
        this.x10 =React.createRef();
    }

    myfunc(ev){
   
        ev.preventDefault();
        // console.log(this.x1);
        // console.log(this.x2);
    
    
      var  dataForNodejs = {
          firstName:this.x1.current.value,
          middelname:this.x2.current.value,
          lastName:this.x3.current.value,
          gender:this.x4.current.value,
          mobile:this.x5.current.value,
          emailId:this.x6.current.value,
          password:this.x7.current.value,
          address:this.x8.current.value,
          city:this.x9.current.value,
          zip:this.x10.current.value,
        }
        console.log(dataForNodejs);
        console.log(axios)
         
        var ans_axios = axios.post('http://localhost:8055/savecustomer',dataForNodejs)
        console.log(ans_axios);

        
    
        ans_axios.then((res)=>{
          console.log(res.data);
          alert("Successfully Registered");
        })
      }
    



    render() {
        return (
            <div className='Login container' >
                <div class="container">
                <br/>
                        <br/>
                    <form onSubmit={(ev)=>{this.myfunc(ev)}} class="form-group">
                        <div id="form">
                            <br/>
                            <h1 class="text-white text-center">User Details</h1>

                            <div id="first-group">

                                <div id="content">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <input ref={this.x1} type="text" id="input-group" placeholder="First name" />
                                </div>

                                <div id="content">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <input type="text" ref={this.x2} id="input-group" placeholder="Middle name" />
                                </div>
                                <div id="content">
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <input type="text" ref={this.x3} id="input-group" placeholder="Last name"/>
                                </div>

                                <div id="content">
                                    <i class="fa fa-smile" aria-hidden="true"></i>
                                    <input type="text" ref={this.x4} id="input-group" placeholder="Gender"/>
                                </div>
                              
                                <div id="content">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <input type="text" ref={this.x5} id="input-group" placeholder="Phone number" />
                                </div>

                               <div id="content">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <input type="email" id="input-group" ref={this.x6} placeholder="Email"/>
                                </div>

                                <div id="content">
                                    <i class="fa fa-key" aria-hidden="true"></i>
                                    <input type="password" id="input-group" ref={this.x7} placeholder="password"/>
                                </div>

                                <div id="content">
                                    <i class="fa fa-key" aria-hidden="true"></i>
                                    <input type="text" id="input-group" ref={this.x8} placeholder="address"/>
                                </div>

                                <div id="content">
                                    <i class="fa fa-key" aria-hidden="true"></i>
                                    <input type="text" id="input-group" ref={this.x9} placeholder="city"/>
                                </div>

                                
                                <div id="content">
                                    <i class="fa fa-key" aria-hidden="true"></i>
                                    <input type="text" id="input-group" ref={this.x10} placeholder="zip"/>
                                </div>

                            </div>
                            <button type="submit" value="Submit" id="submit-btn">Enter</button>
                            
                            <br />
                            <br />
                        </div>
                    </form>
                    <br />
                    <br />
                </div>

            </div>
        )
    }
}
