import React, { useState, useEffect } from 'react'
import { View, ScrollView, TextInput, Text } from 'react-native'
import { Formik } from 'formik'

// Components
import Button from '../../components/Button'

// Styles
import styles from './styles'

export default function Home({ navigation }) {
    const [state, setState] = useState([0])

    useEffect(() => {
        console.log('Mounted Home')
        return () => console.log('Unmounted Home')
    }, [])

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    collection: [
                        { cod: '', name: '', local: '' },
                    ],
                }}
                onSubmit={values => {
                    console.log(
                        `Submitting to Confirmation:
                        Cod: ${values.collection[0].cod}
                        Name: ${values.collection[0].name}
                        Local: ${values.collection[0].local}`
                    )
                    navigation.navigate('Confirmation', { arr: values })
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
                                                        defaultValue=''
                                                        onChangeText={handleChange(`collection[${index}].cod`)}
                                                        maxLength={8}
                                                        keyboardType={'numeric'}
                                                    />
                                                </View>
                                            </View>
                                            <View>
                                                <Text style={styles.inputLabel}>Material:</Text>
                                                <View style={[styles.inputShape, { width: 210 }]}>
                                                    <TextInput
                                                        style={styles.inputText}
                                                        defaultValue=''
                                                        onChangeText={handleChange(`collection[${index}].name`)}
                                                        maxLength={22}
                                                    />
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.inputLabel}>Local:</Text>
                                            <View style={[styles.inputShape, { width: 330 }]}>
                                                <TextInput
                                                    style={styles.inputText}
                                                    defaultValue=''
                                                    onChangeText={handleChange(`collection[${index}].local`)}
                                                    maxLength={40}
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