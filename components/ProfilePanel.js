import React from 'react';
import { StyleSheet, View, Image, Text, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
	profilePanel: {
		display: 'flex',
		flexDirection: 'row',
		padding: 20
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
		defaultAvatar: require('../assets/default-avatar.png'),
		avatarSource: null,
		name: 'John Doe'
	};

	render() {
		return (
			<TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
				<View style={styles.profilePanel}>
					<Image style={styles.icon} source={this.state.avatarSource ? { uri: this.state.avatarSource } : this.state.defaultAvatar} />
					<View style={styles.profileText}>
						<Text style={this.props.primary ? styles.name : styles.primaryName}>{this.props.name ? this.props.name : this.state.name}</Text>
						<Text style={this.props.primary ? styles.role : styles.primaryRole}>{this.props.role}</Text>
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}
};