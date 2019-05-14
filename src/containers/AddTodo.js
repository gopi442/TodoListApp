import React, { Component } from "react";
import addTodoIcon from '../Resource/addTodoIcon.png'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import {addTodo} from '../actions'
class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        //redux store 
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 40 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Add new to do task here"
                    style={{ borderWidth: 1, borderColor: 'gray', backgroundColor: 'white', height: 50, flex: 1, padding: 15 }}
                />
                <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                    <View style={{ height: 50,width:50, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={addTodoIcon} style={styles.ImageIconStyle} />

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    
      }
});