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
import { thunkFetchSubjectList, thunkDeleteSubject } from './../../../actions/Subject/SubjectThunk'

class SubjectList extends Component {
    constructor(props) {
        super(props)
        
        this.handleDeleteSubject = this.handleDeleteSubject.bind(this)
    }

    componentDidMount() {
        this.props.fetchSubjectList()
    }

    handleDeleteSubject(subject) {
        return this.props.deleteSubject(subject)
    }

    render() {
        let { subjectList } = this.props
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader>
                                Listing
                            </CardHeader>
                            <CardBody>
                                <Link to="/subject/new" className="btn btn-primary mb-4">Create new subject</Link>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { subjectList.subjects.map((subject, index) => (
                                            <tr key={subject._id}>
                                                <td>{ subject.name }</td>
                                                <td>{ subject.description }</td>
                                                <td>
                                                    <Button color="warning" onClick={e => this.handleDeleteSubject(subject) }>Delete</Button>
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
        subjectList: state.subjectStore.subjectList,
        deleteSubject: state.subjectStore.deleteSubject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSubjectList: () => dispatch(thunkFetchSubjectList()),
        deleteSubject: (subject) => dispatch(thunkDeleteSubject(subject))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList)