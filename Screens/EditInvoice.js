import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import ButtonGroup from '../Component/Btns/ButtonGroup'
import { useNavigation } from '@react-navigation/native'

const EditInvoice = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: moderateScale(54),
                        justifyContent: 'space-between',
                        marginHorizontal: moderateScale(20)
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: moderateScale(10),
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <Image source={require("../Images/arrow.png")} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>
                            Edit Invoice
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.closebox}>
                        <Image source={require("../Images/false.png")} />
                    </TouchableOpacity>
                </View>

                <View style={styles.invoicebox}>
                    <View
                        style={{
                            marginHorizontal: moderateScale(10),
                            marginVertical: moderateScale(20)
                        }}>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 13, color: '#262626' }}>Invoice # :</Text>
                            <Text style={{ fontSize: 11, color: '#3D50DF' }}>00-44404-0001</Text>
                        </View>

                        <View style={{ marginTop: moderateScale(10) }}>
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                                Lesson
                            </Text>
                            <View style={styles.lesson}>
                                <TextInput
                                    placeholder='Lesson1'
                                />
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                            <View style={{ width: moderateScale(115) }}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                                    Date
                                </Text>
                                <View style={styles.lesson}>
                                    <TextInput
                                        placeholder='02/30/2023'
                                    />
                                </View>
                            </View>
                            <View style={{ width: moderateScale(95) }}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                                    Start time
                                </Text>
                                <View style={styles.lesson}>
                                    <TextInput
                                        placeholder='11:00 A.M.'
                                    />
                                </View>
                            </View>
                            <View style={{ width: moderateScale(95) }}>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                                    End time
                                </Text>
                                <View style={styles.lesson}>
                                    <TextInput
                                        placeholder='1:00 P.M.'
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: moderateScale(20) }}>
                    <ButtonGroup text="Update" />
                </View>

            </View>
        </ScrollView>
    )
}

export default EditInvoice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    closebox: {
        width: moderateScale(33),
        height: moderateScale(33),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F7FC',
        borderRadius: moderateScale(21),
        alignSelf: 'flex-end',
    },
    invoicebox: {
        backgroundColor: '#F6F7FC',
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(30),
        borderRadius: 6
    },
    heading: {
        flexDirection: 'row',
        gap: 7
    },
    lesson: {
        backgroundColor: 'white',
        height: moderateScale(45),
        marginVertical: moderateScale(10),
        borderRadius: 5
    }
})