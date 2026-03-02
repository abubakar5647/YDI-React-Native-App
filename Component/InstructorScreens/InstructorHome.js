import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const InstructorHome = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="dark-content"
      />

      <View style={styles.container}>

        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScale(54),
            marginLeft: moderateScale(21),
            gap: moderateScale(10)
          }}>
          <TouchableOpacity>
            <Image source={require("../Icons/arrow.png")} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Home</Text>
        </View>

        <View
          style={{
            marginTop: moderateScale(30),
            marginHorizontal: moderateScale(10),
          }}>
          <ImageBackground source={require('../Icons/driving.png')}
            style={styles.backgroundImage}>
            <View style={styles.overlay} />
            <View style={styles.content}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: moderateScale(28),
                      fontWeight: '600',
                      marginTop: moderateScale(31),
                      marginLeft: moderateScale(21),
                      color: 'white'
                    }}>Aimee Victoria</Text>
                  <Text
                    style={{
                      fontSize: moderateScale(19),
                      fontWeight: '600',
                      marginTop: moderateScale(10),
                      marginLeft: moderateScale(21),
                      color: 'white'
                    }}>Admin</Text>
                </View>
                <Image source={require("../Icons/border.png")} />
              </View>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            backgroundColor: '#00000014',
            marginTop: moderateScale(15),
            paddingHorizontal: moderateScale(10),
            borderRadius: moderateScale(10)
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: moderateScale(5),
              marginTop: moderateScale(10),
              marginBottom: moderateScale(7)
            }}>
            <View style={styles.flex}>
              <Image source={require("../Icons/students.png")} />
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontWeight: '600',
                  marginTop: moderateScale(10)
                }}>Total Students</Text>
              <Text
                style={{
                  color: '#3D50DF',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: moderateScale(7)
                }}> 39</Text>
            </View>
            <View style={styles.flex}>
              <Image source={require("../Icons/students.png")} />
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontWeight: '600',
                  marginTop: moderateScale(10)
                }}>Total Students</Text>
              <Text
                style={{
                  color: '#3D50DF',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: moderateScale(7)
                }}> 39</Text>
            </View>
            <View style={styles.flex}>
              <Image source={require("../Icons/students.png")}
                style={{

                }} />
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontWeight: '600',
                  marginTop: moderateScale(10)
                }}>Total Students</Text>
              <Text
                style={{
                  color: '#3D50DF',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: moderateScale(7)
                }}> 39</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: moderateScale(5),
              marginBottom: moderateScale(15)
            }}>
            <View style={styles.sflex}>
              <Image source={require("../Icons/tranings.png")} />
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontWeight: '600',
                  marginTop: moderateScale(10)
                }}>Upcoming Trainings.</Text>
              <Text
                style={{
                  color: '#3D50DF',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: moderateScale(7)
                }}> 39</Text>
            </View>
            <View style={styles.sflex}>
              <Image source={require("../Icons/tranings.png")} />
              <Text
                style={{
                  color: 'black',
                  fontSize: moderateScale(14),
                  fontWeight: '600',
                  marginTop: moderateScale(10)
                }}>Upcoming Trainings.</Text>
              <Text
                style={{
                  color: '#3D50DF',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: moderateScale(7)
                }}> 39</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default InstructorHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: moderateScale('100%'),
    height: moderateScale(200),
    borderRadius: 10
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  flex: {
    width: moderateScale(117),
    height: moderateScale(128),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(20),
    paddingLeft: moderateScale(5)
  },
  sflex: {
    width: moderateScale(179),
    height: moderateScale(128),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(20),
    paddingLeft: moderateScale(5)
  },
})