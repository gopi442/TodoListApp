/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

import { Router,Stack, Scene } from 'react-native-router-flux';
import store from './src/store'
import { Provider } from 'react-redux'
import Login from './src/Components/Login'
import Home from './src/Components/Login'
import TodoApp from './src/TodoApp'


// const App = () => (
// <Provider store={store}>
// {/* <Router>
//     <Stack key="root">
//       <Scene key="login" component={Login} title="Login"/>
//       <Scene key="home" component={Home}/>
//     </Stack>
//   </Router> */}

//   </Provider>
// );

export default class App extends Component {
  render() {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        {/* <TodoApp/> */}
        
        <Router>
          <Stack key="root">
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="home" component={Home}/>
            <Scene key="todoapp" hideNavBar= 'true' component={TodoApp}/>
          </Stack>
        </Router>
      </Provider>
    );
    }
}
