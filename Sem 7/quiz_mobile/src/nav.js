import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import HomeScreen from './components/HomeScreen'
import SignupScreen from './components/SignupScreen'
import ListScreen from './components/ListScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'

export const RootNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Signup: { screen: SignupScreen },
    List: { screen: ListScreen },
    Quiz: { screen: QuizScreen } ,
    Result: { screen: ResultScreen }
})

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
)
const addListener = createReduxBoundAddListener('root')

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <RootNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
                addListener 
            })}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
}

const AppNav = connect(mapStateToProps)(Nav)
export default connect(mapStateToProps)(AppNav)