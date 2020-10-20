import React, {Component} from 'react';
import CatalogItem from '../catalog-item';
import { connect } from 'react-redux';
import WithShopService from '../hoc';
import {shopError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';


class CatalogList extends Component {

    componentDidCatch() {
        this.props.shopError();
    }

    render() {
        const {shopItems, loading, error, addedToCart} = this.props;
        if (shopItems.length === 0) {
            return (
                <div>Choose Category</div>
            )
        }
        if (error){
            return <Error/>
        }
        if (loading) {
            return <Spinner/>
        }
        const items = shopItems.map(shopItem => {
                return (
                    <CatalogItem 
                        key={shopItem.id}
                        shopItem={shopItem}
                        onAddToCart={() => addedToCart(shopItem.id)}/>
                )
            })
        return (
            <div className="catalog-wrapper">
                {items}
            </div>
            )
    }
};

const mapStateToProps =  ({shop, loading, error}) =>{
    return {
        shopItems: shop,
        loading,
        error
    }
}


const mapDispatchToProps = {
    shopError,
    addedToCart
}

export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(CatalogList));