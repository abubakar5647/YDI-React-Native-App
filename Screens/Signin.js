import { Image, StatusBar, StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

const Signin = () => {
    const navigation = useNavigation();
    const role = useSelector((state) => state.role.role);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmail = (text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePassword = (text) => {
        setPassword(text);
        if (text.trim() === '') {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }
    };

    const handleSignin = () => {
        if (!emailError && !passwordError && email !== '' && password !== '') {
            console.log("Form validation successful");
            if (role === 'Student') {
                navigation.navigate("StudentScreen")
            } else if (role === 'Instructor') {
                navigation.navigate("InstructorScreen")
            } else {
                console.log("Role not defined or invalid");
            }
        } else {
            console.log('Form validation failed');
            if (email === '') setEmailError('Email is required');
            if (password === '') setPasswordError('Password is required');
        }
    };

    const handleSignup = () => {
        navigation.navigate("Signup")
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar
                backgroundColor='transparent'
                translucent
                barStyle='light-content'
            />
            <View>
                <ImageBackground source={require('../Images/iner.png')}
                    style={styles.backgroundImage}>
                    <View style={styles.overlay} />
                    <View style={styles.content}>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{
                                top: moderateScale(56),
                                left: moderateScale(22)
                            }}>
                            <Image source={require("../Images/arrow.png")}
                                tintColor="white" />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center' }}>
                            <Image source={require("../Images/logo.png")}
                                style={{
                                    width: moderateScale(333),
                                    height: moderateScale(224),
                                    marginTop: moderateScale(130)
                                }} />

                            <View style={[styles.inputContainer, { marginTop: moderateScale(50) }]}>
                                <View style={styles.input}>
                                    <Image source={require('../Images/inbox.png')}
                                        style={{ width: 20, height: 20 }} />
                                    <TextInput
                                        placeholder='johnheater@gmail.com'
                                        value={email}
                                        onChangeText={handleEmail} // Inline validation
                                        style={styles.textInput}
                                        placeholderTextColor="#C3C2C2"
                                    />
                                </View>
                            </View>
                            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                            <View style={[styles.inputContainer, { marginTop: moderateScale(15) }]}>
                                <View style={styles.input}>
                                    <TextInput
                                        placeholder="Password"
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={handlePassword}
                                        style={styles.textInput}
                                        placeholderTextColor="#C3C2C2"
                                    />
                                    <TouchableOpacity onPress={toggleShowPassword}>
                                        <Image
                                            source={
                                                showPassword
                                                    ? require('../Component/Icons/eye.png')
                                                    : require('../Component/Icons/hide.png')
                                            }
                                            style={{ marginRight: 10, width: 23, height: 18 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                            <TouchableOpacity
                                onPress={handleSignin}
                                style={{
                                    marginTop: moderateScale(30)
                                }}>
                                <View
                                    style={styles.signInButton}>
                                    <Text
                                        style={styles.signInButtonText}>
                                        Sign In
                                    </Text>
                                </View>
                            </TouchableOpacity>


                            <View style={styles.footerLinks}>
                                <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
                                    <Text style={styles.linkText}>
                                        Forget Password
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSignup}>
                                    <Text style={[styles.linkText, { color: '#EEBC6A' }]}>
                                        Sign up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default Signin;

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: moderateScale(339),
        height: moderateScale(54),
        padding: moderateScale(10),
        gap: moderateScale(5),
    },
    textInput: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        flex: 1,
        color: '#C3C2C2'
    },
    errorText: {
        color: 'red',
        fontSize: moderateScale(14),
        marginTop: 5,
    },
    signInButton: {
        backgroundColor: '#D2D2D2',
        padding: moderateScale(15),
        borderRadius: moderateScale(6),
        width: moderateScale(339),
        alignSelf: 'center'
    },
    signInButtonText: {
        color: '#000000',
        fontSize: moderateScale(15),
        fontWeight: '600',
        textAlign: 'center'
    },
    footerLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(26),
        marginTop: moderateScale(30),
    },
    linkText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
    },
});
