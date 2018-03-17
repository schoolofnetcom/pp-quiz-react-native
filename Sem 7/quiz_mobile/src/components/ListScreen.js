import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Font } from 'expo'
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Button,
    Text,
    H2,
    Footer,
    FooterTab
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FlatList, TouchableHighlight } from 'react-native'

import { thunkFetchAllSubject } from './../actions/subject/subjectThunks'

class ListScreen extends Component {
    static navigationOptions = {
        title: 'List',
        headerLeft: null
    }

    constructor(props) {
        super(props)
        this.state = { fontLoaded: false  }

        this.handleLogin = this.handleLogin.bind(this)
        this.renderItemFlatList = this.renderItemFlatList.bind(this)
        this.showQuestions = this.showQuestions.bind(this)
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        })

        this.setState({ fontLoaded: true })
        this.props.fetchAllSubject()
    }

    handleLogin(user) {
        this.props.login(user)
    }

    showQuestions({ questions }) {
        const { navigate } = this.props.navigation

        navigate('Quiz', { questions })
    }

    renderItemFlatList(item) {
        return (
            <TouchableHighlight underlayColor="transparent" onPress={ () => this.showQuestions(item)}>
                <Text style={style.itemListView}>{item.name}</Text>
            </TouchableHighlight>
        )
    }

    renderNull() {
        return (null)
    }

    renderTemplate() {
        const { email, password } = this.state
        const { navigate } = this.props.navigation
        const { subjects } = this.props

        return (
            <Container>
                <Content contentContainerStyle={style.container}>
                    <Grid>
                        <Row size={100} style={style.bgSecond}>
                            <FlatList
                                data={subjects}
                                renderItem={({ item }) => this.renderItemFlatList(item)}
                                keyExtractor={(item, index) => index} />
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
    render() {
        const { fontLoaded } = this.state

        return !fontLoaded ? this.renderNull() : this.renderTemplate()
    }
}

const style = {
    container: {
        flex: 1
    },
    bgSecond: {
        backgroundColor: '#ffffff'
    },
    itemListView: {
        padding: 15,
        borderBottomColor: '#263849',
        borderBottomWidth: 0.5,
        color: '#263849'
    }
}

const mapStateToProps = (state) => {
    return {
        subjects: state.subject.listSubject.subjects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllSubject: () => dispatch(thunkFetchAllSubject())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)