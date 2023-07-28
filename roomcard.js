import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Roomcard() {
    
    const navigation = useNavigation();
    const handleButtonPress = () => {
        navigation.navigate('studentdetails');
      };
  return (
    
    <View >

    <View style={[styles.card,{marginTop:'5%'}]}>

    <View >
    <TouchableOpacity onPress={handleButtonPress} >
      <View style={styles.view1}> 
      <Text style={styles.intext}>4P</Text></View>
      </TouchableOpacity>
    </View>

      <View>
      <Text style={styles.title}> Cot No - 01</Text>
      <View style={styles.back}>
      <Image source={{uri:'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689491311/download__1_-removebg-preview_v4nr7o.png'}} style={styles.baf} />
      </View>
      <View style={styles.back1}>
      <Image source={{uri:'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689491443/download__1_-removebg-preview_1_w6x19z.png'}} style={styles.baf} />
      </View>
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
      height:120,
      backgroundColor: '#fff',
      borderRadius: 0,
      padding: 22,
      shadowColor: '#000',
      shadowOffset: { width: '0%', height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    //   marginBottom:'3%',
      display:'flex',
      flexDirection:'row',
     
    },
    title: {
      fontSize:30 ,
    //   marginTop:'-8%',
    //   marginLeft:' -0%',
    //   marginBottom:'4%'
    },
    title1: {
      fontSize: 40,
      fontWeight: 'bold',
      
    //   marginLeft:'15%',
    //   marginTop:'20%',
    },
  
   
  
    view1: {
      width: '68%',
      height: '115%',
      backgroundColor: '#D9D9D9',
      marginRight: '15%',
      marginLeft:'-5%',
      marginTop:'-5%',
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
         marginTop:'23%',
         marginLeft:'13%',
        
        },
        back:{
          width:'17%',
          height:'49%',
          backgroundColor:'white',
          borderRadius:100,
          marginTop:'4%',
          marginLeft:'15%',
          borderColor:'green',
          borderWidth:2
          
          
        },
        back1:{
          width:'17%',
          height:'49%',
          backgroundColor:'white',
          borderRadius:130,
          marginTop:'-17%',
          marginLeft:'55%',
          borderColor:'red',
          borderWidth:2
        }
    
  });
