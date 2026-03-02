import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import Input from '../Component/Inputs/Input';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
    const navigation = useNavigation();
    const [payment, setPayment] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

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
                        onPress={() => navigation.navigate("Payment")}>
                        <Image source={require("../Images/arrow.png")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Payment</Text>
                </View>

                <View>
                    <View style={styles.pay}>
                        <TouchableOpacity
                            style={styles.radioContainer}
                            onPress={() => setPayment('debit')}
                        >
                            <View style={payment === 'debit' ? styles.radioSelected : styles.radioUnselected} />
                            <Image source={require("../Images/debit.png")} />
                            <Text style={styles.label}>Debit Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.radioContainer}
                            onPress={() => setPayment('apple')}
                        >
                            <View style={payment === 'apple' ? styles.radioSelected : styles.radioUnselected} />
                            <Image source={require("../Images/apple.png")} />
                            <Text style={styles.label}>Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.radioContainer}
                            onPress={() => setPayment('goagle')}
                        >
                            <View style={payment === 'google' ? styles.radioSelected : styles.radioUnselected} />
                            <Image source={require("../Images/goagle.png")} />
                            <Text style={styles.label}>Pay</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.inputText}>Card Number</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginHorizontal: moderateScale(20),
                                gap: 6,
                            }}>
                            <View style={styles.card}>
                                <TextInput
                                    maxLength={4}
                                    keyboardType="numeric"
                                    placeholder="* * * *"
                                    placeholderTextColor='#EEBC6A80'
                                />
                            </View>
                            <View style={styles.card}>
                                <TextInput
                                    maxLength={4}
                                    keyboardType="numeric"
                                    placeholder="* * * *"
                                    placeholderTextColor='#EEBC6A80'
                                />
                            </View>
                            <View style={styles.card}>
                                <TextInput
                                    maxLength={4}
                                    keyboardType="numeric"
                                    placeholder="* * * *"
                                    placeholderTextColor='#EEBC6A80'
                                />
                            </View>
                            <View style={styles.card}>
                                <TextInput
                                    maxLength={4}
                                    keyboardType="numeric"
                                    placeholder="* * * *"
                                    placeholderTextColor='#EEBC6A80'
                                />
                            </View>
                        </View>

                        <Text style={styles.inputText}>Expire time</Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 6,
                                marginHorizontal: moderateScale(20)
                            }}>
                            <View style={styles.expire}>
                                <TextInput
                                    placeholder="Month"
                                    keyboardType="numeric"
                                    placeholderTextColor='#A3A3A3'
                                />
                            </View>
                            <View style={styles.expire}>
                                <TextInput
                                    placeholder="Year"
                                    keyboardType="numeric"
                                    placeholderTextColor='#A3A3A3'
                                />
                            </View>
                        </View>

                        <Text style={styles.inputText}>Card holder</Text>
                        <Input placeholder="Enter your name and surname" />

                        <Text style={styles.inputText}>CVV</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginHorizontal: moderateScale(20),
                            gap: 7
                        }}>
                            <View style={styles.cv}>
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="* * * *"
                                    placeholderTextColor='#EEBC6A80'
                                />
                            </View>
                            <Text style={{
                                color: '#679436',
                                width: moderateScale(158)
                            }}>The last three  digits on the  back of the card.</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginLeft: moderateScale(22),
                                gap: 10,
                                marginTop: moderateScale(10)
                            }}>
                            <TouchableOpacity
                                style={{
                                    width: moderateScale(15),
                                    height: moderateScale(15),
                                    borderRadius: 4,
                                    borderWidth: 2,
                                    borderColor: '#000',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: isChecked ? '#000' : 'transparent',
                                }}
                                onPress={toggleCheckBox}
                            >
                                {isChecked && <Text style={{ color: '#fff' }}>✓</Text>}
                            </TouchableOpacity>
                            <Text style={{ color: '#353535', fontSize: 10, fontWeight: '500' }}>
                                Save information for future payment
                            </Text>
                        </View>

                        <View style={{ marginTop: moderateScale(30) }}>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.navigate('InstructorScreen')}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        textAlign: 'center'
                                    }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    radioSelected: {
        height: moderateScale(9),
        width: moderateScale(9),
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#DCDCE3',
        backgroundColor: '#A22722',
    },
    radioUnselected: {
        height: moderateScale(9),
        width: moderateScale(9),
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(2),
        borderColor: '#DCDCE3',
    },
    pay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(30)
    },
    inputText: {
        fontSize: 13,
        fontWeight: '500',
        color: 'black',
        marginLeft: moderateScale(25),
        marginTop: moderateScale(25),
        marginBottom: moderateScale(5)
    },
    card: {
        width: moderateScale(81),
        height: moderateScale(48),
        borderColor: '#DCDCE3',
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    expire: {
        width: moderateScale(168),
        height: moderateScale(48),
        borderColor: '#DCDCE3',
        borderWidth: 1,
        borderRadius: 6
    },
    cv: {
        width: moderateScale(168),
        height: moderateScale(48),
        borderColor: '#DCDCE3',
        borderWidth: 1,
        borderRadius: 6,
    },
    btn: {
        marginHorizontal: moderateScale(20),
        height: moderateScale(48),
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: moderateScale(6),
        marginTop: moderateScale(15),
    }
})
