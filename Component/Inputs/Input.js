import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Input = ({ placeholder }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                style={{
                    borderWidth: 1,
                    marginHorizontal: moderateScale(20),
                    borderRadius: moderateScale(5),
                    borderColor: '#DCDCE3',
                    fontSize: moderateScale(12),
                    fontWeight: '500',
                    flex: 1,
                    height: moderateScale(48),
                    paddingLeft: moderateScale(15),
                }}
                placeholderTextColor='#A3A3A3'
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})