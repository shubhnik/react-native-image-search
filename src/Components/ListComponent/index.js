import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types'

import GridImage from '../ResponsiveImage'
import styles from './styles'

export default class List extends React.PureComponent{

    renderFooter = () => {
        if (!this.props.isFetching) return null;
        return (
            <View
                style={{
                paddingVertical: 20
                }}
            >
                <ActivityIndicator animating size="large" color='white' />
            </View>
        );
    }

    emptyListComponent = () => <View style={styles.emptyComponent}><Text>Search for Images</Text></View>

    render(){
        const {data, onEndReached} = this.props;
        return(
            <View style={{flex: 1}}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={data}
                    renderItem={({item}) => <GridImage thumbnailURL={item.assets.large_thumb.url} previewURL={item.assets.preview.url}/>}
                    numColumns={3}
                    onEndReached={onEndReached}
                    ListFooterComponent={this.renderFooter}
                    ListEmptyComponent={this.emptyListComponent}
                />
            </View>
        )
    }
}

List.propTypes= {
    data: PropTypes.array,
    onEndReached: PropTypes.func,
    isFetching: PropTypes.bool
}

