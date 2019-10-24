import React from 'react';

import {View, Dimensions} from 'react-native';
import Button from './button';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Keyboard(props){
  return (
    <View
      styles={{
        alignItems: 'center',
        padding: 10,
        marginTop: 40
      }}>

      <View style={{
        flexDirection: 'row'
      }}>

      {[{key: 'E', id: 1, action: () => props.add('E')},
        {key: '(', id: 2, action: () => props.add('(')},
        {key: ')', id: 3, action: () => props.add(')')},
        {key: 'C', id: 4, action: () => props.doClean()}
      ].map ( button => (
        <Button key={button.id} action={button.action} title={button.key}/>
      ))}

      </View>

      <View style={{
        flexDirection: 'row'
      }}>

      {[{key: '1', id: 5, action: () => props.add('1')},
        {key: '2', id: 6, action: () => props.add('2')},
        {key: '3', id: 7, action: () => props.add('3')},
        {key: '*', id: 8, action: () => props.add('*')}
      ].map ( button => (
        <Button key={button.id} action={button.action} title={button.key}/>
      ))}

      </View>

      <View style={{
        flexDirection: 'row'
      }}>

      {[{key: '4', id: 9, action: () => props.add('4')},
        {key: '5', id: 10, action: () => props.add('5')},
        {key: '6', id: 11, action: () => props.add('6')},
        {key: '/', id: 12, action: () => props.add('/')}
      ].map ( button => (
        <Button key={button.id} action={button.action} title={button.key}/>
      ))}

      </View>

      <View style={{
        flexDirection: 'row'
      }}>

      {[{key: '7', id: 13, action: () => props.add('7')},
        {key: '8', id: 14, action: () => props.add('8')},
        {key: '9', id: 15, action: () => props.add('9')},
        {key: '+', id: 16, action: () => props.add('+')}
      ].map ( button => (
        <Button key={button.id} action={button.action} title={button.key}/>
      ))}

      </View>

      <View style={{
        flexDirection: 'row'
      }}>

      {[{key: '.', id: 17, action: () => props.add('.')},
        {key: '0', id: 18, action: () => props.add('0')},
        {key: '=', id: 19, action: () => props.doCalc()},
        {key: '-', id: 20, action: () => props.add('-')}
      ].map ( button => (
        <Button key={button.id} action={button.action} title={button.key}/>
      ))}

      </View>

    </View>
  );
}
