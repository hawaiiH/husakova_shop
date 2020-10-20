import React from 'react';
import { Button} from 'react-bootstrap';

const CatalogItem = ({shopItem, onAddToCart}) => {
    const {title, price, url, category, id} = shopItem;

    return (
        <div key={id} className="item-wrapper">
            <img className="item-img" src={url} alt={title}/>
            <div className="item-title"><span>{title}</span></div>
            <div className="item-price">Price: <span>{price}$</span></div>
            <div className="item-category">Caregory: <span>{category}</span></div>
            <button onClick={() => onAddToCart()}>Buy</button>
        </div>
    )
}

export default CatalogItem;