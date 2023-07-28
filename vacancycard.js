import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Vacancycard() {
    
    const navigation = useNavigation();
    const handleButtonPress = () => {
        navigation.navigate('newcot');
      };
  return (
    
    <View >

    <View style={[styles.card,{marginTop:'3.2%'}]}>

    <View >
  
      <View style={styles.view1}> 
      <Text style={styles.intext}>4VC</Text></View>
      
    </View>

      <View>
      <Text style={styles.title}>Room - D01</Text>
      <TouchableOpacity  onPress={handleButtonPress} >
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271228.png'}} style={styles.icon1} />
        </TouchableOpacity>
      
      </View>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: 
    {
      marginTop: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    card: {
      width:'100%',
      height:100,
      backgroundColor: '#fff',
      borderRadius: 0,
      padding: 22,
      shadowColor: '#000',
      shadowOffset: { width: '0%', height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    
      display:'flex',
      flexDirection:'row',
     
    },
    title: {
      fontSize:27 ,
      marginTop:'4%',
      fontWeight:'bold'
    //   marginLeft:' -0%',
    //   marginBottom:'4%'
    },
   
   
  
    view1: {
      width: '78%',
      height: '167%',
      backgroundColor: '#D9D9D9',
      marginRight: '15%',
      marginLeft:'-15%',
      marginTop:'-15%',
      borderColor:'black',
      borderRadius:0
      
    },
    intext:{
      marginTop:"25%",
      marginLeft:"25%",
      fontSize:30
    },
    icon1 :{
        width:"10%",
        height:30,
        alignContent:'flex-end',
        marginLeft:'72%',
        marginTop:'-14%'
    },
   
    
  });
