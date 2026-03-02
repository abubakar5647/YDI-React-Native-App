import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, FlatList, ScrollView, TextInput, TouchableOpacity, Modal } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const FeedBack = () => {
    const navigation = useNavigation();
    const selectedDate = useSelector((state) => state.date.selectedDate);
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedTem, setSelectedTem] = useState(null);
    const [fliter, setFilter] = useState(false);

    const buttons = [
        { id: 1, label: 'Complete' },
        { id: 2, label: 'Incomplete' },
        { id: 3, label: 'Re-take' },
        { id: 4, label: 'Re-schedule' },
        { id: 5, label: 'Overall Service' },
    ];

    const handlePress = (id) => {
        setSelectedButton(id);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.button,
                {
                    backgroundColor: selectedButton === item.id ? '#000000' : '#F6F7FC',
                },
            ]}
            onPress={() => handlePress(item.id)}
        >
            <Text
                style={[
                    styles.buttonText,
                    {
                        color: selectedButton === item.id ? 'white' : '#000000',
                    },
                ]}
            >
                {item.label}
            </Text>
        </TouchableOpacity>
    );



    const Tembuttons = [
        { id: 1, label: 'Overall Service' },
        { id: 2, label: 'Customer Support' },
        { id: 3, label: 'Speed and Efficiency' },
        { id: 4, label: 'Repair Quality' },
        { id: 5, label: 'Transparency' },
    ];

    const handleTem = (id) => {
        setSelectedTem(id);
    };

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
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Feedback</Text>
                </View>

                <View style={styles.mainflex}>
                    <View style={styles.driving_bg}>
                        <View>
                            <Image style={styles.car_girl} source={require('../Images/aniston.png')} />
                        </View>
                        <View>
                            <Text style={styles.Jennifer}>Jennifer Aniston</Text>
                            <Text style={styles.nmbr}>+92 123445418</Text>
                            <Text style={styles.Driving}>Driving Course</Text>
                        </View>
                    </View>

                    <View style={styles.Start_End_date_flex}>
                        <View style={styles.date_flex}>
                            <Text style={styles.text}>Start Date:</Text>
                            <Text style={styles.selected_date}>{selectedDate}</Text>
                        </View>
                        <View style={styles.date_flex}>
                            <Text style={styles.text}>End Date:</Text>
                            <Text style={styles.selected_date}>05/30/2023</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.messege_flex1}>
                    <View style={styles.messege_flex2}>
                        <TextInput placeholder="Write some instructions." />
                        <TouchableOpacity onPress={() => setFilter(true)}>
                            <Image style={styles.pancil} source={require('../Images/pencil.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginLeft: moderateScale(20) }}>
                    <Text style={styles.status}>Add Status</Text>
                    <FlatList
                        data={buttons}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.list}
                    />
                </View>
            </View>


            <Modal
                animationType="slide"
                transparent={true}
                visible={fliter}
            >
                <View style={styles.modalOverlay} />
                <View style={styles.Modal}>
                    <View style={styles.ModalBody}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 20
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Templates</Text>
                            <TouchableOpacity onPress={() => setFilter(false)}>
                                <Image source={require("../Images/false.png")} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <FlatList
                                data={Tembuttons}
                                renderItem={({ item }) => (
                                    <View>
                                        <TouchableOpacity
                                            style={[
                                                styles.button,
                                                {
                                                    backgroundColor: selectedTem === item.id ? '#000000' : '#F6F7FC',
                                                },
                                            ]}
                                            onPress={() => handleTem(item.id)}
                                        >
                                            <Text
                                                style={[
                                                    styles.buttonText,
                                                    {
                                                        color: selectedTem === item.id ? 'white' : '#000000',
                                                    },
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                keyExtractor={(item) => item.id.toString()}
                                contentContainerStyle={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    marginHorizontal: moderateScale(20),
                                    gap: 10
                                }}

                            />


                            <TouchableOpacity
                                onPress={() => navigation.navigate("Templates")}
                                style={styles.addTem}>
                                <Image source={require("../Images/add.png")} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: moderateScale(11),
        fontWeight: '500',
        color: 'black',
    },
    Arrow: {
        width: moderateScale(20),
        height: moderateScale(20),
    },
    header_Heading: {
        fontSize: moderateScale(16),
        fontWeight: '500',
        color: 'black',
    },
    header_flex: {
        flexDirection: 'row',
        marginHorizontal: moderateScale(20),
        gap: moderateScale(10),
    },
    car_girl: {
        width: moderateScale(95),
        height: moderateScale(88),
    },
    mainflex: {
        backgroundColor: '#f6f7fc',
        padding: moderateScale(15),
        marginHorizontal: moderateScale(20),
        borderRadius: moderateScale(7),
        marginTop: moderateScale(33)
    },
    driving_bg: {
        flexDirection: 'row',
        gap: moderateScale(20),
    },
    Jennifer: {
        fontSize: moderateScale(18),
        fontWeight: '500',
        color: 'black',
    },
    nmbr: {
        fontSize: moderateScale(14),
        fontWeight: '400',
        color: '#4F4E4E',
        paddingTop: moderateScale(4),
        paddingBottom: moderateScale(4),
    },
    Driving: {
        fontSize: moderateScale(12),
        fontWeight: '400',
        color: '#3D50DF',
    },
    selected_date: {
        fontSize: moderateScale(10),
        fontWeight: '400',
    },
    date_flex: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(3),
    },
    Start_End_date_flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(10),
    },
    pancil: {
        width: moderateScale(14.62),
        height: moderateScale(14.63)
    },
    messege_flex1: {
        borderWidth: 1,
        borderRadius: moderateScale(5),
        borderColor: '#DCDCE3',
        marginHorizontal: moderateScale(20),
        marginTop: moderateScale(20)
    },
    messege_flex2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        borderColor: '#DCDCE3',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
        marginBottom: moderateScale(150)
    },
    status: {
        fontSize: moderateScale(18),
        fontWeight: '500',
        color: 'black',
        marginVertical: moderateScale(20)
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        padding: moderateScale(9),
        borderRadius: moderateScale(15),
        marginHorizontal: moderateScale(5),
        alignItems: 'center'
    },
    buttonText: {
        fontSize: moderateScale(14),
        fontWeight: '400',
    },
    Modal: {
        backgroundColor: "#ffffff",
        height: 300,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    addTem: {
        width: moderateScale(33),
        height: moderateScale(33),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F7FC',
        borderRadius: moderateScale(21),
        alignSelf: 'flex-end',
        marginRight: moderateScale(15),
        marginTop: moderateScale(20)
    },
});

export default FeedBack;
