import React from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';

const Header = () => {


    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <h6>{moment().format('LTS')}</h6>
            </div>
            <div className='d-flex mb-3'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover={true} speed={100} className='text-danger' pauseOnClick={true}>
                    <p style={{ marginRight: "50px" }}> I can be a React component, multiple React components</p>

                    <p>or just some text.</p>
                </Marquee>
            </div>

            {/* navbar  */}


        </Container>
    );
};

export default Header;