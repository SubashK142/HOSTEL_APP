import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import vacancycard from './vacancycard';
import Vacancycard from './vacancycard';

export default function VacancyPage() {
  return (
        
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.card1}>
        <Text style={styles.title1}>Floor 1</Text>
        <Text style={styles.description}></Text>
      </View>
        <ScrollView style={{marginTop:'0%',backgroundColor:'black',marginBottom:'2%',width:'100%'}}>
      <Vacancycard/>
      <Vacancycard/>
      <Vacancycard/>
      <Vacancycard/>
      <Vacancycard/>

      <Vacancycard/>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  card: {
    width:'99%',
    height:'14%',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: '0%', height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom:'3%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
   
  },
  title: {
    fontSize:38 ,
    marginTop:'0%',
    marginLeft:'6%',
    marginBottom:'3%'

  },
  title1: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 0,
    marginLeft:'25%',
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
  apper:{
    width:97,
    height:'171%',
    borderRadius:0,
    backgroundColor:"#D9D9D9",
    marginLeft:'-7%',
    marginTop:'-6%'
  },
  vcan:{
    marginTop:'30%',
    fontSize:30,
    marginLeft:'20%',
  }
  
});