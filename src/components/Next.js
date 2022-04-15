import React, { Component } from 'react'
import axios from 'axios';
import '../css/login.css'
import '../css/Register.css'

export default class extends Component {
  constructor() {
    super();
      this.x1 = React.createRef();
      this.x2 = React.createRef();
      this.x3 = React.createRef();
      this.x4 = React.createRef();

  }

  myfunc(ev) {
    ev.preventDefault();



    var dataForNodejs = {
      Address: this.x1.current.value,
      Pincode: this.x2.current.value,
      City: this.x3.current.value,
      State: this.x4.current.value
    }
    console.log(dataForNodejs);
    console.log(axios)

    var ans_axios = axios.post('', dataForNodejs)
    console.log(ans_axios);

    ans_axios.then((res) => {
      console.log(res.data);
    })
  }



  render() {
    return (
      <div className='Login container' >
        <div class="container">
          <br />
          <br />
          <form onSubmit={(ev) =>{this.myfunc(ev)}}  class="form-group">
            <div id="form">
              <h1 class="text-white text-center">Address Details</h1>

              <div id="first-group">


                <div id="content">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input ref={this.x1} type="text" id="input-group" placeholder="Address" />
                </div>


                <div id="content">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input type="text" ref={this.x2} id="input-group" placeholder="Zip code" />
                </div>

                <div id="content">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input type="text" id="input-group" ref={this.x3} placeholder="City" />
                </div>

                <div id="content">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <input type="text" id="input-group" ref={this.x4} placeholder="State" />
                </div>

              </div>

              <button type="submit" value="Submit" id="submit-btn"  >Submit</button>

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
