import { useState } from 'react';
import {Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './StyleHome';

const HomeScreen = ({navigation}) => {
  const [num1, setnum1] = useState()
  const [num2, setnum2] = useState()

  const verificar = () =>{
    if(num1 === '38345' && num2 === '4567'){
      navigation.navigate('Ventana2')
    }
    else{
      console.log(num1, ' ', num2)
    }
  }

  return (
    <View style={styles.container}>
        <Text>Codigo numero 1</Text>
        <TextInput onChangeText={setnum1} value={num1} style={styles.input} secureTextEntry/>
        <Text>Codigo numero 2</Text>
        <TextInput onChangeText={setnum2} value={num2} style={styles.input} secureTextEntry/>
        <TouchableOpacity onPress={verificar} style={styles.btn}>
          <Text>Verificar</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen