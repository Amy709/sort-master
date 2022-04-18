import React from 'react';
import './style.css';

const Footer = (props) => {
    return ( <
        footer className = "Footer" >
        <
        section >
        Designed and built with { ' ' } <
        span className = "Footer__Heart" > & hearts; < /span> by{' '} <
        a

        target = "_blank"
        rel = "noopener noreferrer"
        className = "Footer__Link" >
        Amit, Bhuvnesh, Gagan <
        /a> <
        /section>

        <
        section className = "Footer__Items" >
        <
        a

        target = "_blank"
        rel = "noopener noreferrer"
        className = "Footer__Link" >
        Demo <
        /a> <
        a

        target = "_blank"
        rel = "noopener noreferrer"
        className = "Footer__Link" >
        Code <
        /a> <
        /section> <
        /footer>
    );
};

export default Footer;