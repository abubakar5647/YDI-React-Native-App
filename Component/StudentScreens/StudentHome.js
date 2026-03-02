import {
    StyleSheet,
    Text, View,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
    ImageBackground,
    TextInput, FlatList,
    Modal,
} from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import Slider from '@react-native-community/slider';
import ButtonGroup from '../Btns/ButtonGroup';


const StudentHome = () => {
    const [fliter, setFilter] = useState(false);
    const [activeTransmission, setActiveTransmission] = useState('manual');
    const [activeGender, setActiveGender] = useState('male');
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const handleMinChange = (value) => {
        if (value <= maxValue) {
            setMinValue(value);
        }
    };

    const handleMaxChange = (value) => {
        if (value >= minValue) {
            setMaxValue(value);
        }
    };

    const user = [
        {
            id: '1',
            image: require('../Icons/victoria.png'),
            heading: "Aimee Victoria",
            title: "Instructor",
            experince: "7 years experience",
            rating: " Rate Per Hour/exam",
            option: " Car Option"
        },
        {
            id: '2',
            image: require('../Icons/victoria.png'),
            heading: "Aimee Victoria",
            title: "Instructor",
            experince: "7 years experience",
            rating: " Rate Per Hour/exam",
            option: " Car Option"
        },
        {
            id: '3',
            image: require('../Icons/victoria.png'),
            heading: "Aimee Victoria",
            title: "Instructor",
            experince: "7 years experience",
            rating: " Rate Per Hour/exam",
            option: " Car Option"
        },
    ]

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar
                backgroundColor='transparent'
                translucent
                barStyle="dark-content"
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
                        onPress={() => navigation.goBack()}>
                        <Image source={require("../Icons/arrow.png")} />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#000000'
                        }}>Find Instructor</Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 10,
                        alignItems: 'center',
                        marginHorizontal: moderateScale(20)
                    }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderRadius: moderateScale(5),
                            borderColor: '#DCDCE3',
                            fontSize: moderateScale(12),
                            fontWeight: '500',
                            flex: 1,
                            height: moderateScale(48),
                            paddingHorizontal: moderateScale(15),
                            marginVertical: moderateScale(17),
                            backgroundColor: '#0000000D',
                            borderRadius: moderateScale(21),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <TextInput
                            placeholder="Search with postcode"
                            placeholderTextColor='#A3A3A3'
                        />
                        <TouchableOpacity
                            style={{
                                width: moderateScale(28),
                                height: moderateScale(28),
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'white',
                                borderRadius: moderateScale(21)
                            }}>
                            <Image source={require("../Icons/search.png")} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => setFilter(true)}
                        style={{
                            width: moderateScale(42),
                            height: moderateScale(42),
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#F6F7FC',
                            borderRadius: moderateScale(25)
                        }}>
                        <Image source={require("../Icons/filter.png")} />
                    </TouchableOpacity>
                </View>


                <ImageBackground
                    source={require("../Icons/map.png")}
                    style={{ width: "100%", height: "100%" }}>

                    <Image source={require("../Icons/location1.png")}
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: moderateScale(20),
                            marginTop: moderateScale(20)
                        }} />

                    <Image source={require("../Icons/location1.png")}
                        style={{
                            marginLeft: moderateScale(20),
                            marginTop: moderateScale(150)
                        }} />

                    <Image source={require("../Icons/location1.png")}
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: moderateScale(80),
                            marginTop: moderateScale(60)
                        }} />

                    <View>
                        <FlatList
                            data={user}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        width: moderateScale(354),
                                        height: moderateScale(176),
                                        borderRadius: 9,
                                        backgroundColor: 'white',
                                        marginLeft: 10,
                                        padding: 10,
                                    }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: moderateScale(15),
                                        }}>
                                        <TouchableOpacity>
                                            <Image
                                                source={item.image}
                                                style={{
                                                    width: moderateScale(102),
                                                    height: moderateScale(86),
                                                    borderRadius: 9
                                                }}
                                            />
                                        </TouchableOpacity>

                                        <View>
                                            <Text
                                                style={{ fontSize: moderateScale(16), color: 'black', fontWeight: "500" }}>
                                                {item.heading}
                                            </Text>
                                            <Text
                                                style={{ fontSize: moderateScale(13), color: '#3D50DF', fontWeight: "400" }}>
                                                {item.title}
                                            </Text>
                                            <Text
                                                style={{ fontSize: moderateScale(13), color: '#868585', fontWeight: "400" }}>
                                                {item.experince}
                                            </Text>
                                            <Text
                                                style={{ fontSize: moderateScale(13), color: '#868585', fontWeight: "400" }}>
                                                <View style={{ width: 7, height: 7, backgroundColor: '#EEBC6A', borderRadius: 5 }} />
                                                {item.rating}
                                                <Text style={{ color: '#679436' }}> $15</Text>
                                            </Text>
                                            <Text
                                                style={{ fontSize: moderateScale(13), color: '#868585', fontWeight: "400" }}>
                                                <View style={{ width: 7, height: 7, backgroundColor: '#EEBC6A', borderRadius: 5 }} />
                                                {item.option}
                                                <Text style={{ color: '#679436' }}> Automatic</Text>
                                            </Text>
                                        </View>
                                    </View>

                                    <View>
                                        <TouchableOpacity
                                            style={{
                                                width: moderateScale(113),
                                                height: moderateScale(33),
                                                backgroundColor: '#679436',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 7,
                                                alignSelf: 'flex-end',
                                                marginTop: moderateScale(15)
                                            }}>
                                            <Text style={{
                                                color: "white"
                                            }}>Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </ImageBackground>

            </View>



            <Modal
                animationType="slide"
                transparent={true}
                visible={fliter}
            >
                <View style={styles.Modal}>
                    <View>
                        <TouchableOpacity
                            onPress={() => setFilter(false)}
                            style={{
                                flexDirection: 'row',
                                gap: 10,
                                marginTop: 45,
                                marginLeft: 20
                            }}>
                            <Image source={require("../Icons/arrow.png")} />
                            <Text>Search</Text>
                        </TouchableOpacity>

                        <View style={{ marginHorizontal: 20 }}>
                            <View>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black', marginTop: 20 }}>
                                    Price Range
                                    <Text style={{ fontSize: 12 }}>( per hour / exam ) </Text>
                                </Text>

                                <Slider
                                    style={{ width: '100%' }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={1}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="#dcdce3"
                                    thumbTintColor="white"
                                    value={minValue}
                                    onValueChange={handleMinChange}
                                />


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'black' }}>{minValue.toFixed(2)}$</Text>
                                    <Text style={{ color: 'black' }}>100$</Text>
                                </View>

                                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black', marginTop: 20 }}>
                                    Distance
                                </Text>

                                <Slider
                                    style={{ width: '100%' }}
                                    minimumValue={0}
                                    maximumValue={100}
                                    step={1}
                                    minimumTrackTintColor="black"
                                    maximumTrackTintColor="#dcdce3"
                                    thumbTintColor="white"
                                    value={maxValue}
                                    onValueChange={handleMaxChange}
                                />


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'black' }}>{minValue.toFixed(2)}KM</Text>
                                    <Text style={{ color: 'black' }}>100KM</Text>
                                </View>
                            </View>

                            <View>
                                <View>
                                    <Text style={styles.label}>Transmission</Text>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                activeTransmission === 'manual' ? styles.activeButton : styles.inactiveButton
                                            ]}
                                            onPress={() => setActiveTransmission('manual')}
                                        >
                                            <Text style={styles.buttonText}>Manual</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                activeTransmission === 'auto' ? styles.activeButton : styles.inactiveButton
                                            ]}
                                            onPress={() => setActiveTransmission('auto')}
                                        >
                                            <Text style={styles.buttonText}>Auto</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View>
                                    <Text style={styles.label}>Gender</Text>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                activeGender === 'male' ? styles.activeButton : styles.inactiveButton
                                            ]}
                                            onPress={() => setActiveGender('male')}
                                        >
                                            <Text style={styles.buttonText}>Male</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                activeGender === 'female' ? styles.activeButton : styles.inactiveButton
                                            ]}
                                            onPress={() => setActiveGender('female')}
                                        >
                                            <Text style={styles.buttonText}>Female</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{ marginTop: moderateScale(50) }}
                        >
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => setFilter(false)}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        textAlign: 'center'
                                    }}>
                                    Search
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default StudentHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flex: {
        width: moderateScale(117),
        height: moderateScale(128),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: moderateScale(10),
        paddingVertical: moderateScale(20),
        paddingLeft: moderateScale(5)
    },
    sflex: {
        width: moderateScale(179),
        height: moderateScale(128),
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: moderateScale(10),
        paddingVertical: moderateScale(20),
        paddingLeft: moderateScale(5)
    },
    Modal: {
        backgroundColor: "#ffffff",
        height: "100%",
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    sliderContainer: {
        height: 70,
        flex: 1,
    },
    selectedStyle: {
        backgroundColor: '#da0f22',
    },
    unselectedStyle: {
        backgroundColor: '#ddd',
    },
    trackStyle: {
        height: 10,
    },
    markerStyle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#454d55',
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    button: {
        width: moderateScale(168),
        height: moderateScale(48),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        borderWidth: 1,
    },
    activeButton: {
        backgroundColor: '#0000004D',
        borderColor: '#000000',
    },
    inactiveButton: {
        backgroundColor: 'white',
        borderColor: '#DCDCE3',
    },
    buttonText: {
        color: 'black',
    },
    heading: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: 'black',
        marginBottom: moderateScale(10)
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: moderateScale(5),
        marginBottom: moderateScale(20)
    },
    picker: {
        height: moderateScale(40),
        width: '100%'
    },
    selectedLanguageText: {
        fontSize: moderateScale(14),
        color: 'black',
        marginTop: moderateScale(10)
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
