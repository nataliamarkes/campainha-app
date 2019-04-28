import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';

const styles = StyleSheet.create({
	profilePanel: {
		display: 'flex',
		flexDirection: 'row',
		padding: 20,
		borderBottomColor: '#e3e3e3',
		borderBottomWidth: 1
	},
	profileText: {
		justifyContent: 'center',
		paddingLeft: 20
	},
	icon: {
		borderColor: 'white',
		borderWidth: 3,
		borderRadius: 50,
		height: 60,
		width: 60,
		backgroundColor: 'white'
	},
	name: {
		color: '#8f8f8f',
		fontSize: 20
	},
	primaryName: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1
	},
	role: {
		color: '#b2b2b2',
		fontStyle: 'italic',
		fontSize: 18,
	},
	primaryRole: {
		color: 'white',
		fontStyle: 'italic',
		fontSize: 18,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1
	}
});

export default class ProfilePanel extends React.Component {
	state = {
		avatarSource: null
	};

	constructor(props) {
		super(props);
		this.pickPhoto = this.pickPhoto.bind(this);
	}

	async pickPhoto() {
		const data = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 0.5
		});
		console.log(data);
		this.setState({ avatarSource: data.uri });
	}

	render() {
		return (
			<View style={styles.profilePanel}>
				<TouchableOpacity onPress={this.pickPhoto}>
					<Image style={styles.icon} source={{ uri: this.state.avatarSource }} />
				</TouchableOpacity>
				<View style={styles.profileText}>
					<Text style={this.props.primary ? styles.name : styles.primaryName}>{this.props.name}</Text>
					<Text style={this.props.primary ? styles.role : styles.primaryRole}>{this.props.role}</Text>
				</View>
			</View>
		);
	}
};