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
import { thunkCreateUser } from './../../../actions/User/UserThunk'

class UserCreate extends Component {
    constructor(props) {
        super(props)

        this.state = { user: { name: '', email: '', password: '' } }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
    }

    handleChangeInput(event) {
        const { target } = event
        const { value, name }  = target

        let { user } = this.state
        user[name] = value
        return this.setState({ user })
    }

    handleCreate(user) {
        this.props.createUser(user)
        this.props.history.push('/user/list')
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Create new User
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">User Name:</Label>
                                        <Input type="text" name="name" placeholder="Enter user name:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="email">Email:</Label>
                                        <Input type="email" name="email" placeholder="Enter email:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password:</Label>
                                        <Input type="password" name="password" placeholder="Enter subject password:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                </Form>                                
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary" onClick={ () => this.handleCreate(this.state.user) }>Create</Button>
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
        user: state.userStore.newUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(thunkCreateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCreate)