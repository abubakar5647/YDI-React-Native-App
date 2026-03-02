import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InstructorHome from '../Component/InstructorScreens/InstructorHome';
import Messages from '../Component/InstructorScreens/Messages';
import LessonDiary from '../Component/InstructorScreens/LessonDiary';
import Invoice from '../Component/InstructorScreens/Invoice';
import Profile from '../Component/InstructorScreens/Profile';
import StudentHome from '../Component/StudentScreens/StudentHome';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    const role = useSelector((state) => state.role.role)

    const renderIcon = (routeName, focused) => {
        let icon;
        let label;
        if (routeName === 'Home') {
            icon = require('../Images/home.png');
            label = 'Home';
        } else if (routeName === 'Messages') {
            icon = require('../Images/message.png');
            label = 'Messages';
        } else if (routeName === 'LessonDiary') {
            icon = require('../Images/diary.png');
            label = 'Lesson Diary';
        } else if (routeName === 'Invoice') {
            icon = require('../Images/invoice.png');
            label = 'Invoice';
        } else if (routeName === 'Profile') {
            icon = require('../Images/user.png');
            label = 'Profile';
        }

        return (
            <View style={styles.tabItem}>
                <Image source={icon} style={{ tintColor: focused ? '#679436' : '#A5A3A3' }} />
                <Text style={{ color: focused ? '#679436' : '#A5A3A3' }}>{label}</Text>
            </View>
        );
    };


    const selectBottomTabs = () => {
        if (role === 'Instructor') {
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => renderIcon(route.name, focused),
                })}
                tabBarOptions={{
                    showLabel: false,
                }}
            >
                <Tab.Screen name="Home" component={InstructorHome} />
                <Tab.Screen name="Messages" component={Messages} />
                <Tab.Screen name="LessonDiary" component={LessonDiary} />
                <Tab.Screen name="Invoice" component={Invoice} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        }
        else if (role === 'Student') {

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused }) => renderIcon(route.name, focused),
                })}
                tabBarOptions={{
                    showLabel: false,
                }}
            >
                <Tab.Screen name='Home' component={StudentHome} />
                <Tab.Screen name="Messages" component={Messages} />
                <Tab.Screen name="LessonDiary" component={LessonDiary} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        }
    }

    return (
        <View>
            {selectBottomTabs()}
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})