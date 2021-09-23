/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { VISIBILITY_FILTERS } from '../redux/constants';

import Todo from './Todo';
import { connect } from 'react-redux';

const getFilteredTodo = (todos, visibilityFilter) => {
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED: {
            return todos.filter((todo) => todo.completed)
        }
        case VISIBILITY_FILTERS.INCOMPLETE: {
            return todos.filter((todo) => !todo.completed)
        }
        case VISIBILITY_FILTERS.ALL: {
            return todos
        }
        default:
            return todos;
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    getTodoList = (todos) => {
        const todo_lst = todos.map((todo) => {
            return (
                <Todo key={todo.id}
                    todo={todo} />
            )
        })
        return todo_lst
    }
    getTempComp = () => {
        return (
            <Text>{'Nay , no todos found'}</Text>
        )
    }

    render() {
        const { todos } = this.props;
        const todo_lst = todos && todos.length ? this.getTodoList(todos) : this.getTempComp();
        return (
            <View style={styles.container}>
                {todo_lst}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const { allIds, byIds } = state.todos;
    const { visibilityFilter } = state;
    const todos_lst = allIds && allIds.length ? allIds.map((id) => (byIds ? { ...byIds[id], id } : null)) : null;
    const todos = getFilteredTodo(todos_lst, visibilityFilter);
    return {
        todos
    }
}

export default connect(mapStateToProps)(TodoList);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 20,
        height: 100
    }
})