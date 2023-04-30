import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, verifiyedEmailSend } = useContext(AuthContext);
    const [accepted,setAccepted]=useState(false)
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                verifiyedEmailSend(result.user)
                    .then(result => {
                        console.log("Please Email Varifications")
                    }).catch(error => {

                    })
            }).catch(error => {

            })
    }

const handleTerms=(e)=>{
    setAccepted(e.target.checked)
}


    return (
        <Container className='w-25 mx-auto my-4'>
            <h4 className='text-center'>Register Now</h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Enter Photo Url" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        name="terms"
                        onClick={handleTerms}
                        label="Agree to terms and conditions"
                        id="validationFormik0"
                    />
                </Form.Group>
                <Button type="submit" disabled={!accepted} >Register</Button>
                <br />
                <Form.Label>Already Have an Account? <Link to="/login">LogIn</Link></Form.Label>
            </Form>

        </Container >
    );
};

export default Register;