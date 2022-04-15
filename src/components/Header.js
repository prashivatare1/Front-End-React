import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';



import '../css/Header.css'
import '../css/Btn.scss'
export default class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div class="conatainer">

          <div class="container">
            <div class="row">
              <div class="col-xl-3 abc">
                <img src="/images/logo.png" width="150px" height="150px" alt="" />
              </div>
              <div class="col-xl-9 abc">

                <h1 className='xyz'> <span> Royal Sinhagad Farms & Resort</span></h1>
              </div>

            </div>
          </div>

          <div class="navbardiv container bg-light">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <Link class='nav-link' to='/'>Home</Link> &nbsp;&nbsp;&nbsp;

              </li>

              <li class="nav-item">
                <a class="nav-link" href='/Rooms'>Cottages And Villas &nbsp;&nbsp;</a>
              </li>
              <li class="nav-item">
                <Link class='nav-link' to='/Facilities'>Facilities</Link> &nbsp;&nbsp;&nbsp;
              </li>
              <li class="nav-item">
                {/* <a class="nav-link">Activities </a> */}
                <Link class='nav-link' to='/Activities'>Activities</Link> &nbsp;&nbsp;&nbsp;
              </li>
              <li class="nav-item">
              <Link class='nav-link' to='/Packages'>Packages</Link> &nbsp;&nbsp;&nbsp;
              </li>
              <li class="nav-item">
                <Link class='nav-link' to='/About'>About</Link> &nbsp;&nbsp;&nbsp;
              </li>

              <li class="nav-item">
              <Link class='nav-link' to='/Enquiry'>Contact</Link> &nbsp;&nbsp;&nbsp;
              </li>

             <li class="nav-item">
             <Link class='nav-link' to="/Login"> Login </Link>
              </li>

              <li class="nav-item">
             <Link class='nav-link' to="/Admin"> Admin </Link>
              </li>

              <li class="nav-item">
             <Link to="/cart"> <i class="fas fa-shopping-cart"/> </Link>
              </li>

              <li class="nav-item">
               <Link to="/invoice">Invoice</Link>
              </li>

                  </ul>

                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>

              
             
              
              
            

          </div>
        </div>

      



    )
  }
}
