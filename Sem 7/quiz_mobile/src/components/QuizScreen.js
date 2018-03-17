import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Font } from 'expo'
import {
    Container,
    Content,
    Button,
    Text,
    H3,
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { View, TouchableHighlight } from 'react-native'
import Swiper from 'react-native-swiper'


class QuizScreen extends Component {
    static navigationOptions = { title: 'Quiz' }

    constructor(props) {
        super(props)
        this.state = { fontLoaded: false, index: 0, result: 0 }
        this.handleResult = this.handleResult.bind(this)
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        })

        this.setState({ fontLoaded: true })
    }

    handleResult(answer) {
        let { result, index } = this.state
        const { params } = this.props.navigation.state

        if (answer.correct) {
            result++
            this.setState({
                result
            })
        }

        this.refs.swiper.scrollBy(index + 1)

        if (index + 1 === params.questions.length) {
            return this.props.navigation.navigate('Result', { 
                result
            })
        }
    }

    renderNull() {
        return (null)
    }

    renderTemplate() {
        const { index } = this.state
        const { params } = this.props.navigation.state
        return (
            <Container>
                <Content contentContainerStyle={style.container}>
                    <Grid>
                        <Row size={100} style={style.bgSecond}>
                            <Swiper
                                style={style.containerSwiper}
                                ref='swiper'
                                loop={false}
                                index={index}
                                onIndexChanged={(index) => this.setState({ index })}
                            >
                                { params.questions.map((question) => {
                                    return (
                                        <View key={question._id} style={style.containerView}>
                                            <H3 style={style.h3}>{question.text}</H3>
                                            { question.answers.map((answer) => {
                                                return (
                                                    <TouchableHighlight key={answer._id} onPress={() => this.handleResult(answer)} underlayColor="#263849">
                                                        <Text>{answer.text}</Text>
                                                    </TouchableHighlight>
                                                )
                                            }) }
                                        </View>
                                    )
                                }) }
                            </Swiper>
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
    containerSwiper: {
        marginTop: 30
    },
    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'        
    },
    bgSecond: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h3: {
        marginBottom: 30
    }
}

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)