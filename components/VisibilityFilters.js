import React, {Component} from 'react';
import {View, StyleSheet ,Text} from 'react-native';

import {VISIBILITY_FILTERS} from '../redux/constants';

import Filter from './Filter';

export default class VisibilityFilters extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const filter_lst = Object.keys(VISIBILITY_FILTERS).map((filter, index) => {
            const current_filter = VISIBILITY_FILTERS[filter];
            return (
                <Filter key = {index} 
                    current_filter = {current_filter} />
            )
        })
        return (
            <View style = {styles.container}>
                {filter_lst}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignContent : 'flex-start',
        justifyContent : 'flex-start',
        marginTop :100
    }
})