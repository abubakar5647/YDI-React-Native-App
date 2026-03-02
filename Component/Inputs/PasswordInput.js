import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters';

const PasswordInput = ({ placeholder }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <View
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
                color: '#A5A3A3',
                marginTop: moderateScale(5),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={toggleShowPassword} >
                <Image
                    source={
                        showPassword
                            ? require("../Icons/eye.png")
                            : require('../Icons/hide.png')
                    }
                    style={{
                        marginRight: moderateScale(10),
                        width: moderateScale(23),
                        height: moderateScale(18)
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default PasswordInput

const styles = StyleSheet.create({})