import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import DrawerButton from '../components/DrawerButton'

// Screens
import List from '../screens/List'
import Previous from '../screens/Previous'

const Stack = createStackNavigator();

export default function PreviousNav () {
    return (
            <Stack.Navigator
                initialRouteName="Previous"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#3d597a',
                    },
                    headerTintColor: 'white',
                    headerLeft: () => <DrawerButton />
                }}
            >
                <Stack.Screen
                    name='Previous' component={Previous}
                    options={{
                        title: 'Histórico',
                    }}
                />
                <Stack.Screen
                    name='List' component={List}
                    options={{
                        title: 'Pedido',
                    }}
                />
            </Stack.Navigator>
    )
}