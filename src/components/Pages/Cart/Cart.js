import React from 'react'
import { Outlet } from "react-router-dom";

export const Cart = () => {
    return (
        <div>
          <h1>Cart</h1>

          <Outlet />
        </div>
    );
}