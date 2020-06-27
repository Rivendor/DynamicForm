import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29405c',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    sendView: {
        backgroundColor: '#3d597a',
        alignContent: 'flex-start',
        height: 50,
        width: '100%',
        marginTop: 5,
        padding: 5,
        flexDirection: 'row-reverse'
    },
    formContainer: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: '#3d597a',
        padding: 10,
        marginBottom: 5,
        marginHorizontal: 4,
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
    },
    inputShape: {
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 3
    },
    inputText: {
        width: '100%',
        height: '100%'
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        paddingTop: 10,
    },
    listContainer: {
        height: 'auto'
    }
})