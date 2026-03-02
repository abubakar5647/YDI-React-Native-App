import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

const ChatBox = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    const { name, image } = route.params;

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: moderateScale(54),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: moderateScale(20)
                }}>
                <View style={{
                    flexDirection: 'row',
                    gap: moderateScale(10),
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../Icons/arrow.png")} />
                    </TouchableOpacity>
                    <Image source={image} style={styles.image} />
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#000000' }}>{name}</Text>
                </View>
                <TouchableOpacity
                    style={styles.addTem}>
                    <Image source={require("../Icons/add.png")} />
                </TouchableOpacity>
            </View>

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
};

export default ChatBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 50,
        height: 50,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
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
