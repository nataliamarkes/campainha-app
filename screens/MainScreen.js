import React from 'react';
import firebase from '../firebase';

import BaseLayout from '../components/BaseLayout';
import Logo from '../components/Logo';
import UserProfilePanel from '../components/UserProfilePanel';
import SearchVisitor from '../components/SearchVisitor';
import SearchResults from '../components/SearchResults';

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			status: 'idle',
			results: [],
			photoURL: '',
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (!user) return;
		});
	}

	getUserPhoto = async () => {
		const url = await firebase.storage().ref('avatars/' + this.state.user.photo).getDownloadURL();
		this.setState({ photoURL: url });
	};

	getUsers = async () => {
		//const users = await firebase.firestore().collection("users").get();
		console.log(this.state.searchTerm);
	};

	onSearch = (name) => {
		this.setState({ searchTerm: name, status: name ? 'searching' : 'idle' }, this.getUsers);
	};
	searchResults = () => {
		if (this.state.results.length != 0 || this.state.status != 'idle')
			return <SearchResults results={this.state.results} status={this.state.status} />;
		else return null;
	};
	render() {
		return (
			<BaseLayout>
				<Logo />
				<UserProfilePanel onPress={() => this.props.navigation.navigate('Profile')} />
				<SearchVisitor onSearch={this.onSearch} />
				{this.searchResults()}
				{/* <UserCard name="João do Pão" /> */}
			</BaseLayout>
		);
	}
}
