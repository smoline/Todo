import React from 'react'
import { AppRegistry, StyleSheet } from 'react-native'
import { Todo } from './src/app/Todo'
import { Fancy } from "./src/app/Fancy"

const Main = () => (<Todo />)

AppRegistry.registerComponent('Todo', () => Main)