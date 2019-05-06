import React from 'react';
import { View, Text, TouchableNativeFeedback, ToastAndroid } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import style from './style';

import profileIcon from '../../assets/icon.png';
import ProfilePanel from '../ProfilePanel';

export default props => (
    <View style={style.details}>
        <ProfilePanel primary name={props.name} role="Visitante" icon={profileIcon} />
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="mobile" size={16} />
                <Text style={[style.text, style.title, { paddingLeft: 5 }]}>Telefone</Text>
            </View>
            <Text style={style.text}>(61)123456789</Text>
        </View>
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="address" size={16} />
                <Text style={[style.text, style.title, { paddingLeft: 5 }]}>Endereço</Text>
            </View>
            <Text style={style.text}>unb asa norte</Text>
        </View>
        <TouchableNativeFeedback onPress={() => ToastAndroid.show('Você autorizou ' + props.name, ToastAndroid.SHORT)}>
            <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 10, borderRadius: 5, backgroundColor: '#009900', shadowColor: '#003300', shadowOffset: { width: 0, height: 5 }, padding: 10, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Autorizar Entrada</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
);