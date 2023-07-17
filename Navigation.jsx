import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import Homescreen from './Homescreen';
import Ingredients from './Ingredients';




export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Ingredient" component={Ingredients} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}