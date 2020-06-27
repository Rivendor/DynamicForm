import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import DrawerButton from '../components/DrawerButton'

// Screens
import Home from '../screens/Home'
import Confirmation from '../screens/Confirmation'

const Stack = createStackNavigator();

export default function MainNav () {
    return (
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3d597a',
                    },
                    headerTintColor: 'white',
                    headerLeft: () => <DrawerButton />
                }}
            >
                <Stack.Screen
                    name='Home' component={Home}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name='Confirmation' component={Confirmation}
                    options={{
                        title: 'Confirmação',
                    }}
                />
            </Stack.Navigator>
    )
}