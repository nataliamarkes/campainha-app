import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Image, StyleSheet } from 'react-native';

import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';
import UserPhoto from '../components/UserPhoto';
import AppLogo from '../components/AppLogo';

const styles = StyleSheet.create({
	background: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 60, justifyContent: 'space-between' },
	title: { color: 'white', fontSize: 32, textAlign: 'center' },
	text: { color: 'white', fontSize: 24 },
	input: {
		backgroundColor: 'white',
		color: '#6014b7',
		padding: 10,
		fontSize: 18,
		elevation: 5,
		textAlign: 'center',
	}
})

export default class RegistrationScreen extends React.Component {
	constructor(props) {
		super(props);
		this.continuar = this.continuar.bind(this);
	}

	continuar() {
		this.props.navigation.navigate('Main');
	}

	render() {
		return (
			<BaseLayout>
				<KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'stretch' }}>
					<AppLogo />
					<UserPhoto />
					<View>
						<TextInput placeholder="Nome completo" style={styles.input} textContentType="name" autoCapitalize="words" />
						<View style={{ height: 10 }} />
						<TextInput placeholder="Telefone" style={styles.input} textContentType="telephoneNumber" keyboardType="phone-pad" />
					</View>
					<Button onPress={this.continuar}>Continuar</Button>
				</KeyboardAvoidingView>
			</BaseLayout>
		);
	}
}