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
import { thunkCreateAnswer } from './../../../actions/Answer/AnswerThunk'

class AnswerCreate extends Component {
    constructor(props) {
        super(props)

        this.state = { answer: { text: '', correct: false } }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
    }

    handleChangeInput(event) {
        const { target } = event
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value

        let { answer } = this.state
        answer[name] = value
        return this.setState({ answer })
    }

    handleCreate(answer) {
        answer.question = this.props.match.params.id
        this.props.createAnswer(answer)
        // this.state.question = { text: '', subject: '' }
        this.props.history.push('/answer/list')
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Create new Answer
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">Answer Text:</Label>
                                        <Input type="text" name="text" placeholder="Enter answer text:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                                <Input type="checkbox" name="correct" onChange={this.handleChangeInput} />
                                                Correct?
                                        </Label>
                                    </FormGroup>                                    
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary" onClick={() => this.handleCreate(this.state.answer)}>Create</Button>
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
        newAnswer: state.answerStore.newAnswer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAnswer: (answer) => dispatch(thunkCreateAnswer(answer)),
        fetchQuestionList: () => dispatch(thunkFetchQuestionList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerCreate)