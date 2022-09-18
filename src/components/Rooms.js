import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/Room.css'
import Roomcart from "./Roomcart";

function Rooms() {

    const [allRooms, setAllRooms] = useState([]);

    useEffect(function () {
        axios
            .get("http://localhost:8055/room")
            .then((response) => setAllRooms(response.data))
            .then((error) => console.log(error));
    }, []);

    console.log(allRooms);

    return (
        <div>
            {
                allRooms
                    .map((room, index) => {
                        return (
                            <Roomcart 
                                id = {room.id}
                                roomphotos = {room.roomPhotos}
                                roomType = {room.roomType}
                                description = {room.description}
                                adluts = {room.adluts}
                                child = {room.child}
                                price = {room.price}
                                room = {room}
                                key = {index}
                            />
                        )
                    })
            }









        </div>
    );
}

export default Rooms;