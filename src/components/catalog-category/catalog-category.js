import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListGroup, Badge} from 'react-bootstrap';
import WithShopService from '../hoc';
import {shopLoaded, shopRequested, shopError, makeCategotyList, cleanCategory} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class CatalogCategory extends Component {

    componentDidMount() {
        this.props.shopRequested();

        const {ShopService} = this.props;
        ShopService.getShopItems()
            .then(res => res.forEach(item => {
                this.props.makeCategotyList(item['category'])
            }))
    }

    componentWillUnmount() {
        this.props.cleanCategory();
    }

    componentDidCatch() {
        this.props.shopError();
    }

    render() {
        const categorArr = this.props.categories;
        const {ShopService, loading, error} = this.props;

        const loadSelectedItems = (selector=0) => {
            this.props.shopRequested();
            if (!selector) {
                ShopService.getShopItems()
                    .then(res => this.props.shopLoaded(res))
            } else {
                ShopService.getShopItems()
                    .then(res => {
                        let itemsFromSelected = []
                        res.forEach(item => {
                            if (item.category === selector) {
                                itemsFromSelected.push(item)
                            }
                        });
                        this.props.shopLoaded(itemsFromSelected);
                    })
            }
        }

        if (loading) {
            return View(<Spinner/>, loadSelectedItems)
        }

        if (error) {
            return <Error/>
        }

        return (
            View(categorArr.map(item => {
                const {name, qtty, id} = item;
                return(
                    <ListGroup.Item className="catalog-item" key={id} onClick={() => loadSelectedItems(name)} as="li">
                        {name}
                        <Badge className="catalog-badge">{qtty}</Badge>
                    </ListGroup.Item>
                )
            }), loadSelectedItems)
        )
    }
}


const View = (inner, func) => {
    return (
        <ListGroup className="catalog-category" as="ul">
            <ListGroup.Item className="catalog-item" onClick={() => func()} as="li">
                Show all items
            </ListGroup.Item>
            {inner}
        </ListGroup>
    )
}


const mapStateToProps = ({shop, categories, loading, error}) => {
    return {
        categories,
        shop,
        loading,
        error
    };
};
const mapDispatchToProps = {
    shopLoaded,
    shopRequested,
    shopError,
    makeCategotyList,
    cleanCategory
};

export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(CatalogCategory));