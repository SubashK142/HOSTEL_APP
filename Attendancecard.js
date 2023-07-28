import React from 'react'
import { View,Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Attendancecard(props) {
 
    const navigation = useNavigation();

    const handleButtonPress = () => {
        navigation.navigate('roomdetails');
      };
  return (
    
    

    <View style={styles.card}>

  <View style={styles.rowContainer}>
    <View style={styles.view1}>
      <Text style={styles.intext}>3P</Text>
      </View> 
    <View style={styles.view2}>
      <Text style={styles.intext}>3A</Text></View>
  </View>

    <Text style={styles.title}>{props.room}</Text>
   <TouchableOpacity style={{width:'60%',marginLeft:'12%',marginTop:'2%'}} onPress={handleButtonPress}>
    <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271228.png'}} style={styles.icon1} />
    </TouchableOpacity>
  </View>


  )
}


const styles = StyleSheet.create({
    card: {
      width:'99%',
      height:'13%',
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
      justifyContent:'space-between',
      
    },
    title: {
      fontSize:30 ,
      marginTop:'2%',
      marginLeft:'6%',
    //   marginBottom:'3%'
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
    vcan:{
        marginTop:'30%',
        fontSize:30,
        marginLeft:'20%',
      },
    apper:{
        width:97,
        height:'70%',
        borderRadius:0,
        backgroundColor:"#D9D9D9",
        marginLeft:'-25%',
        marginTop:'-10%',
        marginBottom:'13%'
      },
      contentContainer: {
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
       rowContainer: {
      flexDirection: 'column',
    },
    view1: {
      width: 100,
      height: '80%',
      backgroundColor: '#D9D9D9',
      marginRight: 0,
      marginLeft:-20,
      marginTop:'-27%',
      marginBottom:'4%',
      borderColor:'black',
      
    },
    icon:{
      width:'11%',height:'50%',
      marginLeft:'84%',marginTop:'-17%'
    },
    icon1:{
      width:'9%',height:'50%',
      marginLeft:'07%',marginTop:'3%'
    },
    view2: {
      width: 100,
      height: '80%',
      marginLeft:-20,
      backgroundColor: '#D9D9D9',
      marginBottom:'4%'
    },
    intext:{
      marginTop:"6%",
      marginLeft:"30%",
      fontSize:30
    }
      
  });
  

  