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


class ResultScreen extends Component {
    static navigationOptions = { title: 'Quiz' }

    constructor(props) {
        super(props)
        this.state = { fontLoaded: false, result: 0 }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        })

        this.setState({ fontLoaded: true })
    }


    renderNull() {
        return (null)
    }

    renderTemplate() {
        const { params } = this.props.navigation.state
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Content contentContainerStyle={style.container}>
                    <Grid>
                        <Row size={100} style={style.bgSecond}>
                            <View style={style.containerView}>
                                <H3>Correct Answers: {params.result}</H3> 
                                <Text onPress={() => navigate('List')}>Back to list</Text>
                            </View>
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
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)