import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.buttonShape}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonShape: {
        alignItems: 'center',
        padding: 10,
        height: 40,
        width: 60,
        backgroundColor: 'red',
        borderRadius: 10
    },
    buttonText: {
        color: 'white'
    }
})