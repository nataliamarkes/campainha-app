import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';

import UserPhoto from '../../../components/UserPhoto';
import BaseLayout from '../../../components/BaseLayout';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';
import UserContext from '../../../contexts/UserContext';

const style = {
	title: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
	},
	content: {
		flex: 1,
		justifyContent: 'space-evenly',
	},
	input: {
		backgroundColor: 'white',
		color: '#6014b7',
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
								/>
								<TextInput
									placeholder="Telefone"
									style={style.input}
									textContentType="telephoneNumber"
									keyboardType="phone-pad"
									onChangeText={(phone) => setUser({ phone })}
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
