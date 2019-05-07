import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

import firebase from '../firebase';
import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';
import UserPhoto from '../components/UserPhoto';
import AppLogo from '../components/AppLogo';

import idFront from '../assets/id-front.png';
import idBack from '../assets/id-front.png';

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
	},
	inputVerificationCode: {
		backgroundColor: 'white',
		color: '#6014b7',
		padding: 10,
		fontSize: 18,
		elevation: 5,
		textAlign: 'center',
		fontSize: 28
	}
})

const REGISTRATION_STATE = {
	BASIC_DATA: 'BASIC_DATA',
	USER_ID: 'USER_ID',
	EMAIL_AND_PASSWORD: 'EMAIL_AND_PASSWORD'
};

export default class RegistrationScreen extends React.Component {
	state = {
		registrationState: REGISTRATION_STATE.BASIC_DATA,
		user: {
			email: '',
			password: '',
		},
	}

	constructor(props) {
		super(props);
		this.continuar = this.continuar.bind(this);
	}

	continuar() {
		switch (this.state.registrationState) {
			case REGISTRATION_STATE.BASIC_DATA:
				this.setState({ registrationState: REGISTRATION_STATE.USER_ID });
				break;
			case REGISTRATION_STATE.USER_ID:
				this.setState({ registrationState: REGISTRATION_STATE.EMAIL_AND_PASSWORD });
				break;
			case REGISTRATION_STATE.EMAIL_AND_PASSWORD:
				firebase.auth().createUserWithEmailAndPassword(this.state.user.email, this.state.user.password);
				break;
		}
		// TODO: Add react-native-firebase to make this work
		/* this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
			'size': 'normal',
			'callback': async (response) => {
				var phoneNumber = getPhoneNumberFromUserInput();
				var appVerifier = this.recaptchaVerifier;
				try {
					const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
					// SMS sent. Prompt user to type the code from the message, then sign the
					// user in with confirmationResult.confirm(code).
					this.setState({ confirmationResult });
				} catch (error) {
					// Error; SMS not sent
				}
			},
			'expired-callback': function() {
				// Response expired. Ask user to solve reCAPTCHA again.
				// ...
			}
		}); */
	}

	nextButtonEnabled() {
		switch (this.state.registrationState) {
			case REGISTRATION_STATE.EMAIL_AND_PASSWORD:
				return this.state.user.email && this.state.user.password;
		}
		return true;
	}

	registrationBox() {
		if (this.state.registrationState == REGISTRATION_STATE.BASIC_DATA)
			return (
				<>
					<Text style={{ color: 'white', textAlign: 'center', fontSize: 18, }}>Vamos fazer um registro rápido.</Text>
					<UserPhoto />
					<View>
						<TextInput placeholder="Nome completo" style={styles.input} textContentType="name" autoCapitalize="words" />
						<View style={{ height: 10 }} />
						<TextInput placeholder="Telefone" style={styles.input} textContentType="telephoneNumber" keyboardType="phone-pad" />
					</View>
				</>
			)
		else if (this.state.registrationState == REGISTRATION_STATE.USER_ID)
			return (
				<View style={{flexDirection: 'row'}}>
					<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()}>
						<View style={{flex:1, backgroundColor: 'red'}}>
							<Image source={idFront} style={{flex:1}} resizeMode="contain" />
						</View>
					</TouchableNativeFeedback>
					<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()}>
						<View style={{flex:1}}>
							<Image source={idBack} style={{flex:1}} resizeMode="contain" />
						</View>
					</TouchableNativeFeedback>
				</View>
			);
		else if (this.state.registrationState == REGISTRATION_STATE.EMAIL_AND_PASSWORD)
			return (
				<View></View>
			);
	}

	render = () => (
		<BaseLayout>
			<KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'stretch' }}>
				<AppLogo />
				{ this.registrationBox() }
				<Button onPress={this.continuar} disabled={!this.nextButtonEnabled()}>Avançar</Button>
			</KeyboardAvoidingView>
		</BaseLayout>
	)
}