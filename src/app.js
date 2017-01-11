import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import reducers from './reducers'
import * as reducers from './reducers'

import { Container, Start, Game01, GameCricket, DeviceSetting } from './components'

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Container}>
            <IndexRoute component={Start} />
            <Route path="_Game01" component={Game01} />
            <Route path="_GameCricket" component={GameCricket} />
            <Route path="_DeviceSetting" component={DeviceSetting} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
