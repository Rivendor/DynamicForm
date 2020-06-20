import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// Components
import Input from './Input'

const Form = () => {
    return (
        <View style={styles.formContainer}>
            <Text>Hullo</Text>
            <View style={styles.row}>
                <Input width={90} />
                <Input width={210} />
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        height: 100,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
    }
})