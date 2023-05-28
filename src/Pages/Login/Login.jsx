import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle("Register")
    const { singIn } = useContext(AuthContext)
    // console.log(singIn)
    const location = useLocation();

    const navigate = useNavigate()
    const from=location.state?.form?.pathname || "/";

    const handleSingIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        singIn(email, password)
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser)
                navigate(from,{replace:true})
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <Container className='w-25 mx-auto my-4'>
             
            <h4 className='text-center'>Login Now</h4>
            <Form onSubmit={handleSingIn}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        isInvalid="{!!errors.terms}"
                        feedback="{errors.terms}"
                        feedbackType="invalid"
                        id="validationFormik0"
                    />
                </Form.Group>
                <Button type="submit">LogIn</Button>
                <br />
                <Form.Label>Don't Have an Account? <Link to="/register">Register</Link></Form.Label>
            </Form>

        </Container >
    );
};

export default Login;