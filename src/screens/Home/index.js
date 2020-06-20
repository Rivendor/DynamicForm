import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

// Components
import Button from '../../components/Button'
import Form from '../../components/Form'

// Styles
import styles from './styles'

export default function Home() {
    const [form, setForm] = useState([])
    const [cont, setCont] = useState(0)

    useEffect(() => {
        setForm([0])
    }, [])

    return (
        <View style={styles.container}>
            <Form />
            {
                form.map(() => {
                    return <Form />
                })
            }
            <Button
                text='+'
                onPress={() => {
                    setCont(cont + 1)
                    console.log('Cont: \n' + cont)
                    setForm(form.push(cont))
                    console.log('Form: \n' + form)
                }}
            />
        </View>
    )
}