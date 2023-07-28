
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from './fireebaseconfig';


const bar = StatusBar.currentHeight;

export default function NewStudent() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');

  const handleChange=(e,setmethod)=>{
    setmethod(e.target.value);
  }


  const handleStoreData = () => {
    
    const databaseRef = firebase.database().ref('usersssssssssssssssssss');
    databaseRef.push().set({
      name: name,
      email: email,
    })
      .then(() => {
        alert("success");
        ()=>{navigation.navigate('success')}
        // console.log('Data stored successfully');
      })
      .catch((error) => {
        console.error('Error storing data:', error);
      });
  };


  const navigation = useNavigation();
  const handleButtonPress = () => {
      navigation.navigate('success');
    };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
     
    <Image source={{ uri: 'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689487029/login_tste8u.png' }} style={styles.baf} />
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.text}>Registration Page</Text>
       
        <Text style={styles.name}>Room No</Text> 
        <TextInput value={name} onChangeText={(e)=>handleChange(e,setName)} style={styles.input} placeholder='Example: "D201"'></TextInput>
        
        <Text style={styles.name}>Cot No</Text>
        <TextInput style={styles.input} placeholder='Example: "c-2"'></TextInput>
        <Text style={styles.name}>Name</Text>
      
        <TextInput style={styles.input} placeholder='Enter Your Name'></TextInput>
        <Text style={styles.name}>         Date Of Birth</Text>
      
        <TextInput style={styles.input} placeholder='DD/MM/YYYY'></TextInput>
       
        <TouchableOpacity style={styles.button} onPress={handleStoreData}>
          <Text style={{ textAlign: 'center', top: 10, fontSize: 25, color: 'white' }}>Register</Text>


        </TouchableOpacity>
      </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop:'15%',
    marginLeft:'-10%',
    fontSize: 35,
    color: 'black'
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 15,
    width:'40%',
     height:'10%',
    backgroundColor: 'blue',
    marginTop: '10%',
   
    marginBottom:'20%',
    borderRadius: 15,
  },
  baf: {
    width: '100%',
    height: '40%',
    marginTop:'10%'
  },
  input: {
    width: '80%',
    height: '8%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor:'#F3F3F3'
  },
  name: {
    marginTop:'5%',
    marginBottom:'5%',
    marginLeft:'-60%',
    fontSize:20,
    
  }
});
