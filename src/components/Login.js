import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css'

export default class   extends Component {
  constructor(){
    super();
    this.x1 = React.createRef();
    this.x2 = React.createRef();
  }
  myfunc(ev){
   
    ev.preventDefault();
    // console.log(this.x1);
    // console.log(this.x2);


  var  dataForNodejs = {
    emailId:this.x1.current.value,
    password:this.x2.current.value
    }
    console.log(dataForNodejs);
    console.log(axios)
     
    var ans_axios = axios.post('http://localhost:8055/customer/logincustomer',dataForNodejs)
    console.log(ans_axios);

    ans_axios.then((res)=>{
      console.log(res.data);
       sessionStorage.setItem('data',JSON.stringify(res.data) );
      console.log(sessionStorage);
      this.myfun2();
    })
  }

    myfun2()
    {
      alert("Login Successfull");
      window.location.href = "http://localhost:3001/";
    }



  render() {
    return (
      <div className='Login container' >
          <div class="container">
        <form onSubmit={(ev) =>{this.myfunc(ev)}} class="form-group">
        <br/>
                        <br/>
            <div id="form">

            <br/>
                <h1 class="text-white text-center">Customer Login</h1>

                <div id="first-group">

                 
                    <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input ref={this.x1} type="text" id="input-group" placeholder="Username"/>
                    </div>

                    
                    <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" ref={this.x2} id="input-group" placeholder="Password"/>
                    </div>

                </div>
                
                <button type="submit" value="Submit" id="submit-btn">Login</button>
                <Link to="/Register"><button type="button"value="Submit" id="submit-btn">Sign up</button></Link>
               <br/>
               <br/>
            </div>
        </form>
        <br/>
        <br/>
    </div>
        
      </div>
    )
  }
}
