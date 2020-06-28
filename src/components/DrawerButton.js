import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Button = (props) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.buttonShape}
            onPress={() => navigation.toggleDrawer()}
        >
            <Image style={styles.drawerImage} source={require('../../assets/menu-button.png')} />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonShape: {
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
        height: 35,
        width: 25,
    },
    drawerImage:{
        width: 35,
        height: 25,
    }
})