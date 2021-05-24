import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createProfile } from '../action/profileAction'
import DatePicker from "react-datepicker";



function UpdateProfileScreen() {


    const [fullname, setFullName] = useState('')
    const [title, setTitle] = useState('')
    const [department, setDepartment] = useState('')
    const [gender, setGender] = useState('')
    const [file_no, setFileNo] = useState('')
    const [status, setStatus] = useState('')
    const [marital_status, setMaritalStatus] = useState('')
    const [children, setChildren] = useState('')
    const [fa_date, setFADate] = useState('')
    const [upgrade_date, setUpgradeDate] = useState('')
    const [birth_date, setBirthDate] = useState('')
    const [lga, setLga] = useState('')
    const [state, setState] = useState('')
    const [remark, setRemark] = useState('')


    const dispatch = useDispatch()



    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin;



    const profileCreate = useSelector((state) => state.profileCreate)
    const {
        loading,
        error,
        success
    } = profileCreate;

    useEffect(() => {
        if (success) {
            window.alert("Successful")
        }

    }, [profileCreate])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProfile({
            fullname,
            title,
            department,
            gender,
            file_no,
            status,
            marital_status,
            children,
            fa_date,
            upgrade_date,
            birth_date,
            lga,
            state,
            remark
        }))

        setFullName('')
        setTitle('')
        setDepartment('')
        setGender('')
        setFileNo('')
        setStatus('')
        setMaritalStatus('')
        setChildren('')
        setFADate('')
        setFileNo('')
        setBirthDate('')
        setLga('')
        setState('')
        setRemark('')
        setUpgradeDate('')
    }


    return (
        <div>

            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}

            <Form onSubmit={submitHandler} style={{ width: "70%" }}>

                <Form.Group controlId='name'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>Names</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Names'
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                    ></Form.Control>
                </Form.Group>


                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                        as="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="default">default</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='dater'>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type='date'
                        placeholder='Enter date of birth'
                        value={birth_date}
                        onChange={(e) => setBirthDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='credit'>
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter Marital Status'
                        value={marital_status}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='debit'>
                    <Form.Label>Children</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Number of Children'
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bank'>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='State'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='ba'>
                    <Form.Label>LGA</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Local govt. area'
                        value={lga}
                        onChange={(e) => setLga(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bnk'>
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='de'>
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Department'
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bank'>
                    <Form.Label>File Number</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='File Number'
                        value={file_no}
                        onChange={(e) => setFileNo(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bank'>
                    <Form.Label>Date of First Appointment</Form.Label>
                    <Form.Control
                        type='date'
                        placeholder='Date'
                        value={fa_date}
                        onChange={(e) => setFADate(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bank'>
                    <Form.Label>Date of Last Upgrade</Form.Label>
                    <Form.Control
                        type='date'
                        placeholder='Date'
                        value={upgrade_date}
                        onChange={(e) => setUpgradeDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='bank'>
                    <Form.Label>Remark</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Remarks'
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='dark' className="btn-block btn-md my-2">
                    Update
            </Button>
                <div className="mb-5">

                </div>
            </Form >



        </div >
    )
}

export default UpdateProfileScreen;