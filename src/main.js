import React from 'react';

import {View, Dimensions} from 'react-native';
import Screen from './screen';
import Keyboard from './keyboard';
import Button from './button';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Calc(){
  const [CACHE, sCACHE] = React.useState('');

  function addVal(value){
    sCACHE(CACHE+value);
  }

  function doCalc(){
    console.log(CACHE);
  }

  function doClean(){
    sCACHE('');
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#35495c',
      }}>

        <View style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#35495c',
          margin: 'auto',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          bottom: 0,
          height: height*0.8,
        }}>

          <View style={{
            marginTop: height*0.03,
            marginBottom: height*0.03,
            alignItems: 'center',
          }}>
            <Screen>{CACHE==''? '0': CACHE}</Screen>
            <View style={{
              marginTop: height*0.02,
              alignItems: 'center',
            }}>
              <Keyboard add={addVal} doCalc={doCalc} doClean={doClean}/>
            </View>
          </View>

        </View>

      </View>
  );
}
