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
import { AsyncStorage } from 'react-native'

import { thunkLogin } from './../actions/auth/authThunks'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Signup',
        header: null
    }

    constructor(props) {
        super(props)
        this.state = { fontLoaded: false, user: { email: '', password: '' } }

        this.handleLogin = this.handleLogin.bind(this)
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        })

        this.setState({ fontLoaded: true })

        const tokenUser = await AsyncStorage.getItem('user')
        if (tokenUser) {
            return this.props.navigation.navigate('List')
        }
    }

    handleLogin(user) {
        this.props.login(user)
    }

    renderNull() {
        return (null)
    }
    renderTemplate() {
        const { email, password } = this.state
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Content contentContainerStyle={style.container}>
                    <Grid>
                        <Row size={35} style={style.bgHead}>
                            <H2 style={style.bgHeadTitle}>Login</H2>
                        </Row>
                        <Row size={65} style={style.bgSecond}>
                            <Form style={style.form}>
                                <Item>
                                    <Input placeholder="Email: "
                                        name="email"
                                        value={email}
                                        onChangeText={(text) => this.setState({ user: { ...this.state.user, email: text } })} />
                                </Item>
                                <Item>
                                    <Input placeholder="Password: "
                                        name="password"
                                        value={password}
                                        secureTextEntry={true}
                                        onChangeText={(text) => this.setState({ user: { ...this.state.user, password: text } })} />
                                </Item>

                                <Text style={style.cta} onPress={ () => navigate('Signup')}>New? Create account</Text>
                            </Form>
                        </Row>
                    </Grid>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button block
                            onPress={() => this.handleLogin(this.state.user)}>
                            <Text>Login</Text>
                        </Button>
                    </FooterTab>
                </Footer>
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
    bgHead: {
        backgroundColor: '#263849',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bgHeadTitle: {
        color: '#ffffff'
    },
    bgSecond: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        flex: 1,
        marginTop: 60,
        marginBottom: 60,
        marginRight: 12
    },
    footer: {
        backgroundColor: '#ffffff'
    },
    footerTab: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#ffffff'
    },
    footerTabText: {
        color: '#243542'
    },
    footerTabBtn: {
        marginTop: 20,
        marginLeft: 15,
        baackgroundColor: '#243542'
    },
    cta: { 
        marginTop: 20    ,
        marginLeft: 20
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.userLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(thunkLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)