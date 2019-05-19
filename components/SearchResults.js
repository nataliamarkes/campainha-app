import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import FitImage from 'react-native-fit-image';
import loader from '../assets/loading.gif';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		alignItems: 'center',
		borderRadius: 10,
	},
	loader: {
		height: 100,
		width: 100,
	},
});

export default class SearchResults extends React.Component {
	embeddedResults() {
		if (this.props.status == 'searching') {
			return <FitImage source={loader} style={styles.loader} />;
		} else if (this.props.results.length != 0) {
			return this.props.results.map((result, index) => <Text key={index}>{result}</Text>);
		} else {
			return <Text>A busca não retornou resultados.</Text>;
		}
	}

	render() {
		return <View style={styles.container}>{this.embeddedResults()}</View>;
	}
}
