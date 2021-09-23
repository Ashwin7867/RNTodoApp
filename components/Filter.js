import React, {Component} from 'react';
import {View, StyleSheet ,Text, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import {setFilter} from '../redux/actions';

class Filter extends Component{
    constructor(props){
        super(props)
    }
    handleFilterPress = () => {
        const {current_filter} = this.props;
        this.props.setFilter(current_filter);
    }
    render(){
        const {current_filter} = this.props;
        const {visibilityFilter} = this.props;
        const filter_color = current_filter === visibilityFilter ? "blue": "black";
        return (
            <TouchableOpacity style= {styles.filter_container}
                onPress = {this.handleFilterPress}>
                <Text style ={[styles.text, {color: filter_color}]}>{current_filter}</Text>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    const {visibilityFilter} = state;
    return {
        visibilityFilter : visibilityFilter
    }
}

export default connect(
    mapStateToProps,
    {setFilter}
)(Filter);

const styles = StyleSheet.create({
    filter_container : {
        height : 30,
        width : 85,
        borderWidth : 1.5,
        borderColor : "gray",
        borderRadius : 3,
        backgroundColor : "lightgray",
        marginRight: 10
    },
    text : {
        textAlign : "center",
        fontWeight : "bold",
        fontSize : 16
    }
})