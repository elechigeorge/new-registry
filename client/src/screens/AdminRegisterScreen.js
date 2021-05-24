import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../action/adminAction'


const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [staffId, setStaffID] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')


    const dispatch = useDispatch()

    const adminRegister = useSelector((state) => state.adminRegister)
    const { loading, error, adminInfo } = adminRegister



    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(register(staffId, name, email, role, password))
    }

    if (adminInfo) {
        return <Redirect to="/admin/dashboard" />
    }

    return (
        <FormContainer>
            <h1>Register an account </h1>

            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Identification</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter Deployment ID'
                        value={staffId}
                        onChange={(e) => setStaffID(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='role'>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter designation'
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    ></Form.Control>
                    <Form.Text>i.e. Registrar, Rectory, etc...</Form.Text>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>



                <Button type='submit' variant='dark' className="btn-block">
                    Register
        </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account? {' '}
                    <Link to={'/admin/login'}>
                        Login
          </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen