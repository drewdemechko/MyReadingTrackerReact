import React from 'react';
import stylesheet from '../../Layout/Stylesheet';
import SearchControl from '../SearchControl';
import BookListItem from '../BookListItem';
import { View, SectionList } from 'react-native';

export default class SearchModal extends React.Component {
    render() {
        return (
            <View style={stylesheet.modal}>
                <View>
                    <SearchControl />
                </View>
                <View>
                    <SectionList style={stylesheet.modal} 
                    sections={sectionsData} />
                </View>
            </View>
        );
    }
}

const onAirShows = [
    {
        title: 'test1'
    },
    {  
        title: 'test2'         
    }
];

const sectionsData = [{
    key: 'On Air',
    data: onAirShows,
    renderItem: ({item}) => <BookListItem title={item.title} />
}];