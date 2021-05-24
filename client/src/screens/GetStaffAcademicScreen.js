import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Table, Button, Badge } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getAcademic } from '../action/academicAction';
import Moment from 'react-moment';


function StaffAcademicGetScreen() {


    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const getAcademicData = useSelector((state) => state.getAcademics)

    const { loading, error, academic } = getAcademicData


    useEffect(() => {
        if (userInfo) {
            dispatch(getAcademic())
        }

    }, [userInfo])


    return (
        <>
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}

            <Fragment>
                <ListGroup className="mb-5 pb-5">

                    {Object.keys(academic).length !== 0 && (
                        <Fragment>

                            <h4 className="">{userInfo.fullname} Academic Information</h4>
                            <Fragment>

                                <ListGroup.Item>Category: {academic.category}</ListGroup.Item>
                                <ListGroup.Item>Designation: {academic.designation}</ListGroup.Item>
                                <ListGroup.Item>Date of First Appointment: <Moment fromNow>{academic.fa_date}</Moment></ListGroup.Item>
                                <ListGroup.Item>
                                    Academic Qualifications:
                                {academic.academic_qualification && academic.academic_qualification.map(qua => (
                                    <Fragment><span className="btn btn-sm btn-dark mx-1">{qua}</span></Fragment>
                                ))}
                                </ListGroup.Item>
                                <ListGroup.Item>Enjoyed Est. Structure:
                            {academic.est_structure && academic.est_structure.map(qua => (
                                    <Fragment><span className="btn btn-sm btn-dark mx-1">{qua}</span></Fragment>
                                ))}
                                </ListGroup.Item>
                            </Fragment>
                        </Fragment>
                    )}


                </ListGroup>

            </Fragment>



        </>
    )
}

export default StaffAcademicGetScreen