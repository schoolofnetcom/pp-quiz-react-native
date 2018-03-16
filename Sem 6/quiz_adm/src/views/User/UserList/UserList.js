import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Table,
    Badge
} from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { thunkFetchUserList } from './../../../actions/User/UserThunk'

class UserList extends Component {
    constructor(props) {
        super(props)
        
        // this.handleDeleteSubject = this.handleDeleteSubject.bind(this)
    }

    componentDidMount() {
        this.props.fetchUserList()
    }

    // handleDeleteSubject(subject) {
    //     return this.props.deleteSubject(subject)
    // }

    render() {
        let { userList } = this.props
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Listing
                            </CardHeader>
                            <CardBody>
                                <Link to="/user/new" className="btn btn-primary mb-4">Create new user</Link>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Active</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { userList.users.map((user, index) => (
                                            <tr key={ user._id }>
                                                <td>{ user.name }</td>
                                                <td>{ user.email }</td>
                                                <td>{user.active ? <Badge color="primary">Active</Badge> : <Badge color="danger">Deactive</Badge> }</td>
                                                <td>
                                                    <Link to={`/user/edit/${user._id}`} className="btn btn-info">Edit</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userStore.userList,
        // deleteSubject: state.subjectStore.deleteSubject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserList: () => dispatch(thunkFetchUserList()),
        // deleteSubject: (subject) => dispatch(thunkDeleteSubject(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)