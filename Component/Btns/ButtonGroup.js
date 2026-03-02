import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ButtonGroup = ({ text, onPress }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.btn}
                onpress={onPress}>
                <Text
                    style={{
                        color: '#FFFFFF',
                        fontSize: 15,
                        fontWeight: '600',
                        textAlign: 'center'
                    }}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonGroup

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: moderateScale(20),
        height: moderateScale(48),
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: moderateScale(6),
        marginTop: moderateScale(15),
    }
})