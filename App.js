import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import InitialScreen from './Screens/InitialScreen';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Signin from './Screens/Signin';
import StudentScreen from './Screens/StudentScreen';
import InstructorScreen from './Screens/InstructorScreen';
import PaymentScreen from './Screens/PaymentScreen';
import ForgetPassword from './Screens/ForgetPassword';
import Signup from './Screens/Signup';
import ChatBox from './Component/Chat/ChatBox';
import FeedBack from './Screens/FeedBack';
import BottomTabs from './Screens/BottomTabs';
import Templates from './Screens/Templates';
import EditInvoice from './Screens/EditInvoice';
import RefundInvoice from './Screens/RefundInvoice';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Splash'
            component={Splash}
          />
          <Stack.Screen
            name='InitialScreen'
            component={InitialScreen}
          />
          <Stack.Screen
            name='Signin'
            component={Signin}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
          />
          <Stack.Screen
            name='Payment'
            component={PaymentScreen}
          />
          <Stack.Screen
            name='Forget'
            component={ForgetPassword}
          />
          <Stack.Screen
            name='StudentScreen'
            component={StudentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='InstructorScreen'
            component={InstructorScreen}
          />
          <Stack.Screen
            name='ChatBox'
            component={ChatBox}
          />
          <Stack.Screen
            name='FeedBack'
            component={FeedBack}
          />
          <Stack.Screen
            name='Templates'
            component={Templates}
          />
          <Stack.Screen
            name='EditInvoice'
            component={EditInvoice}
          />
          <Stack.Screen
            name='RefundInvoice'
            component={RefundInvoice}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})