import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Font } from 'expo';

import MainContext from './contexts/MainContext';
import UserContext from './contexts/UserContext';
import screens from './screens';

const defaultNavigationConfig = {
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	},
};

const MainNavigator = createStackNavigator(
	{
		Main: screens.MainScreen,
		Profile: screens.ProfileScreen,
	},
	defaultNavigationConfig
);

const RegistrationNavigator = createStackNavigator(
	{
		BasicData: screens.BasicDataScreen,
		DocumentSubmission: screens.DocumentSubmissionScreen,
		CredentialCreation: screens.CredentialCreationScreen,
	},
	{
		...defaultNavigationConfig,
		initialRouteName: 'BasicData',
	}
);

const AuthenticationCheckNavigator = createStackNavigator(
	{
		Loading: screens.LoginVerificationScreen,
	},
	{
		...defaultNavigationConfig,
		initialRouteName: 'Loading',
	}
);

const LoginNavigator = createStackNavigator(
	{
		Initial: screens.InitialScreen,
		Login: screens.LoginScreen,
	},
	{
		...defaultNavigationConfig,
		initialRouteName: 'Initial',
	}
);

const AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			Auth: AuthenticationCheckNavigator,
			Main: MainNavigator,
			Login: LoginNavigator,
			Registration: RegistrationNavigator,
		},
		{
			// initialRouteName: 'Auth', // production
			initialRouteName: 'Registration',
		}
	)
);

export default class App extends Component {
	state = {
		finishedLoading: false,
		user: {
			photo: null,
			name: '',
			phone: '',
			document: {
				front: null,
				back: null,
			},
		},
	};
	setFinishedLoading = (value) => this.setState({ finishedLoading: value });
	setUser = (user) => this.setState({ user });

	async componentDidMount() {
		await Font.loadAsync({
			Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
		});
		this.setFinishedLoading(true);
	}
	render() {
		if (this.state.finishedLoading)
			return (
				<MainContext.Provider
					value={{
						finishedLoading: this.state.finishedLoading,
						setFinishedLoading: this.setFinishedLoading,
					}}
				>
					<UserContext.Provider
						value={{
							user: this.state.user,
							setUser: this.setUser,
						}}
					>
						<AppContainer />
					</UserContext.Provider>
				</MainContext.Provider>
			);
		return null;
	}
}
