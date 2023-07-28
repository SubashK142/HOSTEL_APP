import React from 'react'
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoadPage from './loadingpage';
import Login from './loginpage';
import Attendance from './attencepage';
import RoomDetails from './roomdetails';
import Details from './studentdetails';
import NewCot from './newcotaddpage';
import NewCotStud from './newadded';
import VacancyPage from './vacancyaddpage';
import Rules from './rulespage';
import NewStudent from './registerpage';
import NewCotAdded from './newadded';
import Topcard from './topcard';
import Branches from './branchespage';


const Stack = createStackNavigator();

function MainComponent() {
  return (
    
   <View  style={{height:'100%'}}>
   <Topcard/>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="loadingpage" component={LoadPage}/>
      <Stack.Screen options={{headerShown:false}} name="branchpage" component={Branches}/>
      <Stack.Screen options={{headerShown:false}} name="loginpage" component={Login}/>
      <Stack.Screen options={{headerShown:false}}  name="attendpage" component={Attendance}/>
      <Stack.Screen options={{headerShown:false}}  name="roomdetails" component={RoomDetails}/>
      <Stack.Screen options={{headerShown:false}}  name="studentdetails" component={Details}/>
      <Stack.Screen options={{headerShown:false}} name="newcot" component={NewCot}/>
      <Stack.Screen options={{headerShown:false}} name="rules" component={Rules}/>
      <Stack.Screen options={{headerShown:false}} name="register" component={NewStudent}/>
      <Stack.Screen options={{headerShown:false}} name="success" component={NewCotAdded}/>
     
      </Stack.Navigator>
      </View>
 

       
    
  );
}

export default MainComponent;

