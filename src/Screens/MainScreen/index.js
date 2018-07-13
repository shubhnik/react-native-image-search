import React from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

import styles from './styles'
import {imageSearch} from '../../api/imageSearch'
import withSpinner from '../../HOCs/withSpinner'
import List from '../../Components/ListComponent'

const ImageList = withSpinner(List)

export default class MainScreen extends React.Component{
    state={
        query: '',
        page: 1,
        loading: false, // for initial data fetching
        data: [],
        fetching: false // for subsequent data fetching on list end
    }

    searchQuery = (page, query) => {
        const emptyData = []
        this.setState({loading: true, data: emptyData}, this.getImageResults(page, query))
    }

    getImageResults = ( page, query=this.state.query ) => {
        imageSearch(page, query)
        .then(res => res.json())
        .then(data => {
            const latestData = [...this.state.data, ...data.data]
            this.setState({data: latestData, loading: false, fetching: false})
        })
        .catch(err => this.setState({loading: false}))
    }

    onEndReached = () => {
        this.setState({page: this.state.page + 1, fetching: true}, this.getImageResults(this.state.page))
    }

    render(){
        const {query, page, data, loading, onEndReached, fetching} = this.state;
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(100, 74, 255)'}}>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style= {styles.header}>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Search for image'}
                            onChangeText={query => this.setState({query})}
                            value={query}
                            onSubmitEditing={() => this.searchQuery(page, query)}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.searchButton}
                            onPress={() => this.searchQuery(page, query)}
                        >
                            <Text>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <ImageList 
                            data={data}
                            isLoading={loading}
                            onEndReached={this.onEndReached}
                            isFetching={fetching}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}