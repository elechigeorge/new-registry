import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Table, Button } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getAllProfiles } from '../action/profileAction';
import { getAllAcademics } from '../action/academicAction';


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
                <p className="lead">Number of Staff's {profiles && profiles.length}</p>
            </Fragment>



        </>
    )
}

export default StaffProfileListScreen
