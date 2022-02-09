import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import Button from '@material-ui/core/Button'
import { useState } from "react";
import { UserContext } from "../../App";
import Bookings from "../Bookings/Bookings";
import { useHistory } from "react-router-dom";

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { bedType } = useParams();
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const handleCheckInDateChange = (date) => {
    const newDate = { ...selectedDate };
    newDate.checkIn = date;
    setSelectedDate(newDate);
  };

  const handleCheckoutDateChange = (date) => {
    const newDate = { ...selectedDate };
    newDate.checkOut = date;
    setSelectedDate(newDate);
  };

  const handleBooking = () => {
    const newBooking = { ...loggedInUser, ...selectedDate };

    try {
      fetch("https://infinite-falls-22781.herokuapp.com/addBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBooking),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          history.push("/success");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center">
      <h3>
        Let's book a <b style={{ color: "red" }}>{bedType}</b> room
      </h3>
      <p>
        {" "}
        Want a different room ? <Link to="/home">Yes</Link>{" "}
      </p>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent="space-around">
          <KeyboardDatePicker
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="checkout"
            value={selectedDate.checkIn}
            onChange={handleCheckInDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            minDate={new Date()}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="check in date"
            format="MM/dd/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckoutDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            minDate={new Date()}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <button
        onClick={() => handleBooking()}
        className="btn btn-primary"
        variant="outline"
      >
        BOOK NOW
      </button>
      {/* <Bookings key={1} /> */}
    </div>
  );
};

export default Book;
