import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import Home from "./components/Home/Home";
import Book from "./components/Book/Book";
import Room from "./components/Room/Room";
import PrivateRoute from "./components/PrivateRiute/PrivateRoute";
import BookingSuccess from "./components/BookingSuccess/BookingSuccess";
import Profile from "./components/Profile/Profile";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* {loggedInUser.email && <p>Email : {loggedInUser.email}</p>} */}
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <PrivateRoute exact path="/success">
            <BookingSuccess />
          </PrivateRoute>

          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>

          <PrivateRoute path="/book/:bedType">
            <Book />
          </PrivateRoute>

          <Route path="/room">
            <Room />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
