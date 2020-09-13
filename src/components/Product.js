import React from 'react'
import './Product.css';
import { Link } from "react-router-dom";

const Product = ({title, image, description, flex}) => {
    return (
        <div className = "product" style = {{display: 'flex', flexDirection: flex }} >
            <Link className = "link" >
                <img src = {image} className = "product__image" />
            </Link>
            <div className = "product__info" >
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Product;
