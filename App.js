import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Font } from 'expo';

import firebase from './firebase';
import InitialScreen from './screens/InitialScreen';
import MainScreen from './screens/MainScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

export default class App extends React.Component {
  state = { finishedLoading: false }

  async componentDidMount() {
    await Font.loadAsync({
      'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
    });
    this.setState({ finishedLoading: true });
  }
  render() {
    return this.state.finishedLoading ? <AppContainer /> : null;
  }
}

const AppNavigator = createStackNavigator({
  Initial: InitialScreen,
  Login: LoginScreen,
  Registration: RegistrationScreen,
  Main: MainScreen,
  Profile: ProfileScreen,
},
  {
    initialRouteName: "Main",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

const AppContainer = createAppContainer(AppNavigator);