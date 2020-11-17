/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Movies from './Movies';

import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './Movies';
import MovieList from './Movies';
import SMEList from './Boats';

const App: () => React$Node = () => {
  return (
    <View>
      <ScrollView>
        <Text>Lesson 05 Exercises</Text>
        <Movie />
        <MovieList />
        <SMEList />
      </ScrollView>
    </View>
  );
};

export default App;
