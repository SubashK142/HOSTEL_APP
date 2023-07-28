
import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import Roomcard from './roomcard';

export default function RoomDetails() {
  
  return (
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.card1}>
        <Text style={styles.title1}>Room No - D01</Text>
        <Text style={styles.description}></Text>
      </View>

        <ScrollView style={{marginTop:'0%',backgroundColor:'black',marginBottom:'3%',width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>

     <Roomcard/>
     <Roomcard/>
     <Roomcard/>
     <Roomcard/>
     <Roomcard/>
     <Roomcard/>
     
     
     
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
   
  },
  title: {
    fontSize:27 ,
    marginTop:'-8%',
    marginLeft:' -5%',
    marginBottom:'4%'
  },
  title1: {
    fontSize: 40,
    fontWeight: 'bold',
    
    marginLeft:'15%',
    marginTop:'20%',
  },
  card1: {
    width:'99%',
    backgroundColor: '#fff',
    borderRadius: 0,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
 

  view1: {
    width: '68%',
    height: '160%',
    backgroundColor: '#D9D9D9',
    marginRight: '15%',
    marginLeft:'-5%',
    marginTop:'-12%',
    borderColor:'black',
    borderRadius:100
    
  },
  intext:{
    marginTop:"25%",
    marginLeft:"30%",
    fontSize:30
  },
  baf:{
        width:25,
        height:20,
       marginTop:'25%',
       marginLeft:'13%',
        marginBottom:'14%'
      },
      back:{
        width:'17%',
        height:'62%',
        backgroundColor:'black',
        borderRadius:100,
        marginTop:'2%',
        marginLeft:'15%',
        
        
      },
      back1:{
        width:'17%',
        height:'62%',
        backgroundColor:'black',
        borderRadius:130,
        marginTop:'-18%',
        marginLeft:'50%'
      }
  
});