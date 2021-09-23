import React, {Component} from 'react';
import {View, StyleSheet ,Text} from 'react-native';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>{'Todo List'}</Text>
                <AddTodo />
                <TodoList />
                <VisibilityFilters />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'column',
        marginLeft : 20,
        marginTop : 60
    },
    heading : {
        fontSize : 22,
        color: 'gray',
        fontWeight : 'bold'
    }

})