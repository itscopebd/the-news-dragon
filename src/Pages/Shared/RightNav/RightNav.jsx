import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
const RightNav = () => {
    return (
        <div className='my-5'>
            <h4>Login Width</h4>
            <div>
                <Button size="md" className='w-100 mt-1' variant="outline-secondary">  <FaGoogle></FaGoogle> Login width Google</Button>
                <Button size="md" className='w-100 mt-3' variant="outline-secondary"> <FaGithub /> Login Width Github</Button>
            </div>


            <div className='my-4'>
                <h3>Find On Us</h3>
                <ListGroup>
                    <ListGroup.Item> <span className='fs-5 bg-dark text-white w-50 h-50 rounded me-2'> <FaFacebookF /></span> Facebook</ListGroup.Item>
                    <ListGroup.Item>  <span className='fs-5 bg-dark text-white w-25 h-25 rounded me-2'><FaTwitter /></span> Twitter</ListGroup.Item>
                    <ListGroup.Item>  <span className='fs-5 bg-dark text-white w-25 h-25 rounded me-2'><FaInstagram /> </span>Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;