import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};
//const MOVIES_DATA = ['Doctor Sleep', 'Midway'];

class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text> {movie.title} </Text>
        <Text> {movie.year} </Text>
      </View>
    );
  }
}

/*const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
  },
  {
    title: 'Midway',
    year: '2019',
  },
];
*/

const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((name) => (
    <Text>
      {' '}
      {'\n '}
      {name.title} {'\n'} {name.year} {'\n'} {<Image source={name.poster} />}{' '}
      {'\n '}
    </Text>
  ));
};

export default MovieList;
