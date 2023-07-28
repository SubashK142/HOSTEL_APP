import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React,{useEffect} from 'react';


export default function LoadPage({navigation}) {

  return (
    <View style={styles.container}>
    <Image style={styles.baf} source={{uri:'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1688388375/Screenshot_2023-07-03_181533_dh5fjh.png'}}/>
    
      <Text style={styles.text}>' WOMEN  SAFETY  IS  OUR</Text>
      <Text style={styles.text}>PRIOR   MOTTO..! '</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}>
        <Text style={{ textAlign: 'center', top: 10, fontSize: 25, color: 'white' }} onPress={()=>navigation.navigate('branchpage')}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
    fontStyle:'italic',
    fontSize: 28,
    marginLeft: 1,
    
    
  },
  
  button: {
    backgroundColor: 'blue',
    marginTop: '23%',
    width: '50%',
    height: '9%',
    
    borderRadius: 15,
  },
  baf:{
    width:'100%',
    height:'32%',
    marginTop:'-40%',
    marginBottom:'20%'
  }
});