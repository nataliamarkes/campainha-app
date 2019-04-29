import React from 'react';
import BaseLayout from '../components/BaseLayout';
import { ToastAndroid, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import SearchVisitor from '../components/SearchVisitor';
import SearchResults from '../components/SearchResults';
import ProfilePanel from '../components/ProfilePanel';
import profileIcon from '../assets/icon.png';
import { Platform } from 'expo-core';

export default class AuthorizerScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			status: 'idle',
			results: []
		};
		this.onNameProvided = this.onNameProvided.bind(this);
	}

	onNameProvided(name) {
		this.setState({ searchTerm: name, status: 'searching' }, this.searchVisitors);
	}
	searchVisitors() {
		ToastAndroid.show('Searching for ' + this.state.searchTerm, ToastAndroid.SHORT);
	}
	searchResults() {
		if (this.state.results.length == 0)
			return null;
		return <SearchResults results={this.state.results} status={this.state.status} />;
	}
	render = () => (
		<BaseLayout>
			<ProfilePanel editable name="Daniel Castro" role="Morador" icon={profileIcon} />
			<SearchVisitor onNameProvided={this.onNameProvided} />
			{this.searchResults()}
			<View style={styles.details}>
				<ProfilePanel primary name={this.state.searchTerm} role="Visitante" icon={profileIcon} />
				<View style={{
					padding: 20,
				}}>
					<Text style={{
						fontWeight: "bold",
						color: '#545454'
					}}>
						Telefone
						</Text>
					<Text style={{
						color: '#545454'
					}}>
						(61)123456789
						</Text>
				</View>
				<View style={{ padding: 20 }}>
					<Text style={{ fontWeight: "bold", color: '#545454' }}>Endereço</Text>
					<Text style={{ color: '#545454' }}>unb asa norte</Text>
				</View>
				<TouchableNativeFeedback onPress={() => { }}>
					<View style={{ marginLeft: 10, marginRight: 10, marginBottom: 10, borderRadius: 5, backgroundColor: '#009900', shadowColor: '#003300', shadowOffset: { width: 0, height: 5 }, padding: 10, alignItems: 'center' }}>
						<Text style={{ color: 'white', fontWeight: 'bold' }}>Autorizar Entrada</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		</BaseLayout>
	);
};
const styles = StyleSheet.create({
	details: {
		backgroundColor: "white"
	},
	button: {
		margin: 10
	}
});