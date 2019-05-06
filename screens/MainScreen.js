import React from 'react';
import { ToastAndroid } from 'react-native';
import firebase from '../firebase';

import BaseLayout from '../components/BaseLayout';
import AppLogo from '../components/AppLogo';
import ProfilePanel from '../components/ProfilePanel';
import SearchVisitor from '../components/SearchVisitor';
import SearchResults from '../components/SearchResults';
import UserCard from '../components/UserCard';
import profileIcon from '../assets/icon.png';

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			status: 'idle',
			results: []
		};
		this.onSearch = this.onSearch.bind(this);
	}

	async getUsers() {
		const users = await firebase.firestore().collection("users").get();
	}

	onSearch(name) {
		this.setState({ searchTerm: name, status: name ? 'searching' : 'idle' }, this.getUsers.bind(this));
	}
	searchResults() {
		if ((this.state.results.length != 0) || (this.state.status != 'idle'))
			return <SearchResults results={this.state.results} status={this.state.status} />;
		else return null;
	}
	render = () => (
		<BaseLayout>
			<AppLogo/>
			<ProfilePanel editable name="Daniel Castro" role="Morador" icon={profileIcon} />
			<SearchVisitor onSearch={this.onSearch} />
			{this.searchResults()}
			{/* <UserCard name="João do Pão" /> */}
		</BaseLayout>
	);
};