import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useState } from "react";
import '../css/Cart.css'

function Cart() {
    const {
        isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const[checkin ,  setcheckIn] = useState("");
    const[checkOut, setCheckOut] = useState("");

     
    console.log(checkin);
    console.log(checkOut);

    localStorage.setItem('LOCcheckin',checkin);
    localStorage.setItem('LOCcheckout',checkOut);
    console.log("Checkin");
    
   

    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>

    return (
        <div>
            <div class="container">
                <div class="row">

                    <div class="col">

                    </div>
                </div>
            </div>

            <br /><br />

            <div class="container">
                <div class="row">
                    <div class="">
                        <div className="row justify-content-center text-center">
                            <div className="">
                                <h6 class="cart-heading">  <i class="fa-solid fa-cart-shopping"></i> &nbsp;Cart</h6>
                                <hr />
                                <table className="table table-light table-hover table-content">
                                    <tbody>
                                        <tr>

                                            <th>IMAGE</th>
                                            <th>NAME</th>
                                            <th>DESCRIPTION</th>
                                            <th>PRICE</th>
                                            <th>NO. OF DAYS</th>
                                            <th>COST</th>
                                            <th>+1 DAY </th>
                                            <th>-1 DAY </th>
                                            <th> REMOVE</th>

                                        </tr>

                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        {
                                            items.map((room, index) => {
                                                return (
                                                    <tr key={index} >
                                                        <td>
                                                            <img src={room.roomPhotos} style={{ height: '60px' }} />
                                                        </td>
                                                        <td class="table-data">{room.roomType}</td>
                                                        <td class="table-data">{room.description}</td>
                                                        <td class="table-data">{room.price}</td>
                                                        <td class="table-data">Days : {room.quantity}</td>
                                                        <td class="table-data">{room.price * room.quantity}</td>
                                                        <td>
                                                            <button className="btn btn-primary ms-2"
                                                                onClick={() => updateItemQuantity(room.id, room.quantity + 1)}>
                                                                <i class="fa-solid fa-plus"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary ms-2"
                                                                onClick={() => updateItemQuantity(room.id, room.quantity - 1)}>
                                                                <i class="fa-solid fa-minus"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-danger ms-2" onClick={() => removeItem(room.id)}>
                                                                <i class="fas fa-trash "></i></button>
                                                        </td>

                                                    </tr>

                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="text-right abcdf">

                        <h5 class="total-item">Total Booked Rooms :  <span class="class-span">{totalUniqueItems}</span> </h5><br />
                        <h5 class="total-item">Total Days to Spend :  <span class="class-span"> {totalItems} Days</span></h5><br />
                        <h5 class="total-item">Payable Cost : <span class="class-span">{cartTotal}</span>  </h5>
                        <hr />
                        <div>
                            <div class="container myclass" align="center">
                                <h5 class="dateop">CHECK -IN DATE</h5>
                                <input type="date" class="form-control form-control-date" value={checkin} onChange={(e)=> setcheckIn(e.target.value)}    />
                                <br/>
                                <h5 class="dateop">CHECK -OUT DATE</h5>
                                <input type="date" class="form-control form-control-date" value={checkOut} onChange={(e)=> setCheckOut(e.target.value)}  />
                            </div>
                            <hr/>
                            <Link to="/login"><button class="btn btn-success form-control-date"> CONFIRM </button></Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cart;