import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Table
} from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { thunkFetchQuestionList, thunkDeleteQuestion } from './../../../actions/Question/QuestionThunk'

class QuestionList extends Component {
    constructor(props) {
        super(props)
        
        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this)
        this.handleAnswerList = this.handleAnswerList.bind(this)
    }

    componentDidMount() {
        this.props.fetchQuestionList()
    }

    handleDeleteQuestion(question) {
        return this.props.deleteQuestion(question)
    }

    handleAnswerList(question) {        
        return this.props.history.push({
            pathname: `/question/${question._id}/answer/list`,
            state: { question }
        })
    }

    render() {
        let { questionList } = this.props
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Listing
                            </CardHeader>
                            <CardBody>
                                <Link to="/question/new" className="btn btn-primary mb-4">Create new question</Link>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Text</th>
                                            <th>Subject</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { questionList.questions.map((question, index) => (
                                            <tr key={question._id}>
                                                <td>{ question.text }</td>
                                                <td>{ question.subject.name }</td>
                                                <td>
                                                    <Button color="warning" onClick={e => this.handleDeleteQuestion(question) }>Delete</Button>
                                                    <Button color="info" onClick={ e=> this.handleAnswerList(question) }>See Answers</Button>
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
        questionList: state.questionStore.questionList,
        deleteQuestion: state.questionStore.deleteQuestion
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestionList: () => dispatch(thunkFetchQuestionList()),
        deleteQuestion: (question) => dispatch(thunkDeleteQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)