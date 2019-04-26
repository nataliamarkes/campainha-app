import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <LinearGradient colors={['purple', '#09c']} start={[0, 1]} end={[1, 0]} style={styles.container}>
          <Text style={{ color: 'white' }}>Open up App.js to start working on your app!</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
