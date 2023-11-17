import { Text, View,TextInput,TouchableOpacity} from 'react-native';
import styles from './LoginScreenStyles';
import LottieView from 'lottie-react-native'
import React, { useState } from 'react';
import { Formulary } from '../../components/Formulary';
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const verifyFormulary = () => {
    Formulary(email, password, setEmail, setPassword, navigateToAnotherScreen);
  };

  const navigateToAnotherScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>SnapNote</Text>
        </View>

        <View style={styles.animationContainer}>
          <LottieView
          autoPlay
          style={{
            width: 300,
            height: 300,
          }}
          source={require('./LoginScreenImages/Wallpaper.json')}
          />
        </View>

        <View style={styles.formularyContainer}>
          <Text style={styles.info}>Account Login</Text>
          <Text style={styles.textForm}>Email Addres</Text>
          <TextInput
            style={styles.inputEmail}
            value={email}
            onChangeText={setEmail}
            inputMode='email'
            placeholder="Type something..."
          />
          <Text style={styles.textForm}>Password</Text>
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            inputMode='text'
            placeholder="Type something..."
          />

          <TouchableOpacity style={styles.bottomLogin} onPress={verifyFormulary}>
            <Text style={styles.bottomText}>Login</Text>
          </TouchableOpacity>

        </View>
      
    </View>
  );
}

