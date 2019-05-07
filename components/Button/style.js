import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	arrow: {
		width: 30,
		height: 30,
	},
	button: {
		height: 50,
		padding: 10,
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	disabled: {
		opacity: 0.3,
	},
	text: {
		flex: 1,
		color: 'white',
		fontSize: 28,
	},
});