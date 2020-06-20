import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    return (
        <View style={[styles.inputShape, { width: props.width }]}>
            <TextInput style={styles.inputText} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputShape: {
        alignItems: 'flex-start',
        padding: 10,
        marginRight: 10,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2
    },
    inputText: {
        width: '100%',
        height: '100%'
    }
})