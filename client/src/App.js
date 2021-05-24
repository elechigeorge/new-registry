import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

import HomeScreen from './screens/HomeScreen';
import StaffLoginScreen from './screens/StaffLoginScreen';
import StaffRegisterScreen from './screens/StaffRegisterScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import AdminRegisterScreen from './screens/AdminRegisterScreen';
import StaffDashboardScreen from './screens/StaffDashboardScreen';
import AdminDashboardScreen from './screens/AdminDashboardScreen';

import AboutScreen from './screens/AboutScreen';
import FAQScreen from './screens/FAQScreen';
import HelpScreen from './screens/HelpScreen';



const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Route path='/' component={HomeScreen} exact />
        <Container>
          <Route path='/staff/login' component={StaffLoginScreen} />
          <Route path='/staff/register' component={StaffRegisterScreen} />

          <Route path='/admin/login' component={AdminLoginScreen} />
          <Route path='/admin/register' component={AdminRegisterScreen} />

          <Route path='/staff/dashboard' component={StaffDashboardScreen} />
          <Route path='/admin/dashboard' component={AdminDashboardScreen} />

          <Route path='/about' component={AboutScreen} />
          <Route path='/help' component={HelpScreen} />
          <Route path='/faq' component={FAQScreen} />

        </Container>
      </main>

    </Router>
  )
}

export default App;