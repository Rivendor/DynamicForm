import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'

// Components
import Button from '../../components/Button'

// Styles
import styles from './styles'

export default function Local({ navigation, route }) {
    const [state, setState] = useState([{ cod: '', name: '', local: '' }])

    useEffect(() => {
        const { arr } = route.params
        setState(state => [...arr.collection])
        console.log(
            `Mounted Confirmation.
            Arr: ${arr.collection}
            State: ${state}`
        )
        return () => console.log('Unmounted Confirmation')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView>
                    {
                        state.map((array, index) => {
                            return <View key={index} style={styles.textContainer}>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Cod: </Text>
                                    <Text style={styles.text}>{state[index].cod}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Material: </Text>
                                    <Text style={styles.text}>{state[index].name}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.text}>Local: </Text>
                                    <Text style={styles.text}>{state[index].local}</Text>
                                </View>
                            </View>

                        })
                    }
                </ScrollView>
                <View style={styles.sendView}>
                    <Button
                        text='Voltar'
                        width={100}
                        onPress={() => navigation.goBack()}
                    />
                    <Button
                        text='Enviar'
                        width={100}
                        onPress={() => console.log(state)}
                    />
                </View>
            </View>
        </View>
    )
}