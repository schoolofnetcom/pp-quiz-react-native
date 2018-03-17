import React, { Component } from 'react'
import {
    Container,
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
import { thunkLogin } from './../../actions/Auth/AuthThunk'

class Login extends Component {
    
    constructor(props) {
        super(props)

        this.state = { user: { email: '', password: '' } }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChangeInput(event) {
        const { target } = event
        const { value, name } = target

        let { user } = this.state
        user[name] = value
        return this.setState({ user })
    }

    handleLogin(user) {
        console.log(user)
        this.props.handleLogin(user)
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="12" md="8">
                            <Card>
                                <CardHeader>
                                    Login
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <FormGroup>
                                            <Label htmlFor="email">Email:</Label>
                                            <Input type="text" name="email" placeholder="Enter email:" onChange={this.handleChangeInput}></Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="password">Password:</Label>
                                            <Input type="password" name="password" placeholder="Enter password:" onChange={this.handleChangeInput}></Input>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button type="button" color="primary" onClick={() => this.handleLogin(this.state.user)}>Login</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.authStore.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (user) => dispatch(thunkLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)