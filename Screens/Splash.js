import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("InitialScreen")
        })
    }, [])
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <StatusBar
                backgroundColor="black"
                barStyle="dark-content"
            />
            <ScrollView>
                <View>
                    <Image source={require("../Images/logo.png")}
                        style={{
                            width: moderateScale(333),
                            height: moderateScale(224),
                            marginTop:moderateScale(230)
                        }} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})