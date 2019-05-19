import React from 'react';
import { TouchableNativeFeedback, Text, View, Image } from 'react-native';

import style from './style.js';
import arrow from '../../assets/arrow.png';

const Button = ({ ...props }) => (
	<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()} {...props}>
		<View style={props.disabled ? [ style.button, style.disabled ] : style.button}>
			<Text style={style.text}>{props.children.toUpperCase()}</Text>
			<Image source={arrow} style={style.arrow} resizeMode="contain" />
		</View>
	</TouchableNativeFeedback>
);

export default Button;
