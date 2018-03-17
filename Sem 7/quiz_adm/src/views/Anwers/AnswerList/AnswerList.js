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
import { thunkDeleteAnswer } from './../../../actions/Answer/AnswerThunk'

class AnswerList extends Component {
    constructor(props) {
        super(props)

        this.state = { answers: [] }

        this.handleDeleteAnswer = this.handleDeleteAnswer.bind(this)
    }

    componentDidMount() {
        if (!this.props.location.state) {
            return this.props.history.push('/question/list')
        }

        return this.setState({
            answers: this.props.location.state.question.answers
        })
    }

    handleDeleteAnswer(answer) {
        answer.question = this.props.match.params.id
        this.props.deleteAnswer(answer)

        return this.props.history.push('/question/list')
    }

    render() {
        let { answers } = this.state
        
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
                                            <th>Correct</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {answers.map((answer, index) => (
                                            <tr key={answer._id}>
                                                <td>{answer.text}</td>
                                                <td>{answer.correct}</td>
                                                <td>
                                                    <Button color="warning" onClick={e => this.handleDeleteAnswer(answer)}>Delete</Button>
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
        deleteAnswer: state.answerStore.deleteAnswer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAnswer: (answer) => dispatch(thunkDeleteAnswer(answer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList)