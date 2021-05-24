import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, Button, Row, Col, Tabs, Tab, Table } from 'react-bootstrap';

import ProfileCreateScreen from './UpdateProfileScreen';
import ProfileGetScreen from './GetStaffProfileScreen';
import AcademicGetScreen from './GetStaffAcademicScreen';
import UpdateAcademicScreen from './UpdateAcademicScreen';



function Dashboard() {

    const dispatch = useDispatch();



    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin





    return (
        <>
            <h1 className="large text-dark">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome {userInfo && userInfo.fullname}
            </p>
            <Fragment>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="text-dark">
                    <Tab eventKey="home" title="Update Profile" className="text-dark">
                        <p className="lead">Update Profile data</p>
                        <ProfileCreateScreen />
                    </Tab>
                    <Tab eventKey="leave" title="View Profile" className="text-dark">
                        <p className="lead">View Profile data</p>
                        <ProfileGetScreen />
                    </Tab>
                    <Tab eventKey="academic" title="Update Academic Data" className="text-dark">
                        <p className="lead">Update Academic data</p>
                        <UpdateAcademicScreen />
                    </Tab>
                    <Tab eventKey="directorates" title="View Academic Data" className="text-dark">
                        <p className="lead">View Academic Data</p>
                        <AcademicGetScreen />
                    </Tab>
                </Tabs>
            </Fragment>



        </>
    )
}

export default Dashboard;
