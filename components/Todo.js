import React, {Component} from 'react';
import {View, StyleSheet ,Text, TouchableOpacity} from 'react-native';

import {connect } from 'react-redux';
import {toggleTodo} from '../redux/actions';

class Todo extends Component{
    constructor(props){
        super(props);
    }
    handleTodoClick = () => {
        const {id} = this.props.todo;
        this.props.toggleTodo(id);
    }
    render(){
        const {todo} = this.props;
        const {content, completed, id} = todo;
        const text_color = completed? "green": "red";
        return (
            <TouchableOpacity style = {styles.text_container}
            onPress = {this.handleTodoClick}>
                <Text style = {[styles.todo_text,{color : text_color}]}>{content}</Text>
            </TouchableOpacity>
        )
    }
}

export default connect(null,
    {toggleTodo})(Todo);

const styles = StyleSheet.create({
    text_container : {
        marginTop : 5
    },
    todo_text : {}
})