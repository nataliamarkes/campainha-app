import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';

import UserPhoto from '../../../components/UserPhoto';
import BaseLayout from '../../../components/BaseLayout';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import UserContext from '../../../contexts/UserContext';

const style = {
	title: {
		color: '#edd228',
		padding: 10,
		borderRadius: 5,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 20,
	},
	content: {
		flex: 1,
		justifyContent: 'space-evenly',
	},
	input: {
		backgroundColor: 'white',
		color: '#0084EB',
		padding: 10,
		fontSize: 18,
		elevation: 5,
		textAlign: 'center',
	},
	form: {
		flex: 1,
		justifyContent: 'space-evenly',
	},
};

export default class BasicDataScreen extends Component {
	render() {
		return (
			<BaseLayout>
				<Logo />
				<KeyboardAvoidingView behavior="padding" style={style.content}>
					<Text style={style.title}>Vamos fazer um registro rápido.</Text>
					<UserPhoto />
					<UserContext.Consumer>
						{({ setUser }) => (
							<React.Fragment>
								<TextInput
									placeholder="Nome completo"
									style={style.input}
									textContentType="name"
									autoCapitalize="words"
									onChangeText={(name) => setUser({ name })}
									autoFocus
									onSubmitEditing={() => phoneInput.focus()}
								/>
								<TextInput
									placeholder="Telefone"
									style={style.input}
									textContentType="telephoneNumber"
									keyboardType="phone-pad"
									onChangeText={(phone) => setUser({ phone })}
									ref={(el) => (phoneInput = el)}
								/>
							</React.Fragment>
						)}
					</UserContext.Consumer>
					<Button
						// onPress={() => this.props.navigation.navigate('DocumentSubmission', { nome: this.state.nome })}
						onPress={() => this.props.navigation.navigate('DocumentSubmission')}
					>
						Continuar
					</Button>
				</KeyboardAvoidingView>
			</BaseLayout>
		);
	}
}
