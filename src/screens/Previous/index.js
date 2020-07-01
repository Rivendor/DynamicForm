import React, { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'

// Styles
import styles from './styles'

// JSON
import JSON from '../../json/ListArray.json'

export default function Previous({ navigation, route }) {
    const [state, setState] = useState([])

    useEffect(() => {
        setState(state => JSON.list)
        console.log(
            `Mounted Previous.
            JSON: ${JSON.list[0].collection[0].name}`
        )
        return () => console.log('Unmounted Previous')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView>
                    {
                        state.map((values, index) => {
                            return <TouchableOpacity
                                key={index}
                                style={styles.textContainer}
                                onPress={() => navigation.navigate('List', { arr: state[index].collection})}
                                >
                                <Text style={styles.text}>{state[index].id}</Text>
                            </TouchableOpacity>
                        })
                    }
                </ScrollView>
                <View style={styles.sendView}>
                    
                </View>
            </View>
        </View>
    )
}