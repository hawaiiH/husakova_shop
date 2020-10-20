import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {showModal} from '../../actions';
import phone from './phone.png';
import geo from './geo.png';
import mail from './mail.png';
import gmail from './gmail.png';
import ModalWindow from '../modal';
import MapContainer from '../google-maps';
import tg from '../app-footer/telegram.png';
import fb from '../app-footer/facebook.png';
import vbr from '../app-footer/viber.png'


const Contacts = ({showModal}) => {


    return (
        <Container className="contact-wrapper">
            <Row className="contacts-geo">
                <Col sm={1}><img className="contacts-img" src={geo} alt="geo"/></Col>
                <Col sm={7}>Укарина, г.Киев, 03169, ул.Академика Вильямса 5а</Col>
                <Col sm={4} className="contacts-map"><MapContainer/></Col>
            </Row>
            <Row className="contacts-phone">
                <Col sm={1}><img className="contacts-img" src={phone} alt="phone"/></Col>
                <Col sm={7}>(068) 863 11 95 <br/> (093) 146 48 31</Col>
                <Col sm={4}><button className="contacts-callback" onClick={() => showModal()}>Заказать звонок!</button></Col>
            </Row>
            <Row className="contacts-mail">
                <Col sm={1}><img className="contacts-img" src={mail} alt="mail"/></Col>
                <Col sm={7}>vladgusakov@gmail.com</Col>
                <Col sm={4} className="contacts-soc">
                    <a href="mailto:vladgusakov@gmail.com" target="_blank"><img src={gmail}/></a>
                    <a href="https://web.telegram.org/" target="_blank"><img src={tg}/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={fb}/></a>
                    <a href="https://www.viber.com/" target="_blank"><img src={vbr}/></a>
                </Col>
            </Row>
            <ModalWindow/>
        </Container>
        
    )
};

const mapStateToProps = ({modalState}) => {
    return {
        modalState
    }
}

const mapDispatchToProps = {
    showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);