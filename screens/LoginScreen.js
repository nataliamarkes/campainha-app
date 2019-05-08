import React from 'react';
import { Alert, View, TextInput, Text, TouchableOpacity, ToastAndroid, Image, StyleSheet } from 'react-native';

import firebase from '../firebase';

import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';
import AppLogo from '../components/AppLogo';

const styles = StyleSheet.create({
	background: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 60, justifyContent: 'space-between' },
	title: { color: 'white', fontSize: 32, textAlign: 'center' },
	text: { color: 'white', fontSize: 24 },
	bell: {
		width: 40,
		height: 31
	},
	logo: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	logoText: {
		fontSize: 32,
		fontFamily: 'Pacifico',
	},
	input: {
		backgroundColor: 'white',
		color: '#6014b7',
		padding: 10,
		fontSize: 18,
		elevation: 5,
		textAlign: 'center',
	}
})

export default class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			buttonDisabled: true,
			email: '',
			password: '',
		}
		this.continuar = this.continuar.bind(this);
		this.setEmail = this.setEmail.bind(this);
		this.setPassword = this.setPassword.bind(this);
	}

	componentDidMount() {
		if (firebase.auth().currentUser)
			this.props.navigation.navigate('Main');
	}

	continuar() {
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => {
			this.props.navigation.navigate('Main');
		}, (error) => {
			Alert.alert('Erro', error.message);
		});
	}

	shouldEnableButton() {
		this.setState({ buttonDisabled: !this.state.email || !this.state.password });
	}

	setEmail(email) {
		this.setState({ email });
		this.shouldEnableButton();
	}

	setPassword(password) {
		this.setState({ password });
		this.shouldEnableButton();
	}

	render() {
		return (
			<BaseLayout>
				<View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'stretch' }}>
					<AppLogo />
					<View>
						<TextInput placeholder="Email" style={styles.input} onChangeText={this.setEmail} value={this.state.email} />
						<View style={{ height: 10 }} />
						<TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={this.setPassword} value={this.state.password} />
					</View>
					<Button onPress={this.continuar} disabled={this.state.buttonDisabled}>Continuar</Button>
				</View>
			</BaseLayout>
		);
	}
}