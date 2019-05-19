import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import style from './style.js';
import UserContext from '../../contexts/UserContext';
import defaultAvatar from '../../assets/default-avatar2.png';

class UserPhoto extends React.Component {
	async getPermissions() {
		const permissionCamera = await Permissions.askAsync(Permissions.CAMERA);
		const permissionCameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (permissionCamera.status !== 'granted' || permissionCameraRoll.status !== 'granted') {
			return false;
		}
		return true;
	}

	takePhoto = async () => {
		if (!await this.getPermissions()) {
			Alert.alert('Erro', 'Você precisa dar permissão para tirar foto.');
			return;
		}
		const data = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [ 1, 1 ],
			quality: 0.5,
		});
		return data.uri || null;
	};

	getUserPhoto = (user) => {
		const thereIsNoUser = user == null;
		const userHasNoPhoto = user && user.photo === null;

		if (thereIsNoUser || userHasNoPhoto) return defaultAvatar;
		else {
			console.log('User photo: ', user.photo);
			return { uri: user.photo };
		}
	};

	render() {
		return (
			<UserContext.Consumer>
				{({ user, setUser }) => (
					<View style={style.photoView}>
						<TouchableOpacity
							onPress={async () => setUser({ photo: await this.takePhoto() })} // [BUG] Assumindo que o usuário não cancela a foto!
							style={style.touchablePhoto}
						>
							<Image source={this.getUserPhoto(user)} style={style.photo} />
						</TouchableOpacity>
					</View>
				)}
			</UserContext.Consumer>
		);
	}
}

export default UserPhoto;
