
import React from 'react';
import { Text,View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Rules = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
      navigation.navigate('register');
    };
  return (
        
    <View style={styles.container}>
       
      <Card style={styles.card1}>
        <Card.Content>
            <View>
                <Title style={styles.view1}>
                </Title>
            </View>
            <View>

          <Title style={styles.view2}>Card 1</Title>
            </View>
        
        </Card.Content>
      </Card>


      <Card style={styles.card3}>
        <Card.Content>
          <Title style={styles.title3}>Rule And Regulations</Title>
          
        </Card.Content>
      </Card>
      <ScrollView>
      <Card style={styles.card2}>
        <Card.Content>
          
        <Title style={styles.title}>1) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>2) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>3) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>1) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>1) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>1) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>1) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title}>1) If you vacate before one month amount will not ne replaced</Title>
        <Title style={styles.title1}>6) If you vacate before one month amount will not ne replaced</Title>
        <TouchableOpacity onPress={handleButtonPress}>
        <View>
        <Text style={styles.button}>
        Register
        </Text>
        </View>
        </TouchableOpacity>
        </Card.Content>
      </Card>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height:'500%'
    
  },
  card1: {
    width: '130%',
    height:'11%',
        marginTop: '10%',
        borderRadius:1
  },
  card2: {
    width: '130%',
    height:'100%',
    borderRadius:1,
    marginTop: '1%',
  },
  card3: {
    width: '130%',
    marginTop: '0%',
    borderRadius:1,
    marginTop: '1%',
    height:'10%',
  },
  title: {
    fontSize: 23,
    marginBottom:'2%',
    marginTop:'2%',
    marginLeft:'0%',
    width:'80%'
    
  },
  title3: {
    fontSize: 33,
    marginBottom:'0%',
    marginTop:'3%',
    marginLeft:'4%',
    padding:2,
    fontWeight:'bold'
  },
  title1: {
    fontSize: 23,
    marginBottom:'3%',
    marginTop:'2%',
    marginLeft:'0%',
    width:'80%'
  },
  content: {
    fontSize: 16,
  },
  view1:{
    height:'100%',
    width:'15%',
    backgroundColor:'gray',
    borderRadius:100,
    
  },
  view2:{
    marginLeft:'60%',
    marginTop:'-10%'
  }
  ,button:{
    width:'40%',
    height:'35%',
    backgroundColor:'#D9D9D9',
    fontSize: 25,
    textAlign:'center',
    marginLeft:'17%',
    borderRadius:10,
    

  }
});

export default Rules;