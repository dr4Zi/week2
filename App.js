import React, {Component} from 'react';
import {View,
Text,
Image, TouchableHighlight, 
StatusBar, ImageBackground, TextInput
} from 'react-native';
import styles from './styles';
export default class App extends Component {
  constructor(props){
    super(props);
    background=require('../login/background.jpg');
  };
  _onPress(){
    alert('Trung Popper')
  };
  
  render() {
    return ( <View style={styles.container}>
      <ImageBackground style={styles.imgBackground}
      resizeMode='cover'
      source={require('./background.jpg')}>
        <StatusBar hidden={false}/>
        <View style={styles.container}>
          <Image style={styles.logo}
            source={require('./logo.jpg')}/>
        </View>
        <View style={styles.phaninput}>
          <Text style={styles.textdangki} onPress={this._onPress.bind(this)}>Đăng Ký</Text>
          <TextInput placeholder={'Tên đăng nhập'} style={styles.TextInput} placeholderTextColor='white' keyboardAppearance='default'/>
          <TextInput placeholder={'Mật khẩu'} style={styles.TextInput} secureTextEntry={true} placeholderTextColor='white'/>
          <TouchableHighlight style={styles.loginbutton}
                              onPress={this._onPress.bind(this)}>
            <Text style={styles.textlogin}>ĐĂNG NHẬP</Text>
          </TouchableHighlight>
          <View style={styles.row} >
            <View style={styles.line}/>
            <Text style={styles.textcontact} >CONTACT WITH US</Text>
            <View style={styles.line}/>
          </View>
          
        </View>
      </ImageBackground></View>
    );
  }
}

