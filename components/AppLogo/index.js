import React from 'react';
import { View, Image, Text } from 'react-native';
import bell from '../../assets/bell.png';
import style from './style';

const AppLogo = () => (
    <View style={style.logo}>
        <Image source={bell} style={style.icon} resizeMode="contain" />
        <View style={style.text}>
            <Text style={[style.logoText, {color: 'white'}]}>Smart</Text>
            <Text style={[style.logoText, {color: 'yellow', flex: 1}]}>bell</Text>
        </View>
    </View>
);

export default AppLogo;