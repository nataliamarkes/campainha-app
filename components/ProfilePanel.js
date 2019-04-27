import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const styles = StyleSheet.create({
	profilePanel: {
		display: 'flex',
		flexDirection: 'row',
		paddingTop: 20,
		paddingBottom: 10
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
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1
	},
	role: {
		color: 'white',
		fontStyle: 'italic',
		fontSize: 18,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1
	}
});

export default class ProfilePanel extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.profilePanel}>
				<Image style={styles.icon} source={this.props.icon} />
				<View style={styles.profileText}>
					<Text style={styles.name}>{this.props.name}</Text>
					<Text style={styles.role}>{this.props.role}</Text>
				</View>
			</View>
		);
	}
};