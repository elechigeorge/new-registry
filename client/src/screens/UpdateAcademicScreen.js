import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from "react-bootstrap";

import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createAcademics } from '../action/academicAction'




function UpdateAcademicScreen() {


    const [academic_qualification, setAcademic] = useState('')
    const [category, setCategory] = useState('')
    const [designation, setDesignation] = useState('')
    const [est_structure, setStructure] = useState('')
    const [fa_date, setFADate] = useState('')

    const dispatch = useDispatch()



    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;



    const academicsCreate = useSelector((state) => state.academicsCreate)
    const {
        loading,
        error,
        success
    } = academicsCreate;

    useEffect(() => {
        if (success) {
            window.alert("Successful")
        }

    }, [academicsCreate])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createAcademics({
            academic_qualification,
            category,
            designation,
            est_structure,
            fa_date
        }))

        setAcademic('')
        setCategory('')
        setDesignation('')
        setStructure('')
        setFADate('')
    }


    return (
        <div>

            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}

            <Form onSubmit={submitHandler} style={{ width: "70%" }}>

                <Form.Group controlId='qua'>
                    <Form.Label>Qualifications</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter comma separated qualifications i.e ND, HND, SSCE'
                        value={academic_qualification}
                        onChange={(e) => setAcademic(e.target.value)}
                    ></Form.Control>
                    <Form.Text>Make sure your qualifications are comma separated </Form.Text>
                </Form.Group>

                <Form.Group controlId='name'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter Category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='credit'>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Designation'
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='debit'>
                    <Form.Label>Enjoyed Establishment Structure</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Comma separated value of the establishement structure enjoyed'
                        value={est_structure}
                        onChange={(e) => setStructure(e.target.value)}
                    ></Form.Control>
                    <Form.Text>Make sure your inputs are comma separated </Form.Text>

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



                <Button type='submit' variant='dark' className="btn-block btn-md my-2">
                    Update
            </Button>
                <div className="mb-5">

                </div>
            </Form >



        </div >
    )
}

export default UpdateAcademicScreen;