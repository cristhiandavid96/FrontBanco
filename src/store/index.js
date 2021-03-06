import { createStore } from 'redux'
import reducers from './reducers/index'

export default () => {
    return {
        ...createStore(reducers)
    }
}

// store()