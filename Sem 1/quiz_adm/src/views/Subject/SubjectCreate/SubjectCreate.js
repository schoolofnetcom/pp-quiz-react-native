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

class SubjectCreate extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Create new Subject
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">Subject Name:</Label>
                                        <Input type="text" name="name" placeholder="Enter subject name:"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="description">Subject Description:</Label>
                                        <Input type="textarea" name="description" placeholder="Enter subject description:"></Input>
                                    </FormGroup>
                                </Form>                                
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary">Create</Button>
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

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectCreate)