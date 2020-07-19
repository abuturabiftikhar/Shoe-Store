import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography varient="title" color="black">
            Shoe Store {" "}
          </Typography>
          < Link to="/">Home</Link> {" "}
        < Link to="/products">Products</Link> {" "}
        < Link to="/cart">
        <ion-icon name="cart-outline"></ion-icon>Cart<span>0</span>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};