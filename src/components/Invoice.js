import {useCart} from 'react-use-cart'; 
import '../css/Invoice.css'
 function Invoice()
 {
    
        
       

    const{
        isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    function myfunc(ev){
   
        //ev.preventDefault();
        localStorage.clear();
        alert("Visit Again ....!");
      window.location="http://localhost:3000";
    }
    
    //var abc =JSON.parselocalStorage.getItem('customerObj')
      // console.log(abc[0])
    var  test = JSON.parse(localStorage.getItem('customerObj'));
     console.log(test[0].customerId);
     console.log(test);


     const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;



    //localStorage.setItem("invoice",abc);
    //var x =localStorage.getItem('invoice');
    //console.log(x[0].zip);   
    //localStorage.setItem('custid' ,invoice[0].customerId)
       //console.log(c);
      
       
     return(

        <div class="container">
        <div class="row gutters">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <div class="card-body p-0">
                        <div class="invoice-container">
                            <div class="invoice-header">
        
                                 
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div class="custom-actions-btns mb-5">
                                            <a href="#" class="btn btn-primary">
                                                <i class="icon-download"></i> Download
                                            </a>
                                            <a href="#" class="btn btn-secondary">
                                                <i class="icon-printer"></i> Print
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                 
        
                                 
                                <div class="row gutters">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                         
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <address class="text-right name">
                                       {test[0].customerId}  <br/>
                                             {test[0].address}<br/>
                                            {test[0].mobile}
                                        </address>
                                        <h1>  </h1>
                                    </div>
                                </div>

                                {/* var abc =localStorage.getItem(customerObj[0].customerId); */}
                                {/* console.log(abc); */}
                                
        
                                 
                                <div class="row gutters">
                                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                        <div class="invoice-details">
                                            <address class="name">
                                                {test[0].firstName} {test[0].lastName}<br/>
                                                {test[0].address} <br/> {test[0].city}, {test[0].zip} 
                                            </address>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                        <div class="invoice-details">
                                            <div class="invoice-num">
                                                <div class="name">Invoice - #009</div>
                                                <div class="name">{date}</div>
                                            </div>
                                        </div>													
                                    </div>
                                </div>
                                 
        
                            </div>
        
                            <div class="invoice-body">
        
                                 
                                <div class="row gutters">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table custom-table m-0 name">
                                                <thead>
                                                    <tr>
                                                        
                                                        <th>Booked Room ID</th>
                                                        <th>Room</th>
                                                        <th>Days</th>
                                                        <th>Sub Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                {
                                                            items.map((room, index) => {
                                                            return(
                                                            <tr key={index} >
                                                            
                                                                
                                                                <td>{room.id}</td>
                                                                <td>{room.roomType}</td>
                                                                <td>{room.quantity}</td>
                                                                <td>{room.quantity * room.price}</td>
                                                            </tr>
                                                            )
                                                        })
                                                    }
                                                     
                                                     <td colspan="2">
                                                                    <h5 class="text-success name2"><strong>Grand Total</strong></h5>
                                                                </td>
                                                                <td>
                                                                    <h5 class="text-success name2"><strong>₹{cartTotal}</strong></h5>
                                                                </td>
                                                     
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                 
        
                            </div>
        
                            <div class="invoice-footer name3">
                                Thank you for your Business. Visit Sinhgad Resort Again ...!
                            </div>
        
                        </div>
                    </div>
                    <button class="btn btn-primary" onClick={myfunc}>LOG OUT</button>
                    <br/>
                </div>
            </div>
        </div>
    </div>
     )
 }

 export default Invoice;
