import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import style from './style.js';
import avatar from '../../assets/default-avatar2.png';

class UserPhoto extends React.Component {
	state = {
		avatarSource: null,
		hasPermissions: false,
	}
	constructor(props) {
		super(props);
		this.setPhoto = this.setPhoto.bind(this);
	}

	async componentDidMount() {
		const permissionCamera = await Permissions.getAsync(Permissions.CAMERA);
		const permissionCameraRoll = await Permissions.getAsync(Permissions.CAMERA_ROLL);
		if ((permissionCamera.status !== 'granted') || (permissionCameraRoll.status !== 'granted')) {
			const newPermissionCamera = await Permissions.askAsync(Permissions.CAMERA);
			const newPermissionCameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);
			if ((newPermissionCamera.status == 'granted') && (newPermissionCameraRoll.status == 'granted')) {
				this.setState({ hasPermissions: true });
			}
		} else {
			this.setState({ hasPermissions: false });
		}
	}

	async setPhoto() {
		/* const data = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		}); */
		const data = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		})
		console.log(data);
		this.setState({ avatarSource: data.uri });
	}

	render() {
		return (
			<View style={style.photoView}>
				<TouchableOpacity onPress={this.setPhoto} style={style.touchablePhoto}>
					<Image source={this.state.avatarSource ? { uri: this.state.avatarSource } : avatar} style={style.photo} />
				</TouchableOpacity>
			</View>
		)
	}
}

export default UserPhoto;