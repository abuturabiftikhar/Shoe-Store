import React from 'react'
import { Link } from "react-router-dom";

export const ProductIndex = () => {

    const shoes = {
        "DAYBREAK": {
          name: "TOPAZ",
          price: "$110",
          cart: "Add to Cart",
          img:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ca54e328-b1c4-40b1-b20f-295835d52dc3/nike-daybreak-topaz-release-date.jpg"
        },
        "ZOOM VOMERO 5": {
          name: "SE",
          price: "$150",
          cart: "Add to Cart",
          img:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c3212092-dbe1-4d65-90c0-5aafbf8e2fe5/zoom-vomero-5-se-release-date.jpg"
        },
        "SPACE HIPPIE 01 - VOLT": {
          name: "THIS IS TRASH",
          price: "$130",
          cart: "Add to Cart",
          img:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/832a7814-b0a2-4e8b-9331-cea7257e85eb/space-hippie-01-volt-this-is-trash-release-date.jpg"
        },
        "ADAPT AUTO MAX": {
          name: "PURE PLATINUM",
          price: "$400",
          cart: "Add to Cart",
          img:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6edda20b-2a11-4ae4-91ff-fe75b1df46c6/adapt-auto-max-pure-platinum-release-date.jpg"
        },
        "AIR PRESTO": {
          name: "RED ORBIT",
          price: "$130",
          cart: "Add to Cart",
          img:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/72a87328-bc48-489a-97b1-88de6e20ad5e/air-presto-red-orbit-release-date.jpg"
        },
        "AIR TRAINER 3": {
          name: "VIOTECH",
          price: "$130",
          cart: "Add to Cart",
          img:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/dbbc1717-4994-4ab9-8952-eaa890a3a75e/air-trainer-3-viotech-release-date.jpg"
        }
      };

    return (
        <div className="container">
            <ul>
              {Object.entries(shoes).map(([productID, {name, price, cart, img}]) => (
                <li key={productID}>
                  <Link to={`/products/${productID}`}>
                    <h2>{name}</h2>
                    <h2>{price}</h2>
                    <h2>{cart}</h2>
                    <img src={img} alt={name} />
                  </Link>
                </li>
              ))}
            </ul>  
        </div>
    );
}
