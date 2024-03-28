import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../app/screens/Home'
import Login from '../app/screens/Login'


const Stack = createNativeStackNavigator()

type StackNavigation = {
  Home:undefined,
  Login:undefined
}
export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Login"  component={Login} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
