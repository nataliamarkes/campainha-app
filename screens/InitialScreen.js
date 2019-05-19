import React from 'react';
import { View, Text, TouchableNativeFeedback, Image, StyleSheet } from 'react-native';

import firebase from '../firebase';
import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';
import bell from '../assets/bell.png';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 60,
		justifyContent: 'space-between',
	},
	title: { color: 'white', fontSize: 32, textAlign: 'center' },
	text: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	bell: {
		width: 235,
		height: 200,
	},
});

export default class InitialScreen extends React.Component {
	state = {
		image: null,
	};

	componentDidMount() {
		if (firebase.auth().currentUser) this.props.navigation.navigate('Main');
	}

	componentDidUpdate() {
		if (firebase.auth().currentUser) this.props.navigation.navigate('Main');
	}

	comecar = () => {
		this.props.navigation.navigate({
			routeName: 'Registration',
			action: NavigationActions.navigate({
				routeName: 'Registration-BasicData',
			}),
		});
	};

	login = () => {
		this.props.navigation.navigate('Login');
	};

	render() {
		return (
			<BaseLayout>
				<View style={{ flex: 1, justifyContent: 'space-evenly' }}>
					<View style={{ flex: 3, justifyContent: 'space-evenly' }}>
						<Text style={styles.title}>Seja bem-vindo ao</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<Text style={{ ...styles.title, fontFamily: 'Pacifico', color: 'white', fontSize: 48 }}>
								{' '}
								Smart
							</Text>
							<Text style={{ ...styles.title, fontFamily: 'Pacifico', color: 'yellow', fontSize: 48 }}>
								bell{' '}
							</Text>
						</View>
						<View style={{ alignItems: 'center' }}>
							<Image source={bell} style={styles.bell} resizeMode="contain" />
						</View>
					</View>
					<View style={{ flex: 1, justifyContent: 'space-evenly' }}>
						<Button onPress={this.comecar}>Criar nova conta</Button>
						<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} onPress={this.login}>
							<View
								style={{
									padding: 10,
								}}
							>
								<Text style={styles.text}>{'Já tenho conta'.toUpperCase()}</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>
			</BaseLayout>
		);
	}
}
