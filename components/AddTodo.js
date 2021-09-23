import React, {Component} from 'react';
import {View, StyleSheet ,Text, TextInput, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {addTodo} from '../redux/actions';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            text_val : " "
        }
    }
    handleChangeText = (text) => {
        this.setState({
            text_val : text
        })
    }
    handleAddClick = () => {
        const {text_val} = this.state;
        this.props.addTodo(text_val);
        this.setState({text_val : " "})
    }
    render(){
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.text_input}
                            value = {this.state.text_val}
                            onChangeText = {this.handleChangeText}/>
                <TouchableOpacity style = {styles.add_button}
                onPress = {this.handleAddClick}>
                    <Text style = {styles.add_text}>{'Add Todo'}</Text>
                </TouchableOpacity>            
            </View>
        )
    }
}

export default connect(null,
    {addTodo})(AddTodo)

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignContent : 'flex-start',
        justifyContent : 'flex-start',
        marginTop : 15 
    },
    text_input : {
        borderWidth : 1.5,
        borderColor: 'gray',
        height: 35,
        width : 200,
        borderRadius : 4
    },
    add_button : {
        height : 30,
        width : 80,
        borderWidth : 2,
        borderColor: 'gray',
        marginLeft : 20,
        backgroundColor : 'lightgray',
        borderRadius : 4
    },
    add_text : {
        textAlign : 'center',
        fontWeight : 'bold'
    }
})