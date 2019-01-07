import React from 'react'
import { AppRegistry } from 'react-native'
import { Todo } from './src/app/todo'
import { Fancy } from "./src/app/fancy"
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const Main = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
)

// const Main = () => (
//   <Fancy />
// )

AppRegistry.registerComponent('Todo', () => Main)