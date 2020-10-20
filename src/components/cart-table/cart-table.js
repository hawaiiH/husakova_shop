import React from 'react';
import {connect} from 'react-redux';
import {removedFromCart, addedToCart, removeOneItem, showModal} from '../../actions';
import ModalWindow from '../modal';

const CartTable = ({items, removedFromCart, addedToCart, removeOneItem, showModal}) => {
    if (items.length === 0) {
        return (
            <>
                <div className="empty-cart" onClick={() => showModal()}>
                    Ваша корзина ещё пуста :( <br/>
                    Нажмите, если нужна помощь в заказе!
                </div>
                <ModalWindow/>
            </>
        )
    }

    return (
        <>
            <div>Ваш заказ:</div>
                {
                items.map(item => {
                    const {title, price, url, id} = item;
                    return (
                        <div className="cart-item" key={id}>
                            <img src={url} />
                            <div className="cart-item-close" onClick={() => removedFromCart(id)}>&times;</div>
                            <div>
                                <p>{title}</p> <p>{price} $ | {item.qtty}</p>
                            </div>
                            <div className="cart-buttons">
                                <button onClick={() => addedToCart(id)}>+</button>
                                <button onClick={() => removeOneItem(id)}>-</button>
                            </div>
                        </div>
                    )
                })
                }
                <button onClick={() => showModal()}
                    className="cart-purchase">Purchase</button>
                <ModalWindow cartOrder={items}/>
        </>
    );
};


const mapStateToProps = ({items, modalState}) => {
    return {
        items,
        modalState
    }
};

const mapDispatchToProps = {
    removedFromCart,
    addedToCart,
    removeOneItem,
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);