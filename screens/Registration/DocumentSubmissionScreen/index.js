import React from 'react';
import { Alert, KeyboardAvoidingView, TouchableNativeFeedback, Image, View, Text } from 'react-native';
import { ImagePicker } from 'expo';

import BaseLayout from '../../../components/BaseLayout';
import Logo from '../../../components/Logo';
import Button from '../../../components/Button';

import documentFront from '../../../assets/id-front.png';
import documentBack from '../../../assets/id-front.png';
import ProfilePanel from '../../../components/ProfilePanel';
import UserContext from '../../../contexts/UserContext';

const style = {
	title: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
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
	idLabel: {
		textAlign: 'center',
		fontWeight: 'bold',
		paddingBottom: 20,
		fontSize: 18,
		color: 'white',
	},
};

const finish = () => {
	Alert.alert('Erro', 'Você tem que enviar um documento de identificação para prosseguir.');
};

const pickImage = (side) => {
	const buttons = [ { text: 'Não', style: 'cancel' }, { text: 'Sim', onPress: setImage } ];
	if (side == 'front') Alert.alert('Mudar imagem', 'Tem certeza de que deseja trocar a foto da frente?', buttons);
	else Alert.alert('Mudar imagem', 'Tem certeza de que deseja trocar a foto de trás?', buttons);
};

const setImage = async () => {
	const data = await ImagePicker.launchCameraAsync({
		allowsEditing: true,
		quality: 0.7,
		base64: true,
		exif: true,
	});

	console.log(data);
	if (data.cancelled) {
		Alert.alert('Info', 'Você cancelou o bagulho.', [ { text: 'OK' } ]);
	}
};

export default ({ navigation, onDocumentLoaded }) => (
	<UserContext>
		{({ user, setUser }) => (
			<BaseLayout>
				<Logo />
				<KeyboardAvoidingView behavior="padding" style={style.content}>
					<ProfilePanel name={user.name} />
					<Text style={style.title}>Tire fotos de um documento de identificação</Text>
					<View style={{ flexDirection: 'row', flex: 1, paddingVertical: 50 }}>
						<TouchableNativeFeedback
							background={TouchableNativeFeedback.Ripple()}
							onPress={async () => pickImage('front')}
						>
							<View style={{ flex: 1 }}>
								<Image
									source={documentFront}
									style={{ flex: 1, width: undefined, height: undefined }}
									resizeMode="contain"
									tintColor="white"
								/>
								<Text style={style.idLabel}>Frente</Text>
							</View>
						</TouchableNativeFeedback>
						<TouchableNativeFeedback
							background={TouchableNativeFeedback.Ripple()}
							style={{ flex: 1 }}
							onPress={() => pickImage('back')}
						>
							<View style={{ flex: 1 }}>
								<Image
									source={documentBack}
									style={{ flex: 1, width: undefined, height: undefined }}
									resizeMode="contain"
									tintColor="white"
								/>
								<Text style={style.idLabel}>Verso</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
					<Button onPress={finish}>Continuar</Button>
				</KeyboardAvoidingView>
			</BaseLayout>
		)}
	</UserContext>
);
