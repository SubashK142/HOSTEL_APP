import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Newcotcard() {
    const navigation = useNavigation();
    const handleButtonPress = () => {
        navigation.navigate('rules');
      };
  return (
    <View>
     <View style={[styles.card]}>
        <Text style={styles.title}>Cot  No : 1</Text>
        <TouchableOpacity onPress={handleButtonPress}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271228.png'}} style={styles.icon1} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:100,
        backgroundColor:'white',
        borderWidth:1,
        marginTop:'3.2%',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
      
    },
    icon1 :{
        width:"68%",
        height:30,
        alignContent:'flex-end',
        marginLeft:'7%'
    },
    title:{
        fontSize:27,
        fontWeight:'bold',
        textAlign:'center',
        width:'80%'
    }
    // container: {
    //   marginTop: 300,
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    
    
    // card: {
    //     width:'99%',
    //     height:'83%',
    //     backgroundColor: '#fff',
    //     borderRadius: 0,
    //     // padding: 22,
    //     shadowColor: '#000',
    //     shadowOffset: { width: '0%', height: 2 },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 4,
    //     elevation: 4,
    //     // marginBottom:'3%',
    //     display:'flex',
    //     flexDirection:'row',
    //     justifyContent:'space-between',
        
    //   },
    // title: {
    //   fontSize: 35,
    // //   marginTop:'3%',
    // //   marginLeft:'10%'
    // },
    // title1: {
    //   fontSize: 45,
    //   fontWeight: 'bold',
    //   marginBottom: 0,
    //   marginLeft:'11%',
    //   marginTop:'0%',
  
    // },
    
   
    // icon1:{
    //   width:'8%',height:'110%',
    // //   marginLeft:'84%',marginTop:'-11%'
    // }
  });
