import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
    TouchableWithoutFeedback,
    TextInput
} from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Input from '../Component/Inputs/Input';
import PasswordInput from '../Component/Inputs/PasswordInput';

const Signup = () => {
    const role = useSelector((state) => state.role.role);
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedGender, setSelectedGender] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState({ label: 'Automatic' });

    const options = [
        { label: 'Custom' },
        { label: 'Standard' },
        { label: 'None' },
    ];

    const handleOptionSelect = (option) => {
        setSelectedValue(option);
        setModalVisible(false);
    };

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckBox = () => {
        setIsChecked(!isChecked);
    };

    const handleNext = () => {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
    };

    const handlePrevious = () => {
        const previousStep = currentStep - 1;
        setCurrentStep(previousStep);
    };

    const renderProgressBar = () => {
        const totalSteps = role === 'Instructor' ? 3 : 2;
        const progressBarWidth = role === 'Student' ? '50%' : '33%';

        return (
            <View style={styles.progressBarContainer}>
                {[...Array(totalSteps).keys()].map(step => (
                    <View
                        key={step + 1}
                        style={[
                            styles.progressBarStep,
                            (step + 1) < currentStep ? styles.completed : null,
                            (step + 1) === currentStep ? styles.active : null,
                            { width: progressBarWidth }
                        ]}
                    />
                ))}
            </View>
        );
    };

    const renderStepContent = () => {
        if (role === 'Instructor') {
            switch (currentStep) {
                case 1:
                    return (
                        <View>
                            <Text style={styles.inputText}>First Name</Text>
                            <Input placeholder="First Name" />

                            <Text style={styles.inputText}>Last Name</Text>
                            <Input placeholder="Last Name" />

                            <Text style={styles.inputText}>Middle Name</Text>
                            <Input placeholder="Middle Name" />

                            <Text style={styles.inputText}>Gender</Text>
                            <View style={styles.gender}>
                                <TouchableOpacity
                                    style={styles.radioContainer}
                                    onPress={() => setSelectedGender('male')}
                                >
                                    <View style={selectedGender === 'male' ? styles.radioSelected : styles.radioUnselected} />
                                    <Text style={styles.label}>Male</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.radioContainer}
                                    onPress={() => setSelectedGender('female')}
                                >
                                    <View style={selectedGender === 'female' ? styles.radioSelected : styles.radioUnselected} />
                                    <Text style={styles.label}>Female</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.inputText}>Email</Text>
                            <Input placeholder="Email" />

                            <Text style={styles.inputText}>Password</Text>
                            <PasswordInput placeholder="Password" />

                            <Text style={styles.inputText}>Phone Number</Text>
                            <Input placeholder="+92 3269407599" />

                            <Text style={styles.inputText}>Profile Picture</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end'
                                }}>
                                <TouchableOpacity
                                    style={{
                                        width: moderateScale(72),
                                        height: moderateScale(26),
                                        backgroundColor: '#F6F7FC',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        right: 7
                                    }}>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Browse</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.inputText}>Cover Picture</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end'
                                }}>
                                <TouchableOpacity
                                    style={{
                                        width: moderateScale(72),
                                        height: moderateScale(26),
                                        backgroundColor: '#F6F7FC',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        right: 7
                                    }}>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Browse</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={[styles.btn]}
                                onPress={handleNext}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        textAlign: 'center'
                                    }}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                case 2:
                    return (
                        <View>
                            <Text style={styles.inputText}>Address</Text>
                            <Input placeholder="Mr John 132, My Street, Kingston, New York " />

                            <Text style={styles.inputText}>Postcode</Text>
                            <Input placeholder="52250" />

                            <Text style={styles.inputText}>Select option for instructor</Text>
                            <View style={styles.input}>
                                <TouchableOpacity onPress={() => setModalVisible(true)}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                        <Text>{selectedValue.label}</Text>
                                        <Image source={require('../Images/list.png')}
                                            style={{
                                                width: moderateScale(10),
                                                height: moderateScale(6),
                                                right: moderateScale(5)
                                            }} />
                                    </View>
                                </TouchableOpacity>

                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                                        <View style={styles.modalOverlay} />
                                    </TouchableWithoutFeedback>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            backgroundColor: '#fff',
                                            bottom: 0
                                        }}>
                                        <ScrollView>
                                            {options.map((option, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={{
                                                        padding: moderateScale(10),
                                                        borderBottomWidth: 1,
                                                        borderBottomColor: '#ccc'
                                                    }}
                                                    onPress={() => handleOptionSelect(option)}>
                                                    <Text>{option.label}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                </Modal>
                            </View>

                            <Text style={styles.inputText}>Price per hour</Text>
                            <Input placeholder="$10" />

                            <Text style={styles.inputText}>Rate for Exam</Text>
                            <Input placeholder="$10" />

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}>
                                <TouchableOpacity
                                    style={styles.btn2}
                                    onPress={handlePrevious}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                        Previous
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btn2}
                                    onPress={handleNext}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                        Next
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                case 3:
                    return (
                        <View>
                            <Text style={styles.inputText}>Language</Text>
                            <View style={styles.input}>
                                <TouchableOpacity onPress={() => setModalVisible(true)}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                        <Text>{selectedValue.label}</Text>
                                        <Image source={require('../Images/list.png')}
                                            style={{
                                                width: moderateScale(10),
                                                height: moderateScale(6),
                                                right: moderateScale(5)
                                            }} />
                                    </View>
                                </TouchableOpacity>

                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(false);
                                    }}
                                >
                                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                                        <View style={styles.modalOverlay} />
                                    </TouchableWithoutFeedback>
                                    <View
                                        style={{
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            backgroundColor: '#fff',
                                            bottom: 0
                                        }}>
                                        <ScrollView>
                                            {options.map((option, index) => (
                                                <TouchableOpacity
                                                    key={index}
                                                    style={{
                                                        padding: moderateScale(10),
                                                        borderBottomWidth: 1,
                                                        borderBottomColor: '#ccc'
                                                    }}
                                                    onPress={() => handleOptionSelect(option)}>
                                                    <Text>{option.label}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </ScrollView>
                                    </View>
                                </Modal>
                            </View>

                            <Text style={styles.inputText}>Instructor Licence</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ color: '#A5A3A3', left: 10 }}>Automatic</Text>
                                <TouchableOpacity
                                    style={{
                                        width: moderateScale(72),
                                        height: moderateScale(26),
                                        backgroundColor: '#F6F7FC',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        right: 7
                                    }}>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Browse</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.inputText}>Bank Details</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: moderateScale(10),
                                    paddingLeft: moderateScale(10)
                                }}>
                                <Text>Sort Code</Text>
                                <Image source={require("../Images/Line.png")} />
                                <Text>Account number</Text>
                            </View>

                            <Text style={styles.inputText}>Subscription</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    paddingLeft: moderateScale(10),
                                    backgroundColor: '#DCDCE3',
                                    justifyContent: 'center'
                                }}>
                                <Text>Subscription fee is $10/month</Text>
                            </View>


                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: moderateScale(22),
                                    gap: 10,
                                    marginTop: moderateScale(10)
                                }}
                                onPress={toggleCheckBox}>
                                <TouchableOpacity style={{
                                    width: moderateScale(15),
                                    height: moderateScale(15),
                                    borderRadius: 4,
                                    borderWidth: 2,
                                    borderColor: '#000',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: isChecked ? '#000' : 'transparent',
                                }}>
                                    {isChecked && <Text style={{ color: '#fff' }}>✓</Text>}
                                </TouchableOpacity>
                                <Text style={{ color: '#353535', fontSize: 10, fontWeight: '500' }}>
                                    I accept the
                                    <Text style={{ fontWeight: 'bold' }}> Terms & Conditions</Text>
                                </Text>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}>
                                <TouchableOpacity
                                    style={styles.btn2}
                                    onPress={handlePrevious}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                        Previous
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btn2}
                                    onPress={() => navigation.navigate('Payment')}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                default:
                    return null;
            }
        } else if (role === 'Student') {
            switch (currentStep) {
                case 1:
                    return (
                        <View>
                            <Text style={styles.inputText}>First Name</Text>
                            <Input placeholder="First Name" />

                            <Text style={styles.inputText}>Last Name</Text>
                            <Input placeholder="Last Name" />

                            <Text style={styles.inputText}>Middle Name</Text>
                            <Input placeholder="Middle Name" />

                            <Text style={styles.inputText}>Email</Text>
                            <Input placeholder="Email" />

                            <Text style={styles.inputText}>Password</Text>
                            <PasswordInput placeholder="Password" />

                            <Text style={styles.inputText}>Profile Picture</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end'
                                }}>
                                <TouchableOpacity
                                    style={{
                                        width: moderateScale(72),
                                        height: moderateScale(26),
                                        backgroundColor: '#F6F7FC',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        right: 7
                                    }}>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Browse</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.inputText}>Cover Picture</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end'
                                }}>
                                <TouchableOpacity
                                    style={{
                                        width: moderateScale(72),
                                        height: moderateScale(26),
                                        backgroundColor: '#F6F7FC',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        right: 7
                                    }}>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Browse</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={[styles.btn]}
                                onPress={handleNext}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 15,
                                        fontWeight: '600',
                                        textAlign: 'center'
                                    }}>
                                    Next
                                </Text>
                            </TouchableOpacity>
                        </View>
                    );
                case 2:
                    return (
                        <View>
                            <Text style={styles.inputText}>Address</Text>
                            <Input placeholder="Mr John 132, My Street, Kingston, New York " />

                            <Text style={styles.inputText}>Phone Number</Text>
                            <Input placeholder="+92 3269407599" />

                            <Text style={styles.inputText}>Provisional Licence</Text>
                            <View
                                style={{
                                    marginHorizontal: moderateScale(20),
                                    height: moderateScale(48),
                                    borderWidth: 1,
                                    borderColor: '#DCDCE3',
                                    borderRadius: moderateScale(6),
                                    marginTop: moderateScale(5),
                                    justifyContent: 'space-around',
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                <Text style={{ color: '#A5A3A3', left: 10 }}>Images of card from both sides</Text>
                                <TouchableOpacity
                                    style={{
                                        width: moderateScale(72),
                                        height: moderateScale(26),
                                        backgroundColor: '#F6F7FC',
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        right: 7
                                    }}>
                                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>Browse</Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.inputText}>Postcode</Text>
                            <Input placeholder="52250" />

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: moderateScale(22),
                                    gap: 10,
                                    marginTop: moderateScale(10)
                                }}
                                onPress={toggleCheckBox}>
                                <TouchableOpacity style={{
                                    width: moderateScale(15),
                                    height: moderateScale(15),
                                    borderRadius: 4,
                                    borderWidth: 2,
                                    borderColor: '#000',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: isChecked ? '#000' : 'transparent',
                                }}>
                                    {isChecked && <Text style={{ color: '#fff' }}>✓</Text>}
                                </TouchableOpacity>
                                <Text style={{ color: '#353535', fontSize: 10, fontWeight: '500' }}>
                                    I accept the
                                    <Text style={{ fontWeight: 'bold' }}> Terms & Conditions</Text>
                                </Text>

                            </View>


                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}>
                                <TouchableOpacity
                                    style={styles.btn2}
                                    onPress={handlePrevious}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                        Previous
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.btn2}
                                    onPress={() => navigation.navigate('StudentScreen')}>
                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '600',
                                            textAlign: 'center'
                                        }}>
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                default:
                    return null;
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar
                backgroundColor='transparent'
                translucent
                barStyle='light-content'
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
                        <Image source={require("../Images/arrow.png")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>Sign Up to your Account</Text>
                </View>
                {renderProgressBar()}
                {renderStepContent()}


                <View
                    style={{
                        alignItems: 'center',
                        marginTop: moderateScale(40),
                        marginBottom: moderateScale(30),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: moderateScale(13),
                            color: 'black'
                        }}>
                        Already have an account?
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signin")}>
                        <Text style={{ color: '#A22722' }}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        marginTop: moderateScale(54),
        marginLeft: moderateScale(21),
        gap: moderateScale(10),
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000',
    },
    progressBarContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        marginTop: moderateScale(70),
        marginHorizontal: moderateScale(20),
    },
    progressBarStep: {
        width: moderateScale(103),
        height: moderateScale(5),
        backgroundColor: '#DCDCE3',
        borderRadius: 5,
    },
    active: {
        backgroundColor: '#A22722',
    },
    completed: {
        backgroundColor: '#DCDCE3',
    },
    inputText: {
        fontSize: 13,
        fontWeight: '500',
        color: 'black',
        marginLeft: moderateScale(25),
        marginTop: moderateScale(10),
        marginBottom: moderateScale(5)
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
    label: {
        fontSize: 12,
        fontWeight: '500',
        color: '#A5A3A3',
    },
    input: {
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
        justifyContent: 'center'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        margin: 10,
        borderBottomColor: '#ccc',
    },
    gender: {
        borderWidth: 1,
        marginHorizontal: moderateScale(20),
        borderRadius: moderateScale(5),
        borderColor: '#DCDCE3',
        height: moderateScale(48),
        color: '#A5A3A3',
        marginTop: moderateScale(5),
        flexDirection: 'row',
        gap: moderateScale(140),
        paddingLeft: moderateScale(25),
    },
    uploadContainer: {
        marginHorizontal: moderateScale(20),
        height: moderateScale(48),
        borderWidth: 1,
        borderColor: '#DCDCE3',
        borderRadius: moderateScale(6),
        marginTop: moderateScale(5),
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    uploadButton: {
        width: moderateScale(72),
        height: moderateScale(26),
        backgroundColor: '#F6F7FC',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        right: 7,
    },
    uploadButtonText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
    },
    footer: {
        alignItems: 'center',
        marginTop: moderateScale(40),
        marginBottom: moderateScale(30),
    },
    footerText: {
        fontWeight: '500',
        fontSize: moderateScale(13),
        color: 'black',
    },
    signInText: {
        color: '#A22722',
        fontSize: 15,
        fontWeight: '500',
    },
    btn: {
        marginHorizontal: moderateScale(20),
        height: moderateScale(48),
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: moderateScale(6),
        marginTop: moderateScale(15),
    },
    btn2: {
        width: moderateScale(152),
        height: moderateScale(48),
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderRadius: moderateScale(6),
        marginTop: moderateScale(35),
        marginHorizontal: moderateScale(5),
    },
});
