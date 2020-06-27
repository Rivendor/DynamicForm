import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'

// Components
import Button from '../../components/Button'

// Styles
import styles from './styles'

export default function Local({ navigation, route }) {
    const [state, setState] = useState('')

    useEffect(() => {
        console.log('Mounted')
        setState(state => '')
        return () => console.log('Unmounted')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView>
                    
                </ScrollView>
                <View style={styles.sendView}>
                        <Button
                            text='Enviar'
                            width={100}
                            onPress={() => console.log(route)}
                        />
                    </View>
            </View>
        </View>
    )
}