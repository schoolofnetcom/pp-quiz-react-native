import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import SubjectList from '../../views/Subject/SubjectList'
import SubjectCreate from '../../views/Subject/SubjectCreate' 
import UserCreate from '../../views/User/UserCreate'
import UserList from '../../views/User/UserList'
import UserEdit from '../../views/User/UserEdit'

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/subject/list" name="SubjectList" component={SubjectList} />
                <Route path="/subject/new" name="SubjectCreate" component={SubjectCreate} />
                <Route path="/user/list" name="UserList" component={UserList} />
                <Route path="/user/new" name="UserCreate" component={UserCreate} />
                <Route path="/user/edit/:id" name="UserEdit" component={UserEdit} />
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
