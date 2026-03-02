import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Active = ({ color }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                gap: 5,
                justifyContent: 'center'
            }}>
            <View
                style={[styles.border && styles.active]}
            />
            <View
                style={styles.border}
            />
            <View
                style={styles.border}
            />
        </View>
    )
}

export default Active

const styles = StyleSheet.create({
    border: {
        width: moderateScale(114),
        height: moderateScale(5),
        backgroundColor: '#DCDCE3',
        borderRadius: 5,
        marginTop: moderateScale(70)
    }
    ,
    active: {
        backgroundColor: '#A22722',
        width: moderateScale(114),
        height: moderateScale(5),
        backgroundColor: '#A2272',
        borderRadius: 5,
        marginTop: moderateScale(70)
    },
})