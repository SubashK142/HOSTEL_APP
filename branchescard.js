import React from 'react';
import { View, StyleSheet,Image,TouchableOpacity,Text  } from 'react-native';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Branchescard = (props) => {

    const navigations = useNavigation();

    const handleButtonPress = (branchname) => {
        navigations.navigate('loginpage',{branchname});
      };

  return (
    <View style={styles.outerCard}>
    
        <TouchableOpacity onPress={()=>{handleButtonPress(props.page)}}>
      <View style={styles.innerCard1}>
      </View>
      </TouchableOpacity>
      <Text style={styles.intext}>{props.page}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCard: {
    width:'90%',
    height:'27%',
    marginTop:'16%',
    marginLeft:'4%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'space-between'
  },
  innerCard1: {
    marginTop:'8%',
    marginLeft:'7%',
    width:'84%',
    height:'79%',
    backgroundColor: 'grey',
    borderRadius: 78,
    
  },
  baf:{
    width:25,
    height:30,
   marginTop:'5%',
  
  
  },
  intext:{
    fontSize:22,
    marginBottom:'16%'
  }
});

export default Branchescard;