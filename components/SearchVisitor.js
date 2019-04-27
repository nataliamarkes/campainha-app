import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
	label: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 5,
		fontSize: 18,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		color: '#595959',
		elevation: 5,
		shadowColor: 'black',
		shadowOffset: { width: 5, height: 5 },
		shadowOpacity: 0.3,
		shadowRadius: 10
	},
	container: {
		paddingBottom: 10,
	}
});

export default class SearchVisitor extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.label}>Procure o nome do visitante</Text>
				<TextInput style={styles.input} placeholder='Nome' onChangeText={text => this.props.onNameProvided(text)}></TextInput>
			</View>
		);
	};
};