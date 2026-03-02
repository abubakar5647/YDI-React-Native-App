import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Component/InstructorScreens/Profile';
import LessonDiary from '../Component/InstructorScreens/LessonDiary';
import Messages from '../Component/InstructorScreens/Messages';
import Invoice from '../Component/InstructorScreens/Invoice';
import InstructorHome from '../Component/InstructorScreens/InstructorHome';

const InstructorScreen = () => {
  const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Home" component={InstructorHome} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="LessonDiary" component={LessonDiary} />
      <Tab.Screen name="Invoice" component={Invoice} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default InstructorScreen;

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
