import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default withSpinner = (Component) => {
    class WrappedComponent extends React.PureComponent{
        render(){
            const {isLoading} = this.props;            
            return(
                isLoading ? <SpinnerComponent /> : <Component {...this.props}/>
            )
        }
    }
    WrappedComponent.propTypes = {
        isLoading: PropTypes.bool
    }
    return WrappedComponent;
}

const SpinnerComponent = () => {
    return(
        <Modal
            animationType={'none'}
            transparent={true}
        >   
            <View style={styles.spinnerView}>
                <ActivityIndicator
                    size={'large'}
                    color={'white'}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    spinnerView:{
        flex: 1,
        backgroundColor: 'rgba(10, 10, 10, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    }
})