import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import style from './style.js';
import arrow from '../../assets/arrow.png';

const Button = ({...props }) => (
	<TouchableOpacity style={props.disabled ? [style.button, style.disabled] : style.button} {...props}>
		<Text style={style.text}>{props.children}</Text>
		<Image source={arrow} style={style.arrow} resizeMode="contain" />
	</TouchableOpacity>
);

export default Button;