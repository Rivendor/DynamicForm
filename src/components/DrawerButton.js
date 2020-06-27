import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Button = (props) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.buttonShape}
            onPress={() => navigation.toggleDrawer()}
        >
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonShape: {
        alignItems: 'center',
        marginLeft: 10,
        height: 40,
        width: 50,
        backgroundColor: 'white',
    },
})