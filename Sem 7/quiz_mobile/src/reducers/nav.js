import { NavigationActions } from 'react-navigation'
import { RootNavigator } from './../nav'

const INITIAL_STATE = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams('Home')
)

export default (state = INITIAL_STATE, action) => {
    let nextState

    switch(action.type) {
        default:
            nextState = RootNavigator.router.getStateForAction(action, state)   
        break
    }

    return nextState || state
}