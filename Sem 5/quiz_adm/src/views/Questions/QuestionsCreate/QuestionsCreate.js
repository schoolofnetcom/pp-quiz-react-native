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
import { thunkCreateQuestion } from './../../../actions/Question/QuestionThunk'
import { thunkFetchSubjectList } from './../../../actions/Subject/SubjectThunk'

class QuestionsCreate extends Component {
    constructor(props) {
        super(props)

        this.state = { question: { text: '', subject: '' } }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
    }

    componentDidMount() {
        this.props.fetchSubjectList()
    }

    handleChangeInput(event) {
        const { target } = event
        const { value, name }  = target

        let { question } = this.state
        question[name] = value
        return this.setState({ question })
    }

    handleCreate(question) {
        console.log(question)
        this.props.createQuestion(question)
        this.state.question = { text: '', subject: '' }
        this.props.history.push('/question/list')
    }

    render() {
        console.log(this.props)

        const renderOptions = this.props.subjectList.map((subject) => {
            return (<option key={subject._id} value={subject._id}>{subject.name}</option>)
        })

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Create new Question
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="name">Question Text:</Label>
                                        <Input type="text" name="text" placeholder="Enter question text:" onChange={this.handleChangeInput}></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="subject">Subject:</Label>
                                        <Input type="select" name="subject" placeholder="Enter subject description:" onChange={this.handleChangeInput}>
                                            {renderOptions}
                                        </Input>
                                    </FormGroup>
                                </Form>                                
                            </CardBody>
                            <CardFooter>
                                <Button type="button" color="primary" onClick={ () => this.handleCreate(this.state.question) }>Create</Button>
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
        question: state.questionStore.newQuestion,
        subjectList: state.subjectStore.subjectList.subjects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createQuestion: (question) => dispatch(thunkCreateQuestion(question)),
        fetchSubjectList: () => dispatch(thunkFetchSubjectList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsCreate)