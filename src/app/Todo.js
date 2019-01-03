import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }

    console.warn(JSON.stringify(this.state, null, 2))
  }

  handleChange(text) {
    this.setState({ newTodo: text })
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({ todos, newTodo: '' })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Type Todo Here"
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity onPress={this.handlePress.bind(this)}
                            style={styles.button}>
            <Text style={styles.buttonText}>make</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View style={styles.todo} key={i}>
              <Text style={styles.todoText}>{todo}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },

  form: {
    flexDirection: 'row'
  },

  input: {
    flex: 0.7,
    fontSize: 24
  },

  button: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  todos: {
    marginTop: 60
  },
  
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },

  todoText: {
    fontSize: 24
  }
})