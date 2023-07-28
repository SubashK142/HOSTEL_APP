import { StatusBar } from 'react-native';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Branchescard from './branchescard';

export default function Branches() {

  return (
    <View style={{width:'100%',height:'100%'}}>
    <StatusBar/>
    <Text style={{marginTop:'10%',textAlign:'center',fontSize:35,fontWeight:'bold'}}>Branches
    </Text>
    <View style={styles.container}>
        
    <View style={styles.column}>

      <Branchescard page='Gandhipuram'/>
      <Branchescard/>
      <Branchescard/>

    </View>
    <View style={styles.column}>

      <Branchescard/>
      <Branchescard/>
      <Branchescard/>

    </View>
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },


});