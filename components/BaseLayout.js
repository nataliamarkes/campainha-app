import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

export default class BaseLayout extends React.Component {
	render = () => (
		<View style={styles.wrapper}>
			<LinearGradient colors={['purple', '#09c']} start={[0, 1]} end={[1, 0]} style={styles.backgroundGradient}>
				<ImageBackground source={require('../assets/f5afdc64208ecd704a2e1124e068b6b1.jpg')} style={styles.background}>
					<Text style={styles.backgroundText}>Finance Centre Tower, Manilla</Text>
				</ImageBackground>
				<View style={styles.container}>
					{this.props.children}
				</View>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'stretch'
	},
	backgroundGradient: {
		flex: 1,
	},
	container: {
		flex: 1,
		padding: 30,
	},
	background: {
		width: '100%',
		height: '100%',
		display: 'flex',
		position: 'absolute',
		opacity: 0.3,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	backgroundText: {
		color: 'black',
		fontStyle: 'italic',
		paddingBottom: 20
	},
});