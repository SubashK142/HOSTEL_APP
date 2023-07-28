import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import Newcotcard from './newcotcard';

export default function NewCot() {
  return (
        
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.card1}>
        <Text style={styles.title1}>Floor 1- D201</Text>
        <Text style={styles.description}></Text>
      </View>
        <ScrollView style={{marginTop:'0%',backgroundColor:'black',marginBottom:'3%',width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>

      <Newcotcard/>
      <Newcotcard/>
      <Newcotcard/>
      <Newcotcard/>
      <Newcotcard/>
      <Newcotcard/>

    
     
      
   
     
   
    
     
     
    </ScrollView>
      
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
  
  
  
  title: {
    fontSize: 35,
    marginTop:'3%',
    marginLeft:'10%'

  },
  title1: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft:'11%',
    marginTop:'10%',

  },
  
  card1: {
    width:'99%',
    
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,

  },
  icon1:{
    width:'8%',height:'110%',
    marginLeft:'84%',marginTop:'-11%'
  }
});