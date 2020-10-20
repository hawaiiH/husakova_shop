import React from 'react';
import {Modal, Button, Form, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {hideModal, removedFromCart} from '../../actions';
import WithShopService from '../hoc';

const ModalWindow = ({cartOrder, hideModal, modalState, ShopService, removedFromCart}) => {

    let inputInfo = {
        name:'',
        phone:''
    };

    const phoneInput = (e) => {
        e.target.value = e.target.value.replace(/\D/, '');
        inputInfo.phone = e.target.value;
    }

    const nameInput = (e) => {
        inputInfo.name = e.target.value;
    }

    const MyForm = () => {
        hideModal();
        const {name, phone} = inputInfo;
        if (cartOrder) {
            ShopService.setOrder(name, phone, generateOrder(cartOrder));
            cleanCart(cartOrder, removedFromCart);
        } else {
            ShopService.setCallback(name, phone);
        }
    }

    return (
        <Modal show={modalState} onHide={() => hideModal()} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Есть вопросы? Мы вам передзвоним</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control onChange={nameInput} placeholder="Ваше имя" />
                        </Col>
                        <Col>
                            <Form.Control onChange={phoneInput} placeholder="Номер телефона" />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => MyForm()} type='submit'>
                        Заказать звонок
                </Button>
            </Modal.Footer>
        </Modal>
  )
};

const cleanCart = (items, func) => {
    items.map(item => func(item.id));
}

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

const mapStateToProps = ({items, modalState}) => {
    return {
      modalState
    }
}

const mapDispatchToProps = {
    hideModal,
    removedFromCart
}

export default WithShopService()(connect(mapStateToProps, mapDispatchToProps)(ModalWindow));