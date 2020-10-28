import React from 'react';
import {Nav, Navbar, Badge} from 'react-bootstrap';
import logo from './logo.png';
import cartIcon from './shopping-cart.png';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AppHeader = ({totalPrice, items}) => {
    return(
        <>
            <Navbar collapseOnSelect expand="md" className="header-navbar">
                <Navbar.Brand>
                    <Link to='/'>
                    <img
                        alt=""
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                    />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="header-link" to="/">Home</Link>
                        <Link className="header-link" to="/assortiment/">Assortiment</Link>
                        <Link className="header-link" to="/contacts/">Contacts</Link>
                    </Nav>
                    <Nav>
                        <Link className="header-link header-cart-link" to='/cart/'>
                            <div className="cart-total">Total: {totalPrice}$ <img className="cart-img" src={cartIcon} alt="cart"/></div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

const mapStateToProps = ({totalPrice, items}) => {
    return {
        totalPrice,
        items
    }
};

export default connect(mapStateToProps)(AppHeader);