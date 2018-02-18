import React from 'react';
import stylesheet from '../../Layout/Stylesheet';
import listItemStylesheet from '../../Layout/ListItemStylesheet';
import SearchControl from '../SearchControl';
import BookListItem from '../BookListItem';
import { View, SectionList } from 'react-native';

export default class SearchModal extends React.Component {
    render() {
        return (
            <View>
                <View style={stylesheet.modal}>
                    <SearchControl />
                </View>
                <View>
                    <SectionList style={listItemStylesheet.listModal}
                    sections={sectionsData} />
                </View>
            </View>
        );
    }
}

const onAirShows = [
    {
        title: 'test1',
        imageLink: '../Images/book.png' 
    },
    {  
        title: 'test2',
        imageLink: '../Images/book.png'     
    },
    {
        title: 'test3',
        imageLink: '../Images/book.png' 
    }
];

const sectionsData = [{
    key: 'On Air',
    data: onAirShows,
    renderItem: ({item}) => <BookListItem title={item.title} imagelink={item.imageLink} />
}];