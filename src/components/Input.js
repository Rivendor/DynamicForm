import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    const [value, onChangeText] = useState('')

    return (
        <View style={[styles.inputShape, { width: props.width }]}>
            <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputShape: {
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 3
    },
    inputText: {
        width: '100%',
        height: '100%'
    }
})