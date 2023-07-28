import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native';
const Details = () => {
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
          <Title style={styles.title}>image</Title>
          
        </Card.Content>
      </Card>
      <ScrollView>
      <Card style={styles.card2}>
        <Card.Content>
          <Title style={styles.title1}>Student Details</Title>
          <Title style={styles.title}>Name :</Title>
          <Title style={styles.title}>Joined Date : </Title>
          <Title style={styles.title}>Fees Status :</Title>
          <Title style={styles.title}>Emergency contact :</Title>
          <Title style={styles.title}>Father Name :</Title>
          <Title style={styles.title}>Total Days Present :</Title>


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
    height:'95%',
    borderRadius:1,
    marginTop: '1%',
  },
  card3: {
    width: '130%',
    marginTop: '0%',
    borderRadius:1,
    marginTop: '1%',
    height:'40%',
  },
  title: {
    fontSize: 25,
    marginBottom:'2%',
    marginTop:'2%',
    marginLeft:'4%'
  },
  title1: {
    marginTop:'5%',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft:'13%',
    marginBottom:'4%'
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
});

export default Details;