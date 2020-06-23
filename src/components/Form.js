import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// Components
import Input from './Input'

const Form = () => {
    return (
        <View style={styles.formContainer}>
            <View style={styles.row}>

                <View>
                    <Text style={styles.inputLabel}>Cod.:</Text>
                    <Input width={90} />
                </View>
                <View>
                    <Text style={styles.inputLabel}>Material:</Text>
                    <Input width={210} />
                </View>
            </View>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#3d597a',
        padding: 10,
        marginBottom: 5,
        height: 'auto',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 3
    },
    row: {
        flexDirection: 'row',
    },
    inputLabel: {
        color: 'white'
    }
})