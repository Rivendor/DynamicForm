import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'
import { Formik } from 'formik'

// Components
import Button from '../../components/Button'

// Styles
import styles from './styles'

export default function Home({ navigation }) {
    const [state, setState] = useState([])

    useEffect(() => {
        console.log('Mounted')
        setState(state => [0])
        return () => console.log('Unmounted')
    }, [])

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ collection: [
                    { cod: '', name: '', local: '' },
                ], }}
                onSubmit={values => {
                    console.log(values)
                    navigation.navigate('Confirmation', { array: values.collection})
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <View style={styles.scrollContainer}>
                        <ScrollView>
                            {
                                state.map((index) => {
                                    return <View key={index} style={styles.formContainer}>
                                        <View style={styles.row}>
                                            <View>
                                                <Text style={styles.inputLabel}>Cod.:</Text>
                                                <View style={[styles.inputShape, { width: 110 }]}>
                                                    <TextInput
                                                        style={styles.inputText}
                                                        onChangeText={handleChange(`collection[${index}].cod`)}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.inputLabel}>Material:</Text>
                                                <View style={[styles.inputShape, { width: 210 }]}>
                                                    <TextInput
                                                        style={styles.inputText}
                                                        onChangeText={handleChange(`collection[${index}].name`)}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                                <Text style={styles.inputLabel}>Local:</Text>
                                                <View style={[styles.inputShape, { width: 330 }]}>
                                                    <TextInput
                                                        style={styles.inputText}
                                                        onChangeText={handleChange(`collection[${index}].local`)}
                                                    />
                                                </View>
                                        </View>
                                    </View>
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
                                        values.collection.pop()
                                        setState(state => [...old])
                                    }}
                                />
                            </View>
                        </ScrollView>
                        <View style={styles.sendView}>
                            <Button
                                text='Avançar'
                                width={100}
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}