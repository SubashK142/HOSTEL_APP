import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import LoadPage from './loadingpage';
import Login from './loginpage';
import Attendance from './attencepage';
import MainComponent from './maincomponent';
import { useEffect } from 'react';
import firebase from './fireebaseconfig';


const Stack = createStackNavigator();

function App() {

  // useEffect(() => {
  
  //   const database = firebase.database();
    
  //   database.ref('users').set({
  //     name: 'John',
  //     age: 30,
  //   });
 
  //   database.ref('users').once('value', (snapshot) => {
  //     const users = snapshot.val();
  //     console.log(users);
  //   });
  // }, []);


  return (
    <NavigationContainer>
    <MainComponent/>
    </NavigationContainer>
  );
}

export default App;