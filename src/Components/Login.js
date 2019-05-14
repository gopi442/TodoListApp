import React, { Component } from 'react';
import { TextInput, ActivityIndicator,AsyncStorage,TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import login from '../Resource/login.png';
import reset from '../Resource/reset.png';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScreenLoading: true,
      btnDisable : false,
      username: '',
      password: ''
    };
  }

  onLogin() {
    if (this.state.username.trim().length < 8) {
      alert("Username should be minimum 8 digits")
      return
    }
    else if (this.state.password.trim().length < 8) {
      alert("Password should be minimum 8 digits")
      return
    }
    console.log("ddsdsds");
    this.setState({isScreenLoading : true})
    this.callLoginApi()
    
  }
  onReset() {
    this.setState({ username: '', password: '' })
  }

  
  async saveItem(item, tokenValue) {
    try {
      await AsyncStorage.setItem(item, tokenValue);
    } catch (error) {
    }
  }

  callLoginApi() {
    fetch("https://demo7643920.mockable.io/login",{
      method: 'POST',
      body: JSON.stringify({"username": this.state.username, 
                            "password": this.state.password })
       }).then(function (response) {
           return response.json();
      }).then(function (result) { 
          console.log(result);
           if(!result.error){
             let authtoken = result.token
            //  this.saveItem('id_token', authtoken)
            Actions.todoapp()
            this.setState({ isScreenLoading: false ,btnDisable:true});
            
            
            
              
      }else{
        alert(result.error_msg);
     }
 }).catch(function (error) {
    
 });
}
  render() {
    return (
     <View style={styles.container}>

      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={styles.customButton} activeOpacity={0.5} disabled={this.state.btnDisable} onPress={this.onLogin.bind(this)}>
            <Image source={login} style={styles.ImageIconStyle} />
            <Text style={styles.TextStyle}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customButton} activeOpacity={0.5} onPress={this.onReset.bind(this)}>
            <Image source={reset} style={styles.ImageIconStyle} />
            <Text style={styles.TextStyle}> Reset </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>  
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  customButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#CFCECD',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,

  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',

  },
  TextStyle: {
    color: "black",
    marginBottom: 4,
    marginRight: 20,

  },
  loader: {
    flex:1,
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    width: null,
    height: null
  }
});
