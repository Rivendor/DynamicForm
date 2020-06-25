import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import Home from '../screens/Home'

const Stack = createStackNavigator();

export default function Navigation () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3d597a',
                    },
                    headerTintColor: 'white',
                }}
            >
                <Stack.Screen
                    name='Home' component={Home}
                    options={{
                        title: 'Home',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}