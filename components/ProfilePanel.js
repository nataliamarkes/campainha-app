import React from 'react';
import styled from 'styled-components';
import { StyleSheet, View, Image, Text, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
	profilePanel: {
		display: 'flex',
		flexDirection: 'row',
		padding: 20,
		borderRadius: 50,
	},
	icon: {
		borderColor: 'white',
		borderWidth: 3,
		borderRadius: 50,
		height: 60,
		width: 60,
		backgroundColor: 'white',
	},
});

const LinkToProfile = ({ children, onPress }) => (
	<TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={onPress}>
		<View style={styles.profilePanel}>{children}</View>
	</TouchableNativeFeedback>
);

const Avatar = ({ source }) => (
	<Image
		style={styles.icon}
		source={source ? { uri: source } : require('../assets/default-avatar.png')}
		resizeMode="contain"
	/>
);

const ProfileText = styled.View`
	justify-content: center;
	padding-left: 20;
`;

const Role = styled.Text`
	color: white;
	font-style: italic;
	font-size: 18;
`;

const Name = styled.Text`
	color: white;
	font-weight: bold;
	font-size: 20;
`;

export default ({ name, role, avatarSource, onPress }) => (
	<LinkToProfile onPress={onPress}>
		<Avatar source={avatarSource} />
		<ProfileText>
			<Name>{name}</Name>
			<Role>{role}</Role>
		</ProfileText>
	</LinkToProfile>
);
