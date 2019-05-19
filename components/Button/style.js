import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	arrow: {
		width: 30,
		height: 30,
	},
	button: {
		height: 50,
		padding: 10,
		borderRadius: 5,
		borderColor: 'white',
		borderWidth: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	disabled: {
		opacity: 0.3,
	},
	text: {
		flex: 1,
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
