import React, { Component } from 'react'
import '../css/Footer.css'

export default class  extends Component {
  render() {
    return (
      <div className='footer container'>
         <section class="patners">


<hr/>
<div class="share1">
    <img src="/images/client-logo-1.png" alt="" />
    <img src="/images/client-logo-2.png" alt="" />
    <img src="/images/client-logo-3.png" alt="" />
    <img src="/images/client-logo-4.png" alt="" />
</div>


</section>
           <div class="share">
        <a href="#" class="fab fa-facebook-f"></a>
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-instagram"></a>
        <a href="#" class="fab fa-linkedin"></a>
        <a href="#" class="fab fa-pinterest"></a>
    </div>

    

    <div class="credit"> All rights reserved</div>




      </div>
    )
  }
}
