import React from 'react';
import { ToastAndroid } from 'react-native';
import SearchVisitor from './SearchVisitor';
import SearchResults from './SearchResults';

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
			</React.Fragment>
		);
	}
}