///page-------4 Attendance page
import * as React from 'react';
import { StatusBar,View, Text,StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native';
import Attendancecard from './Attendancecard';
import Topcard from './topcard';


const Tab = createMaterialTopTabNavigator();
   

const Screen1 = () => (


 <ScrollView style={{backgroundColor:'black',marginBottom:'-19%',width:'100%'}}>
<View style={{width:'100%',height:'100%',marginTop:'5%'}}>

<Attendancecard room={"ROOM - D01"} />
<Attendancecard room={"ROOM - D02"} />
<Attendancecard room={"ROOM - D03"} />
<Attendancecard room={"ROOM - D04"} />
<Attendancecard room={"ROOM - D05"} />
<Attendancecard room={"ROOM - D06"} />

  
  

  </View>

</ScrollView>

);

const Screen2 = () => (
  <ScrollView style={{backgroundColor:'black',marginBottom:'-19%',width:'100%'}}>
  <View style={{width:'100%',height:'100%',marginTop:'5%'}}>
   
  <Attendancecard room={"ROOM - D01"} />
<Attendancecard room={"ROOM - D02"} />
<Attendancecard room={"ROOM - D03"} />
<Attendancecard room={"ROOM - D04"} />
<Attendancecard room={"ROOM - D05"} />
<Attendancecard room={"ROOM - D06"} />
    </View>
  
  </ScrollView>
);

const Screen3 = () => (
  <ScrollView style={{backgroundColor:'black',marginBottom:'-19%',width:'100%'}}>
  <View style={{width:'100%',height:'100%',marginTop:'5%'}}>
  <Attendancecard room={"ROOM - D01"} />
<Attendancecard room={"ROOM - D02"} />
<Attendancecard room={"ROOM - D03"} />
<Attendancecard room={"ROOM - D04"} />
<Attendancecard room={"ROOM - D05"} />
<Attendancecard room={"ROOM - D06"} />
    </View>
  
  </ScrollView>
);

const Attendance = () => {
  return (
    <View style={{height:'100%'}}>
    <StatusBar/>
  
    
      <Tab.Navigator
        initialRouteName="Screen2"
        screenOptions={{
          swipeEnabled:true
        }}
        // swipeEnabled={true}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: '#888',
          labelStyle: { fontSize: 16, fontWeight: 'bold' },
          style: { backgroundColor: '#f0f0f0' },
          indicatorStyle: { backgroundColor: '#000' },
        }}
      >
        <Tab.Screen name="Floor 1" component={Screen1} />
        <Tab.Screen name="Floor 2" component={Screen2} />
        <Tab.Screen name="Floor 3" component={Screen3} />
      </Tab.Navigator>
      </View>
   
  );
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

export default Attendance;
