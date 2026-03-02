import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const RefundInvoice = () => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: moderateScale(54),
                        marginLeft: moderateScale(21),
                        gap: moderateScale(10),
                        marginBottom: moderateScale(20)
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../Images/arrow.png")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>
                        Refund Invoice
                    </Text>
                </View>

                <View style={styles.refundContainer}>

                    <View
                        style={styles.invoiceDetails}>
                        <View style={styles.heading}>
                            <Text style={{ fontSize: 13, color: '#262626' }}>Invoice # :</Text>
                            <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>00-44404-0001</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            <View style={styles.heading}>
                                <Text style={{ fontSize: 13, color: '#262626' }}>Name:</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>Jennifer Aniston</Text>
                            </View>
                            <View style={styles.heading}>
                                <Text style={{ fontSize: 13, color: '#262626' }}>Date:</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>02/30/2023</Text>
                            </View>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 20
                        }}>
                            <View style={styles.heading}>
                                <Text style={{ fontSize: 13, color: '#262626' }}>Start time:</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>11:00A.M.</Text>
                            </View>
                            <View style={styles.heading}>
                                <Text style={{ fontSize: 13, color: '#262626' }}>End time:</Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>01:00A.M.</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: moderateScale(20), }}>
                            <View style={styles.fee}>
                                <Text style={{ fontSize: 13, color: '#262626' }}>Instructor fee </Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>$300.00</Text>
                            </View>
                            <View style={styles.fee}>
                                <Text style={{ fontSize: 13, color: '#262626' }}>Instructor fee </Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#484848' }}>$300.00</Text>
                            </View>
                            <View style={styles.fee}>
                                <Text style={{ fontSize: 13, color: '#679436' }}>Total fee </Text>
                                <Text style={{ fontSize: 13, fontWeight: '400', color: '#679436' }}>$600.00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: moderateScale(10) }}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                            Refund amount
                        </Text>
                        <View style={styles.lesson}>
                            <TextInput
                                placeholder='$300'
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                            Add comment
                        </Text>
                        <View
                            style={styles.suggestion}>
                            <TextInput
                                placeholder='Write Some Suggestion'
                                placeholderTextColor="#A5A3A3"
                            />
                        </View>
                    </View>

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <TouchableOpacity
                        style={[
                            styles.btn2,
                            {
                                backgroundColor: '#A5A3A3',
                            },
                        ]}>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                fontWeight: '600',
                                textAlign: 'center'
                            }}>
                            Accept
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn2}>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                fontWeight: '600',
                                textAlign: 'center'
                            }}>
                            Decline
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

export default RefundInvoice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    suggestion: {
        borderWidth: 1,
        borderColor: '#DCDCE3',
        borderRadius: 5,
        height: moderateScale(108),
        paddingLeft: 10
    },
    lesson: {
        backgroundColor: 'white',
        height: moderateScale(45),
        marginVertical: moderateScale(10),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DCDCE3'
    },
    refundContainer: {
        marginHorizontal: moderateScale(20)
    },
    invoiceDetails: {
        borderWidth: 1,
        borderColor: '#00000026',
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(20),
        borderRadius: 5
    },
    fee: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.7,
        borderColor: '#D8D8D8E5',
        paddingBottom: 7,
        marginTop: moderateScale(10),
    },
    btn2: {
        width: "44%",
        height: moderateScale(48),
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: moderateScale(6),
        marginTop: moderateScale(35),
        marginHorizontal: moderateScale(5),
    },
})