import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { thunkEditUser, thunkFetchUser } from './../../../actions/User/UserThunk'

class UserEdit extends Component {
    constructor(props) {
        super(props)

        this.state = { user: {} }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    async componentWillMount() {
        let { id } = this.props.match.params
        await this.props.fetchUser(id)
        this.setState({ ...this.state, user: this.props.editUser.user })
    }

    handleChangeInput(event) {
        const { target } = event
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value
        
        let { user } = this.state
        user[name] = value
        return this.setState({ user })
    }

    handleEdit(user) {
        this.props.handleEditUser(user)
        this.props.history.push('/user/list')
    }

    render() {
        let { user } = this.state

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Edit a User
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">User Name:</Label>
                                        <Input type="text" name="name" value={ user.name || '' } placeholder="Enter user name:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email:</Label>
                                        <Input type="email" name="email" value={ user.email || '' } placeholder="Enter email:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password:</Label>
                                        <Input type="password" name="password" placeholder="Enter subject password:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check htmlFor="active"></Label>
                                        <Input type="checkbox" name="active" checked={ user.active || false } defaultChecked={ user.active } onChange={this.handleChangeInput} /> Active? 
                                    </FormGroup>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary" onClick={() => this.handleEdit(user)}>Edit</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editUser: state.userStore.editUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEditUser: (user) => dispatch(thunkEditUser(user)),
        fetchUser: (id) => dispatch(thunkFetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)