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
                                            Maxwell admin Inc, 45 NorthWest Street.<br/>
                                            Sunrise Blvd, San Francisco.<br/>
                                            00000 00000
                                        </address>
                                    </div>
                                </div>
                                 
        
                                 
                                <div class="row gutters">
                                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                                        <div class="invoice-details">
                                            <address class="name">
                                                Alex Maxwell<br/>
                                                150-600 Church Street, Florida, USA
                                            </address>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                        <div class="invoice-details">
                                            <div class="invoice-num">
                                                <div class="name">Invoice - #009</div>
                                                <div class="name">January 10th 2020</div>
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
                </div>
            </div>
        </div>
    </div>
     )
 }

 export default Invoice;
