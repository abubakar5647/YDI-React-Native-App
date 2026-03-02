import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentHome from '../Component/StudentScreens/StudentHome';
import Profile from '../Component/InstructorScreens/Profile';
import LessonDiary from '../Component/InstructorScreens/LessonDiary';
import Messages from '../Component/InstructorScreens/Messages';
import { useIsFocused } from '@react-navigation/native';

const StudentScreen = () => {
  const Tab = createBottomTabNavigator();
  const focused = useIsFocused();

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
      label = 'Diary';
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

  return (
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
  )
}

export default StudentScreen

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
