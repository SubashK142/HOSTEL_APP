import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import {auth} from './fireebaseconfig'
import { useNavigation } from '@react-navigation/native';
import Topcard from './topcard';
import { useRoute } from '@react-navigation/native';

export default function Login() {


  const route = useRoute();
  const { branchname } = route.params;

  const navigation = useNavigation();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleemail=(e)=>
  {
    console.log(e)
      setEmail(e)
  }
  const handlepass=(e)=>
  {
      setPassword(e)
  }

  const handleLogin =(e)=>
  {
      // auth
      // .signInWithEmailAndPassword(email, password)
      // .then(()=>navigation.navigate('newcot',{branchname}))
      // .catch((error)=> alert('Error : '+ error)) 
      navigation.navigate('attendpage')
  }

  return (
  
    <View style={styles.container}>
     
    <Image source={{uri:'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689487029/login_tste8u.png'}} style={styles.baf} />
     
    
    <Text style={styles.text}>Login</Text>
     
    <Text style={styles.name}>User Name</Text>
   
    <TextInput value={email} onChangeText={(e)=>handleemail(e)} style={styles.input} placeholder='Enter Your Name'/>
   
    <Text style={styles.name}>Password</Text>
      <TextInput value={password} onChangeText={(e)=>handlepass(e)} style={styles.input} placeholder="Enter Password" secureTextEntry={true}/>
     
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
      <Text style={{ textAlign: 'center', top: 10, fontSize: 25, color: 'black' }}  >LOGIN</Text>
      </TouchableOpacity>
    
      </View>



  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      marginLeft:-250,
      fontSize:35,
      fontWeight:'bold'
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor:'#F3F3F3'
  },
  button: {
    backgroundColor: '#D9D9D9',
    marginTop: 0,
    width: 220,
    height: 60,
    top: 60,
    borderRadius: 15,
    marginBottom:-80
  },
  baf:{
    width:390,
    height:314,
    marginTop:-450,
    marginBottom:20
  },
  name:{
marginTop:20,
marginBottom:20,
marginLeft:-200,
fontSize:20,
  }
});
