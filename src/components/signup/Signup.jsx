import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Signup() {
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value)
            return setErr('Passwords do not match');
        try {
            setErr('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            window.location.pathname = '/';
        } catch (e) {
            setErr(e.message.slice(9));
        }
        setLoading(false);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {err && <Alert variant="danger">{err}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                required
                                ref={emailRef}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                ref={passwordRef}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type="password"
                                required
                                ref={passwordConfirmRef}
                            ></Form.Control>
                        </Form.Group>
                        <Button
                            type="sumbit"
                            className="w-100"
                            disabled={loading}
                        >
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account ? <Link to={'/login'}>Log In</Link>
            </div>
        </>
    );
}

export default Signup;
