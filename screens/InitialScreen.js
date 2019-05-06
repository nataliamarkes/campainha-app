import React from 'react';
import { View, Text, TouchableNativeFeedback, Image, StyleSheet } from 'react-native';

import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';
import bell from '../assets/bell.png';

const styles = StyleSheet.create({
	background: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 60, justifyContent: 'space-between' },
	title: { color: 'white', fontSize: 32, textAlign: 'center' },
	text: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
	bell: {
		width: 235,
		height: 200,
	},
})

export default class InitialScreen extends React.Component {
	constructor(props) {
		super(props);
		this.comecar = this.comecar.bind(this);
		this.login = this.login.bind(this);
	}

	comecar() {
		this.props.navigation.navigate('Registration');
	}

	login() {
		this.props.navigation.navigate('Login');
	}

	render() {
		return (
			<BaseLayout>
				<View style={{ flex: 1, justifyContent: 'space-evenly' }}>
					<View>
						<Text style={styles.title}>Seja bem-vindo ao</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
							<Text style={{ ...styles.title, fontFamily: 'Pacifico', color: 'white', fontSize: 48 }}> Smart</Text>
							<Text style={{ ...styles.title, fontFamily: 'Pacifico', color: 'yellow', fontSize: 48 }}>bell </Text>
						</View>
					</View>
					<View style={{ flex: 0, alignItems: 'center' }}>
						<Image source={bell} style={styles.bell} resizeMode="contain" />
					</View>
					<View>
						<Button onPress={this.comecar}>
							Vamos começar.
						</Button>
						<View style={{ height: 20 }} />
						<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} onPress={this.login}>
							<View style={{ padding: 15 }}>
								<Text style={styles.text}>JÁ TENHO CONTA</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</View>
			</BaseLayout>
		);
	}
}