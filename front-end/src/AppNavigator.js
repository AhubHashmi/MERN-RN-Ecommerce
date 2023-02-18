import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import Splash from './Screens/Splash';
// import Login from './Screens/Login';
// import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSucess from './OrderSucess';
import Orders from './Screens/Orders';
import Login from './auth/login';
import SignUp from './auth/signup';
import Splash from './Screens/splashscreen';
import Main from './bottom/Main';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddAddress"
          component={AddAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OrderSuccess"
          component={OrderSucess}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="Orders"
          component={Orders}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
