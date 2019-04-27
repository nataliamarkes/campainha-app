import React from 'react';
import { ToastAndroid,StyleSheet,View,Text } from 'react-native';
import SearchVisitor from './SearchVisitor';
import SearchResults from './SearchResults';
import ProfilePanel from './ProfilePanel';
import profileIcon from '../assets/icon.png';

export default class SearchComponent extends React.Component {
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

	render() {
		return (
			<React.Fragment>
				<SearchVisitor onNameProvided={this.onNameProvided} />
				{this.searchResults()}
				<View style={styles.details}>
					<ProfilePanel primary name={this.state.searchTerm} role="Morador" icon={profileIcon} />
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
					<View style={{
						padding: 20
					}}>
						<Text style={{
							fontWeight: "bold",
							color: '#545454'
						}}>
							Endereço
						</Text>
						<Text style={{
							color: '#545454'
						}}>
							unb asa norte
						</Text>
					</View>
				</View>
			</React.Fragment>
		);
	}
}
const styles = StyleSheet.create({
	details: {
		backgroundColor: "white",
		height: 300,

	}
});