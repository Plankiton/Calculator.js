import React from 'react';

import {Text, Dimensions, TouchableOpacity, View, ImageBackground} from 'react-native';
import icon_equal from '../assets/images/equ.png';
import icon_less from '../assets/images/sub.png';
import icon_plus from '../assets/images/adi.png';
import icon_divi from '../assets/images/div.png';
import icon_mult from '../assets/images/mul.png';
import icon_clea from '../assets/images/cle.png';
import icon from '../assets/images/but.png';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var SIZE = (width < height)? width-width*0.1: height-height*0.26;

export default function Button(props){
  function getSet(button){
    if (button === '=')
      return {icon: icon_equal, text: ''};
    if (button === '-')
      return {icon: icon_less, text: ''};
    if (button === '+')
      return {icon: icon_plus, text: ''};
    if (button === '/')
      return {icon: icon_divi, text: ''};
    if (button === '*')
      return {icon: icon_mult, text: ''};
    if (button === 'C')
      return {icon: icon_clea, text: ''};
    return {icon: icon,  text: button};
  }

  var button = getSet(props.title);
  return (
    <View>
    <TouchableOpacity onPress={props.action}>
      <ImageBackground source={button.icon} style={{
        width: SIZE*0.226,
        height: SIZE*0.226,
      }}>
        <Text
          style={{
            fontSize: ((SIZE*0.18)*0.75),
            borderRadius: 6,
            textAlign: 'center',
            padding: 10,
            color: "#E2E5E7",
            alignItems: 'center',
            width: SIZE*0.226,
            height: SIZE*0.226,
          }}
            type="clear"
          >{button.text}</Text>
      </ImageBackground>
    </TouchableOpacity>
    </View>
  );
}
