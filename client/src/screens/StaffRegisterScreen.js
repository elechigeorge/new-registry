import api from '../utils/api'

import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../action/userAction'

const StaffRegisterScreen = ({ match, history }) => {


    const [fullname, setFullName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [email, setEmail] = useState('')
    const [staffId, setStaffID] = useState('')
    const [role, setRole] = useState('staff')
    const [password, setPassword] = useState('')
    const [uploading, setUploading] = useState(false)

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister



    if (userInfo) {
        return <Redirect to="/staff/dashboard" />
    }






    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('avatar', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await api.post('/upload', formData, config)

            setAvatar(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            register(staffId, fullname, email, role, avatar, password))
    }

    return (
        <>
            <FormContainer>
                <h1>Staff Register</h1>

                {loading && <Loader />}
                {error && <Message variant='danger'>{error}</Message>}

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='image'>
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Select account image'
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value)}
                            disabled
                        ></Form.Control>
                        <Form.File
                            id='image-file'
                            label='Choose File'
                            custom
                            onChange={uploadFileHandler}
                        ></Form.File>
                        {uploading && <Loader />}
                    </Form.Group>


                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter Full Name'
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='price'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='staffId'>
                        <Form.Label>Staff ID</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Staff ID'
                            value={staffId}
                            onChange={(e) => setStaffID(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='staffId'>
                        <Form.Label>Account Type</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Role'
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            disabled
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='staffId'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter secure passcode'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='dark' className="btn-block">Register</Button>
                </Form>

                <Row className='py-3'>
                    <Col>
                        Have an account ?{' '}
                        <Link to={'/staff/login'}>
                            Login
          </Link>
                    </Col>
                </Row>

            </FormContainer>
        </>
    )
}

export default StaffRegisterScreen