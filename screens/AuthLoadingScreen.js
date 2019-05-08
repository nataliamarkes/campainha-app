import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Image, View } from 'react-native';

import firebase from '../firebase';
import BaseLayout from '../components/BaseLayout';
import bell from '../assets/bell.png';

const styles = StyleSheet.create({
    bell: {
		width: 235,
		height: 200,
	},
});

export default class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(firebase.auth().currentUser ? 'App' : 'Auth');
        })
    }

    render() {
        return (
            <BaseLayout>
                <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Image source={bell} style={styles.bell} resizeMode="contain" />
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            </BaseLayout>
        );
    }
};