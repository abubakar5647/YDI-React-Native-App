import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setRole } from '../Redux/Slice'

const InitialScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRoleSelect = (role) => {
    dispatch(setRole(role));
    navigation.navigate('Signin');
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <View style={{ alignItems: 'center' }}>
          <Image source={require("../Images/logo2.jpeg")}
            style={{
              width: moderateScale(307),
              height: moderateScale(307),
              marginTop: moderateScale(80),
            }} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'center',
            margin: 10
          }}>
          <TouchableOpacity
            style={styles.flex}
            onPress={() => handleRoleSelect('Student')}>
            <Image source={require('../Images/student.png')}
              style={styles.image} />
            <Text style={styles.roll}>Student</Text>
            <Image source={require('../Images/shadow.png')}
              style={styles.sImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flex}
            onPress={() => handleRoleSelect('Instructor')}>
            <Image source={require('../Images/instructor.png')}
              style={styles.image} />
            <Text style={styles.roll}>Instructor</Text>
            <Image source={require('../Images/shadow.png')}
              style={styles.sImage} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default InitialScreen

const styles = StyleSheet.create({
  flex: {
    width: 110,
    height: 110,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    top: 15
  },
  roll: {
    top: 20,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16
  },
  sImage: {
    width: 140.65,
    top: 21
  }
})

