import React from 'react';
import {Link} from 'react-router-dom';
import geo from '../contacts/geo.png';
import phone from '../contacts/phone.png';
import mail from '../contacts/mail.png';
import tg from './telegram.png';
import fb from './facebook.png';
import vbr from './viber.png'

const AppFooter = () => {
    return(
        <>
            <div className="footer-navbar">
                <div className="footer-nav">
                    <div className="footer-block">
                        <img src={geo} alt="geo"/>
                        <Link to="/contacts/">Укарина, г.Киев, 03169,<br/>ул.Академика Вильямса 5а</Link>
                    </div>
                    <div className="footer-block">
                        <img src={phone} alt="phone"/>
                        <Link to="/contacts/">(068) 863 11 95 <br/> (093) 146 48 31</Link>
                    </div>
                    <div className="footer-block">
                        <img src={mail} alt="mail"/>
                        <a href="mailto:vladgusakov@gmail.com" target="_blank">vladgusakov@gmail.com</a>
                    </div>
                </div>
                <div className="footer-soc">
                    <a href="https://web.telegram.org/" target="_blank"><img src={tg}/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={fb}/></a>
                    <a href="https://www.viber.com/" target="_blank"><img src={vbr}/></a>
                </div>
            </div>
        </>
    )
}

export default AppFooter;