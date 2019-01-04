import React from 'react'
import { AppRegistry, StyleSheet } from 'react-native'
import { Todo } from './src/app/todo'
import { Fancy } from "./src/app/fancy"
import { Reddit } from "./src/app/reddit"

const Main = () => (<Todo />)

AppRegistry.registerComponent('Todo', () => Main)