import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import React from 'react';

export default function NewCotAdded() {

  return (
    <View style={styles.container}>
    <Image source={{ uri: 'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689487029/login_tste8u.png' }} style={styles.baf} />
      <Text style={styles.text}>New  Applicant</Text>
      <Text style={styles.text}>Added  Sucessfully !</Text>

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
    
      fontSize:35,
      color:'green'
  },
  
  
  baf:{
    width:'99%',
    height:'60%',
    marginTop:'-100%',
    marginBottom:'10%'
  },
  
});
