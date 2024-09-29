import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    axios
      .post('http://192.168.181.109:3000/users/login', {
        nip,
        password,
      })
      .then(res => {
        console.log(res.data);
        navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>MovieApp.</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputField}
          placeholder="NIP"
          placeholderTextColor={'gray'}
          onChangeText={text => setNip(text)}
          setNip={setNip}></TextInput>
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          placeholderTextColor={'gray'}
          onChangeText={text => setPassword(text)}
          setPassword={setPassword}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() =>
          /*handleLogin(nip, password)*/ navigation.navigate('HomeScreen')
        }>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.subTextLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191716',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 150,
    marginBottom: 100,
  },
  titleText: {
    fontFamily: 'Commissioner-ExtraBold',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
    fontSize: 40,
    color: 'white',
  },
  inputField: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    margin: 10,
    fontSize: 18,
    fontFamily: 'Commissioner-SemiBold',
  },
  buttonContainer: {
    backgroundColor: 'red',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    width: 160,
    marginTop: 50,
  },
  loginText: {
    fontSize: 24,
    fontFamily: 'Commissioner-ExtraBold',
    color: 'white',
    textAlign: 'center',
  },
  subTextContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 50,
  },
  subText: {
    fontFamily: 'Commissioner-Regular',
    fontSize: 16,
  },
  subTextLink: {
    fontFamily: 'Commissioner-Bold',
    fontSize: 16,
    color: 'beige',
  },
});

export default LoginScreen;
