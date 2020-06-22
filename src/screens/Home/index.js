import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

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
            {
                state.map((index) => {
                    return <Form key={index} />
                })
            }
            <Button
                text='+'
                onPress={() => {
                    const old = [...state]
                    setState(state => [...old, old.length + 1])
                    console.log('Last Index: \n' + state.length)
                    console.log('Cont: \n' + state)
                }}
            />
        </View>
    )
}