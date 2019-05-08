import React from 'react';
import { ToastAndroid } from 'react-native';
import firebase from '../firebase';

import BaseLayout from '../components/BaseLayout';
import AppLogo from '../components/AppLogo';
import ProfilePanel from '../components/ProfilePanel';
import SearchVisitor from '../components/SearchVisitor';
import SearchResults from '../components/SearchResults';
import profileIcon from '../assets/icon.png';

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			status: 'idle',
			results: [],
			user: {
				name: 'Daniel Castro',
				role: 'Morador',
				photo: profileIcon
			},
			photoURL: '',
		};
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(async user => {
			const currentUser = firebase.auth().currentUser;
			if (!currentUser)
				return;
			const ss = await firebase.firestore().collection('users').where('email', '==', currentUser.email).get()
			if (!ss.docs.length)
				return;
			this.setState({ user: ss.docs[0].data() }, () => {
				this.getUserPhoto();
			});
		});
	}

	getUserPhoto = async () => {
		const url = await firebase.storage().ref('avatars/' + this.state.user.photo).getDownloadURL();
		this.setState({ photoURL: url });
	};

	getUsers = async () => {
		//const users = await firebase.firestore().collection("users").get();
		console.log(this.state.searchTerm)
	}

	onSearch = (name) => {
		this.setState({ searchTerm: name, status: name ? 'searching' : 'idle' }, this.getUsers);
	}
	searchResults = () => {
		if ((this.state.results.length != 0) || (this.state.status != 'idle'))
			return <SearchResults results={this.state.results} status={this.state.status} />;
		else return null;
	}
	render(){
		return (
			<BaseLayout>
				<AppLogo/>
				<ProfilePanel editable name={this.state.user.name} role={this.state.user.role} icon={this.state.photoURL} navigation={this.props.navigation}/>
				<SearchVisitor onSearch={this.onSearch} />
				{this.searchResults()}
				{/* <UserCard name="João do Pão" /> */}
			</BaseLayout>
		);
	}
};