import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import bell from '../../assets/bell.png';

const style = StyleSheet.create({
	logo: { flexDirection: 'row', alignItems: 'center' },
	icon: { width: 40, height: 34 },
	text: { flexDirection: 'row', paddingLeft: 10 },
	logoText: { fontSize: 32, fontFamily: 'Pacifico' },
});

export default () => (
	<View style={style.logo}>
		<Image source={bell} style={style.icon} resizeMode="contain" />
		<View style={style.text}>
			<Text style={[ style.logoText, { color: 'white' } ]}>Smart</Text>
			<Text style={[ style.logoText, { color: 'yellow', flex: 1 } ]}>bell</Text>
		</View>
	</View>
);
