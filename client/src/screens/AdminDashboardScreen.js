import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, Button, Row, Col, Tabs, Tab, Table } from 'react-bootstrap';

import StaffProfileList from './StaffProfileListScreen'



function Dashboard() {

    const dispatch = useDispatch();



    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin





    return (
        <>
            <h1 className="large text-dark">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome {adminInfo && adminInfo.name}
            </p>
            <Fragment>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="text-dark">
                    <Tab eventKey="home" title="Staff's Profile List" className="text-dark">
                        <StaffProfileList />
                    </Tab>
                    <Tab eventKey="leave" title="Faculty Available" className="text-dark">
                        <Table striped bordered hover size="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Faculty</th>
                                    <th>Abbreviation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Faculty of Agriculture Technology  </td>
                                    <th>FAT</th>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Faculty of Applied Sciences   </td>
                                    <th>FAS</th>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>Faculty of Engineering Technology  </td>
                                    <th>FENG</th>

                                </tr>
                                <tr>
                                    <th>4</th>
                                    <td>Faculty of Environmental  Technology  </td>
                                    <th>FET</th>

                                </tr>
                                <tr>
                                    <th>5</th>
                                    <td>Faculty of Business Studies   </td>
                                    <th>FBS</th>

                                </tr>
                                <tr>
                                    <th>6</th>
                                    <td>Faculty of Social  Communication  Studies  </td>
                                    <th>FSCS</th>

                                </tr>

                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="directorates" title="Available Directorates" className="text-dark">

                        <Table striped bordered hover size="md">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Office</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Directorate of Personal Affairs (Senior)</td>

                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td >Directorate of Personal Affairs (Junior)</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Directorate of Council Affairs</td>

                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td >Directorate of General Administration</td>

                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td >Directorate of Board of Studies</td>

                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td >Directorate of Academic Records</td>

                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td >Directorate of Academic Affairs</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Fragment>



        </>
    )
}

export default Dashboard;
