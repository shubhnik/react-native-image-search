import {Dimensions, StyleSheet} from 'react-native'
const {width} = Dimensions.get('window');

const blurImageDimensions = {
    height: 190,
    width: (width/3) - 10
}

const styles = StyleSheet.create({
    imageContainer:{
        width: width/3,
        height: 200,
        padding: 5,
    },
    blurImage:{
        width: blurImageDimensions.width,
        height: blurImageDimensions.height,
    },
    image:{
        flex: 1
    },
    imageHolder:{
        flex: 1,
        backgroundColor: 'rgba(10, 10, 10, 0.05)'
    }
})

export default styles;