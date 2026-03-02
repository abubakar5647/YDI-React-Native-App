import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, StatusBar, Button, } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import ButtonGroup from '../Component/Btns/ButtonGroup'
import Input from '../Component/Inputs/Input'

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='dark-content'
      />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(54),
            marginLeft: moderateScale(21),
            gap: moderateScale(10)
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image source={require("../Images/arrow.png")} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Sign Up to your Account</Text>
        </View>

        <View style={{ marginTop: moderateScale(30) }}>
          <Input placeholder="Enter your Email address" />
        </View>
        <Text
          style={{
            color: '#444444',
            fontSize: moderateScale(10),
            fontWeight: '500',
            width: moderateScale(256),
            marginHorizontal: moderateScale(46)
          }}>We will send you a message to set or reset your new password</Text>

        <View style={{ marginTop: moderateScale(30) }}>
          <ButtonGroup text="Send Email" />
        </View>
      </View>
    </ScrollView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})