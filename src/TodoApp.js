import React, { Component } from 'react';
import { View,TouchableOpacity,Text ,StyleSheet,AsyncStorage} from 'react-native';
import AddTodo from '../src/containers/AddTodo'
import VisibleTodo from '../src/containers/VisibleTodos'
import {Actions} from 'react-native-router-flux';


class TodoApp extends Component {
    state={
        todos :[],
        visibilityFilter : 'SHOW_ALL_TODOS'
    }
  render() {
    
    return (
      <View style ={styles.container}>
        <TouchableOpacity  style={styles.logoutButton} onPress={this.onLogout.bind(this)}>
            <Text> Logout </Text>
      </TouchableOpacity>
   
            <AddTodo/>
            <VisibleTodo/>
      </View>
      );
  }
 async onLogout() {
    try {
      await AsyncStorage.removeItem('id_token');
      Actions.pop()
    } catch (error) {
      
    }
  }
}



export default TodoApp;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor :'white',
      paddingTop: 50
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#CFCECD',
      borderWidth: .5,
      borderColor: '#fff',
      height: 40,
      width:60,
      borderRadius: 5,
      margin: 5,
      alignSelf: 'flex-end'
  
    }
});