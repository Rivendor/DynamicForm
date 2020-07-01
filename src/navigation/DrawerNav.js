import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

// Navigators
import MainNav from './MainNav'
import PreviousNav from './PreviousNav'

const Drawer = createDrawerNavigator();

export default function DrawerNav () {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerStyle={{
                    backgroundColor: "#29405c",
                    width: '40%',
                    height: '78%',
                    marginTop: 80
                }}
                drawerContentOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'white',
                    activeBackgroundColor: '#3d597a'
                }}
                overlayColor='transparent'
            >
                <Drawer.Screen
                    name="Home"
                    component={MainNav}
                    options={{
                        title: 'Home'
                    }}
                />
                <Drawer.Screen
                    name="PreviousNav"
                    component={PreviousNav}
                    options={{
                        title: 'Histórico'
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}