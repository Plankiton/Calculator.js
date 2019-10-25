import React from 'react';

import { StatusBar, View, Dimensions} from 'react-native';
import Screen from './screen';
import Keyboard from './keyboard';
import Button from './button';

var print = console.log;
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Calc(){
  const [CACHE, sCACHE] = React.useState('');
  const [CLR, sCLR] = React.useState(false);

  function doClean(){
    sCACHE('');
    sCLR(false);
  }

  function addVal(value){
    if (CLR){
      doClean();
    }

    var oper = '*/-+';

    if (value=='('){
      var char = '*';
      for (var c in oper){
        if ( oper[c] === CACHE.slice(-1)[0] ){
          char = oper[c];
        }
      }
      value = char+value;
    }

    if (value=='E'||value=='e'){
      value = 'e';
    }

    sCACHE(CACHE+value);
  }

  function doCalc(){
    if (CLR){
      doClean();
    } else {
      try {
        var res = eval(CACHE).toString()
        sCACHE(res);
      } catch {
        sCACHE('!');
      }
    }
    sCLR(true);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#35495c',
        justifyContent: 'center',
      }}>

        <StatusBar hidden={true}/>
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#35495c',
          top: 0,
          bottom: 0,
          height: height*0.8,
        }}>

          <View style={{
            marginTop: height*0.03,
            justifyContent: 'center',
            marginBottom: height*0.03,
            alignItems: 'center',
          }}>
            <Screen>{CACHE==''? '0': CACHE}</Screen>
            <View style={{
              marginTop: height*0.02,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Keyboard add={addVal} doCalc={doCalc} doClean={doClean}/>
            </View>
          </View>

        </View>

      </View>
  );
}
