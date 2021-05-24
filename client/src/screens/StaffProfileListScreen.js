import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getAllProfiles } from '../action/profileAction';
import { getAllAcademics } from '../action/academicAction';
import Moment from 'react-moment';

function StaffProfileListScreen() {


    const dispatch = useDispatch();

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const getAllProfile = useSelector((state) => state.getAllProfiles)
    const { loading, error, profiles } = getAllProfile

    const getAllAcademic = useSelector((state) => state.getAllAcademics)
    const { academics } = getAllAcademic


    useEffect(() => {
        if (adminInfo) {
            dispatch(getAllProfiles())
            dispatch(getAllAcademics())
        }


    }, [dispatch, adminInfo])


    return (
        <>
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}

            <Fragment>
                <ListGroup className="mb-5 pb-5">
                    <div>
                        {profiles && (
                            <p className="lead">Total number of staffs <span className="p-1 bg-dark text-light b">{profiles && profiles.length}</span> </p>
                        )}

                    </div>
                    <hr />
                    {profiles && profiles.map(profile => (
                        <Fragment>

                            <h4 className="">{profile.user.fullname} profile</h4>
                            <ListGroup.Item>Title: {profile.title}</ListGroup.Item>
                            <ListGroup.Item>Name: {profile.user.fullname}</ListGroup.Item>
                            <ListGroup.Item>Gender: {profile.gender}</ListGroup.Item>
                            <ListGroup.Item>Number of Children: {profile.children}</ListGroup.Item>
                            <ListGroup.Item>Date of Birth: <Moment format="YYYY/MM/DD">{profile.birth_date}</Moment></ListGroup.Item>
                            <ListGroup.Item>Marital Status: {profile.marital_status}</ListGroup.Item>
                            <ListGroup.Item>Staff ID: {profile.user.staffId}</ListGroup.Item>
                            <ListGroup.Item>Email: {profile.user.email}</ListGroup.Item>
                            <ListGroup.Item>LGA: {profile.lga}</ListGroup.Item>
                            <ListGroup.Item>State: {profile.state}</ListGroup.Item>

                            <ListGroup.Item>Department: {profile.department}</ListGroup.Item>
                            <ListGroup.Item>Status: {profile.status}</ListGroup.Item>
                            <ListGroup.Item>Date of First Appointment: <Moment fromNow>{profile.fa_date}</Moment></ListGroup.Item>
                            <ListGroup.Item>Date of Last Upgrade: <Moment fromNow>{profile.upgrade_date}</Moment></ListGroup.Item>
                            <ListGroup.Item>File Number: {profile.file_no}</ListGroup.Item>
                            <ListGroup.Item>Remark: {profile.remark}</ListGroup.Item>
                        </Fragment>
                    ))}
                    {academics && academics.map(academic => (
                        <Fragment>
                            <p className="lead">Academic Profile</p>
                            <ListGroup.Item>Category: {academic.category}</ListGroup.Item>
                            <ListGroup.Item>Designation: {academic.designation}</ListGroup.Item>
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
                    ))}
                    <hr />
                    <br />
                </ListGroup>

            </Fragment>



        </>
    )
}

export default StaffProfileListScreen
