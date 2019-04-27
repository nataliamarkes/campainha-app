import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import loader from '../assets/loading.gif';

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: 300,
		padding: 10
	}
});

export default class SearchResults extends React.Component {
	constructor(props) {
		super(props);
	}

	embeddedResults() {
		/* if (this.props.status != 'searching') */
		return <Image source={loader} />;
		/* if (this.props.results.length != 0)
			return this.props.results.map((result, index) =>
				<Text key={index}>{result}</Text>
			); */
	}

	render() {
		return (
			<View style={styles.container}>
				{this.embeddedResults()}
			</View>
		);
	}
};