import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loggedInUser] = useContext(UserContext);

  useEffect(() => {
    try {
      fetch(
        "https://infinite-falls-22781.herokuapp.com/bookings?email=" +
          loggedInUser.email,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [loggedInUser.email]);

  console.log("bookings : ", bookings);

  return (
    <div>
      <h3 className="text-center">You have {bookings.length} bookings</h3>
      {bookings?.map((booking) => {
        return (
          <div
            key={booking._id}
            className="mt-3 text-center"
            style={{ border: "1px solid black", margin: "20px" }}
          >
            <li>
              {" "}
              <b>Name :</b> {booking.displayName}
            </li>
            <li>
              <b>Email :</b> {booking.email}
            </li>
            <li>
              {" "}
              <b>Id :</b> {booking._id}
            </li>
            <li>
              <b>From : </b>
              {new Date(booking.checkIn).toDateString("dd/MM/yy")} <b>,To :</b>{" "}
              {new Date(booking.checkOut).toDateString("dd/MM/yy")}
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default Bookings;
