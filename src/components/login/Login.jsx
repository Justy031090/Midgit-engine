import React, { useRef, useState } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Login() {
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, socialMediaAuth } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setErr('');
            setLoading(true);

            await login(emailRef.current.value, passwordRef.current.value);
            window.location.pathname = '/';
        } catch (e) {
            setErr('Failed to Log in');
        }
        setLoading(false);
    };
    const handleSocialMedia = async (e) => {
        e.preventDefault();
        try {
            setErr('');
            setLoading(true);
            await socialMediaAuth();
            window.location.pathname = '/';
        } catch (e) {
            setErr('Failed to Log in');
        }
        setLoading(false);
    };
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign In</h2>
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

                        <Button
                            type="sumbit"
                            className="w-100"
                            disabled={loading}
                        >
                            Sign In
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center mt-2 ">
                <Button onClick={handleSocialMedia}>Sign in With Google</Button>
            </div>

            <div className="w-100 text-center mt-2">
                Dont have an account ? <Link to={'/signup'}>Sign Up</Link>
            </div>
        </>
    );
}

export default Login;
