import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

// Components
import Button from '../../components/Button'
import Form from '../../components/Form'

// Styles
import styles from './styles'

export default function Home() {
    const [state, setState] = useState([])

    useEffect(() => {
        console.log('Mounted')
        setState(state => [0])
        return () => console.log('Unmounted')
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                {
                    state.map((index) => {
                        return <Form key={index} />
                    })
                }
                <View style={styles.buttonRow}>
                    <Button
                        text='+'
                        width={60}
                        onPress={() => {
                            const old = [...state]
                            setState(state => [...old, old.length])
                        }}
                    />
                    <Button
                        text='-'
                        width={60}
                        onPress={() => {
                            const old = [...state]
                            old.pop()
                            setState(state => [...old])
                        }}
                    />
                </View>
            </ScrollView>
            <View style={styles.sendView}>
                <Button text='Enviar' width={100} />
            </View>
        </View>
    )
}