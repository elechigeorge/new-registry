import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getProfile } from '../action/profileAction';
import Moment from 'react-moment';


function StaffProfileGetScreen() {


    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const getProfileData = useSelector((state) => state.getProfile)

    const { loading, error, profile } = getProfileData


    useEffect(() => {
        if (userInfo) {
            dispatch(getProfile())
        }

    }, [userInfo])


    return (
        <>
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}

            <Fragment>
                <ListGroup className="mb-5 pb-5">

                    {Object.keys(profile).length !== 0 && (
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
                            <ListGroup.Item>Date of First Appointment: <Moment fromNow>{profile.fa_date}</Moment> </ListGroup.Item>
                            <ListGroup.Item>Date of Last Upgrade: <Moment fromNow>{profile.upgrade_date}</Moment></ListGroup.Item>
                            <ListGroup.Item>File Number: {profile.file_no}</ListGroup.Item>
                            <ListGroup.Item>Remark: {profile.remark}</ListGroup.Item>
                        </Fragment>
                    )}


                </ListGroup>

            </Fragment>



        </>
    )
}

export default StaffProfileGetScreen
