import {combineReducers} from 'redux'
// import all reducers here
import islogged from './islogged'
import pagename from './pagename'

const allReducers = combineReducers({
    // imported reducers
    islogged: islogged,
    pagename: pagename
})

export default allReducers