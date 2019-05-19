import React from 'react';
import { Alert, View, TextInput, Text, KeyboardAvoidingView, StyleSheet } from 'react-native';

import firebase from '../firebase';

import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';
import Logo from '../components/Logo';

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 60,
		justifyContent: 'space-between',
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 32,
		paddingBottom: 10,
	},
	text: {
		color: 'white',
		fontSize: 24,
	},
	bell: {
		width: 40,
		height: 31,
	},
	logo: {
		flexDirection: 'row',
		alignItems: 'center',
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
	},
});

export default class LoginScreen extends React.Component {
	state = {
		buttonDisabled: true,
		email: '',
		password: '',
	};

	componentDidMount() {
		if (firebase.auth().currentUser) this.props.navigation.navigate('Main');
	}

	continuar = () => {
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
			() => {
				this.props.navigation.navigate('Main');
			},
			(error) => {
				switch (error.code) {
					case 'auth/user-not-found':
						Alert.alert('Erro', 'Usuário não encontrado.');
						break;
					case 'auth/invalid-email':
						Alert.alert('Erro', 'Email inválido.');
						break;
					case 'auth/wrong-password':
						Alert.alert('Erro', 'Senha incorreta.');
						break;
				}
			}
		);
	};

	shouldEnableButton = () => {
		this.setState({ buttonDisabled: !this.state.email || !this.state.password });
	};

	setEmail = (email) => {
		this.setState({ email });
		this.shouldEnableButton();
	};

	setPassword = (password) => {
		this.setState({ password });
		this.shouldEnableButton();
	};

	render() {
		return (
			<BaseLayout>
				<KeyboardAvoidingView
					style={{
						flex: 1,
						justifyContent: 'space-between',
						alignItems: 'stretch',
					}}
					behavior="padding"
				>
					<Logo />
					<View>
						<Text style={styles.title}>Login</Text>
						<TextInput
							placeholder="Email"
							style={styles.input}
							onChangeText={this.setEmail}
							value={this.state.email}
						/>
						<View style={{ height: 10 }} />
						<TextInput
							placeholder="Senha"
							style={styles.input}
							secureTextEntry={true}
							onChangeText={this.setPassword}
							value={this.state.password}
						/>
					</View>
					<Button onPress={this.continuar} disabled={this.state.buttonDisabled}>
						Continuar
					</Button>
				</KeyboardAvoidingView>
			</BaseLayout>
		);
	}
}
