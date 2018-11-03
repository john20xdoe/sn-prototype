import React, { Component } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { OwnProps } from '../App';
import Step from '../components/Step';

export default class StepsScreen extends Component {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Harry Potter and the Goblet of Fire',
          author: 'J. K. Rowling',
          thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
        },
        {
          id: 2,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
        }
      ]
    };
  }

  public renderItem = ({ item }) => (
    <Step
      id={item.id}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
    />
  )

  public keyExtractor = (item, index) => item.id;

  public render() {
    return (
      <View style={styles.container}>
        <Icon name='ios-snow' type='ionicon' size={120} color={'tomato'} />
        <StatusBar barStyle='light-content' />
        <FlatList
          data={this.state.books}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
