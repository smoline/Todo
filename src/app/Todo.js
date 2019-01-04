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

  componentWillMount() {
    fetch('http://localhost:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({todos}))
  }

  handleChange(text) {
    this.setState({ newTodo: text })
  }

  handlePress() {
    fetch('http://localhost:3000/todos', {
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      const todos = [data, ...this.state.todos]
      this.setState({ todos, newTodo: '' })
    })
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
              <Text style={styles.todoText}>{todo.name}</Text>
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