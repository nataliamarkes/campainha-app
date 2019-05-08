import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Font } from 'expo';

import InitialScreen from './screens/InitialScreen';
import MainScreen from './screens/MainScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';

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
  Main: MainScreen,
  Profile: ProfileScreen,
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const AuthNavigator = createStackNavigator({
  Initial: InitialScreen,
  Login: LoginScreen,
  Registration: RegistrationScreen,
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

const AppContainer = createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppNavigator,
  Auth: AuthNavigator,
}, {
  initialRouteName: "AuthLoading",
}));