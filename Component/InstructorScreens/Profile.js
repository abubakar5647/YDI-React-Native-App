import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, StatusBar, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'

const Profile = () => {
  const [activeButton, setActiveButton] = useState('instructor');
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle="light-content"
      />

      <View style={styles.container}>
        <ImageBackground source={require("../Icons/profile.png")}
          style={{ width: '100%', height: moderateScale(289) }}>
          <View style={styles.overlay}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: moderateScale(54),
                marginHorizontal: moderateScale(30),
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: moderateScale(10)
                }}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}>
                  <Image source={require("../Icons/arrow.png")}
                    style={{ tintColor: 'white' }} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: 'white'
                  }}>Profile</Text>
              </View>

              <TouchableOpacity>
                <Image source={require("../Icons/power.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginLeft: moderateScale(30)
          }}>
          <TouchableOpacity
            style={{
              position: 'relative',
              bottom: moderateScale(50),
            }}>
            <Image
              source={require("../Icons/victoria.png")}
              style={{
                width: moderateScale(100),
                height: moderateScale(100),
                borderRadius: moderateScale(50),
              }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: '#3D50DF',
              fontSize: moderateScale(17),
              fontWeight: '400'
            }}>Instructor</Text>
        </View>

        <View
          style={{
            marginHorizontal: moderateScale(35)
          }}>

          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  activeButton === 'instructor' ? styles.activeButton : styles.inactiveButton,
                  { borderTopLeftRadius: 7, borderBottomLeftRadius: 7 }
                ]}
                onPress={() => setActiveButton('instructor')}
              >
                <Text style={activeButton === 'instructor' ? styles.activeText : styles.inactiveText}>
                  Instructor Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  activeButton === 'services' ? styles.activeButton : styles.inactiveButton,
                  { borderTopRightRadius: 7, borderBottomRightRadius: 7 }
                ]}
                onPress={() => setActiveButton('services')}
              >
                <Text style={activeButton === 'services' ? styles.activeText : styles.inactiveText}>
                  Services
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              {activeButton === 'instructor' && (
                <View>

                  <View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 17,
                        fontWeight: '500',
                        marginTop: 15
                      }}>Name</Text>
                    <Text
                      style={{
                        color: '#A5A3A3',
                        borderBottomWidth: 1,
                        borderColor: '#DCDCE3',
                        fontSize: 14,
                        fontWeight: '400',
                        marginTop: 15
                      }}>Aimee Victoria</Text>
                  </View>

                  <View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 17,
                        fontWeight: '500',
                        marginTop: 15
                      }}>Address</Text>
                    <Text
                      style={{
                        color: '#A5A3A3',
                        borderBottomWidth: 1,
                        borderColor: '#DCDCE3',
                        fontSize: 14,
                        fontWeight: '400',
                        marginTop: 15
                      }}>Mr John 132, My Street, Kingston, New York </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>

                    <View style={{ width: moderateScale(127) }}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 17,
                          fontWeight: '500',
                          marginTop: 15
                        }}>Rate Per hour</Text>

                      <Text
                        style={{
                          color: '#A5A3A3',
                          borderBottomWidth: 1,
                          borderColor: '#DCDCE3',
                          fontSize: 14,
                          fontWeight: '400',
                          marginTop: 15
                        }}>$50 </Text>
                    </View>

                    <View style={{ width: moderateScale(127) }}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 17,
                          fontWeight: '500',
                          marginTop: 15
                        }}>Postcode</Text>

                      <Text
                        style={{
                          color: '#A5A3A3',
                          borderBottomWidth: 1,
                          borderColor: '#DCDCE3',
                          fontSize: 14,
                          fontWeight: '400',
                          marginTop: 15
                        }}>54700 </Text>
                    </View>
                  </View>

                  <View>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 17,
                        fontWeight: '500',
                        marginTop: 15
                      }}>Vehicle Type</Text>
                    <Text
                      style={{
                        color: '#A5A3A3',
                        borderBottomWidth: 1,
                        borderColor: '#DCDCE3',
                        fontSize: 14,
                        fontWeight: '400',
                        marginTop: 15
                      }}>Sedan</Text>
                    <Text
                      style={{
                        color: '#A5A3A3',
                        borderBottomWidth: 1,
                        borderColor: '#DCDCE3',
                        fontSize: 14,
                        fontWeight: '400',
                        marginTop: 15
                      }}>Convertible</Text>
                  </View>
                </View>
              )}
              {activeButton === 'services' && (
                <View>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>Services</Text>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      fontSize: 12,
                      fontWeight: '500',
                      gap: 5,
                      borderBottomWidth: 0.7,
                      height: moderateScale(27),
                      marginTop: moderateScale(5)
                    }}>
                    <Text style={{ color: '#A22722' }}>1.</Text>
                    <Text>
                      Delivering lessons on driving to the students.
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      fontSize: 12,
                      fontWeight: '500',
                      gap: 5,
                      borderBottomWidth: 0.7,
                      height: moderateScale(29),
                      marginTop: moderateScale(5)
                    }}>
                    <Text style={{ color: '#A22722' }}>2.</Text>
                    <Text>
                      Performing practical lessons.
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      fontSize: 12,
                      fontWeight: '500',
                      gap: 5,
                      borderBottomWidth: 0.7,
                      height: moderateScale(41),
                      marginTop: moderateScale(5)
                    }}>
                    <Text style={{ color: '#A22722' }}>3.</Text>
                    <Text>
                      Planning out all the driving lessons according to the student's requirements.
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      fontSize: 12,
                      fontWeight: '500',
                      gap: 5,
                      borderBottomWidth: 0.7,
                      height: moderateScale(29),
                      marginTop: moderateScale(5)
                    }}>
                    <Text style={{ color: '#A22722' }}>4.</Text>
                    <Text>
                      Explaining the driving procedures and techniques.
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>

          <View>


            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: 10,
                marginTop: moderateScale(25),
                marginBottom: moderateScale(35)
              }}>
              <TouchableOpacity
                style={{
                  width: moderateScale(88),
                  height: moderateScale(40),
                  flexDirection: 'row',
                  gap: 5,
                  backgroundColor: '#000000',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image source={require("../Icons/FAQs.png")} />
                <Text style={{ color: 'white' }}>FAQs</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: moderateScale(124),
                  height: moderateScale(40),
                  flexDirection: 'row',
                  gap: 5,
                  backgroundColor: '#679436',
                  borderRadius: 6,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image source={require("../Icons/chat.png")} />
                <Text style={{ color: 'white' }}>Start Chat</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: moderateScale(152),
    height: moderateScale(38),
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#00000080',
  },
  inactiveButton: {
    backgroundColor: '#F6F7FC',
    borderWidth: 1,
    borderColor: '#F6F7FC',
  },
  activeText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  inactiveText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    marginTop: moderateScale(20),
    padding: moderateScale(10),
    borderRadius: 7,
  },
})