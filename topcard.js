import React from 'react';
import { View, StyleSheet,Image,TouchableOpacity,Modal,Text ,TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



const Topcard = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigation();
  
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleButtonPress = (navigation, page) => {
    navigation.navigate(page);
    setIsDropdownVisible(false); // Close the dropdown after navigating
  };

  const handleOverlayPress = () => {
    setIsDropdownVisible(false); // Close the dropdown when the overlay is pressed
  };

  return (
    <TouchableWithoutFeedback onPress={handleOverlayPress}>
      <View style={styles.outerCard}>
        <StatusBar />
        {/* First nested card */}
        <View style={styles.innerCard1}>
          {/* Content inside the first nested card */}
        </View>

        {/* Second nested card */}
        <View>
          <TouchableOpacity onPress={toggleDropdown}>
            <Image source={{ uri: 'https://res.cloudinary.com/dmyhvrlo2/image/upload/v1689498964/menu_hmw0gi.png' }} style={styles.baf} />
            {/* Content inside the second nested card */}
          </TouchableOpacity>
          <Modal
            visible={isDropdownVisible}
            transparent={true}
            onRequestClose={() => setIsDropdownVisible(false)}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <View style={styles.dropdownContent}>
                {/* Dropdown menu content */}
                <TouchableOpacity onPress={() => handleButtonPress(navigate, 'attendpage')}>
                  <Text style={styles.dropdownItem}>Attendance</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleButtonPress(navigate, 'newcot')}>
                  <Text style={styles.dropdownItem}>New Student</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text style={styles.dropdownItem}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  outerCard: {
    width:'100%',
    height:'7%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    display:'flex',
    flexDirection:'row',
    marginTop:'9%',
    alignContent:'center',
    justifyContent:'space-between'
    ,marginTop:StatusBar.currentHeight
  },
  innerCard1: {
    marginTop:'-2%',
    width:'14%',
    height:52,
    backgroundColor: 'grey',
    borderRadius: 58,
    
  },
  baf:{
    width:25,
    height:30,
   marginTop:'5%',
  
  
  },

  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    width:'40%',
    height:'50%',
    flexDirection:'column',
    justifyContent:'flex-start',
    marginTop:'13%'
,    marginLeft:'59%'
  
  },
  dropdownContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  dropdownItem: {
    fontSize: 16,
    paddingVertical: 10,
  },
});

export default Topcard;



