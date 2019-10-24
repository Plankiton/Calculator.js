import React from 'react';
import {Dimensions, TextInput, View} from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var SIZE = (width < height)? width-width*0.1: height-height*0.26;

export default function Screen(props){
  return (
    <View style={{
      borderRadius: 6,
      backgroundColor: "#3CB54A",
      width: SIZE*0.9,
      height: height*0.13,
      alignItems: 'center',
    }}>

      <TextInput
        placeholder=''
        editable={false}
        style={{
          borderRadius: 6,
          backgroundColor: "#89C763",
          padding: 5,
          width: SIZE*0.89,
          height: height*0.12,
          position: 'absolute',
          bottom: 0,
          fontSize: 52.5,
          textAlign: 'right',
          fontWeight: 'bold',
          color: "#0E9347"
        }}
        value={props.children}
      />
    </View>
  );
}
