import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const Templates = () => {
    const navigation = useNavigation();
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
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../Images/arrow.png")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>
                        Add new template
                    </Text>
                </View>

                <View
                    style={styles.suggestion}>
                    <TextInput
                        placeholder='Write Some Suggestion'
                        placeholderTextColor="#A5A3A3"
                    />
                </View>


                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("FeedBack")}
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
                            Cancel
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("FeedBack")}
                        style={styles.btn2}>
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                fontWeight: '600',
                                textAlign: 'center'
                            }}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Templates

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
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(50),
        paddingLeft: 10
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
