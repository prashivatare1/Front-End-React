import React, { Component } from 'react'
import '../css/Admin.css'
import axios from 'axios'

export default class  extends Component {
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
      Username:this.x1.current.value,
      Password:this.x2.current.value
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
      <div className='Admin container'> 
           <div class="container">
             <br/>
             <br/>
        <form onSubmit={(ev) =>{this.myfunc(ev)}} class="form-group">
            <div id="form">
              <br/>
                <h1 class="text-white text-center">Admin Login</h1>

                <div id="first-group">

                 
                    <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input ref={this.x1} type="text" id="input-group" placeholder="Username"/>
                    </div>

            
                    <div id="content">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input ref={this.x2} type="text" id="input-group" placeholder="Password"/>
                    </div>

                </div>
                
                <button type="submit" value="Submit" id="submit-btn">Enter</button>
                {/* <Link to="/Register"><button type="button"value="Submit" id="submit-btn">Register</button></Link> */}
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
