import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29405c',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttonRow: {
        flexDirection: 'row',
        marginHorizontal: 4
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        paddingTop: 10,
    },
    sendView: {
        backgroundColor: '#3d597a',
        alignContent: 'flex-start',
        height: 50,
        width: '100%',
        marginTop: 5,
        padding: 5
    }
})