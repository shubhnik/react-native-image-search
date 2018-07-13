import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header: {
        height: 70,
        backgroundColor: 'rgb(100, 74, 255)',
        justifyContent: 'space-around', 
        alignItems: 'center', 
        flexDirection: 'row'
    },
    input:{
        height: '50%',
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 10
    },
    searchButton: {
        height: '50%',
        width: '20%',
        backgroundColor: 'rgb(0, 217, 161)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;