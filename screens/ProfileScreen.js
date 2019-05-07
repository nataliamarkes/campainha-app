import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

import BaseLayout from '../components/BaseLayout'
import AppLogo from '../components/AppLogo'
import UserPhoto from '../components/UserPhoto';
import idFront from '../assets/id-front.png';

const style = StyleSheet.create({
    card: {
        borderRadius: 5,
        backgroundColor: 'white',
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#666',
        textAlign: 'center',
        paddingBottom: 10,
    },
    changeAvatarButton: {
        textAlign: 'center',
        borderColor: '#09c',
        borderWidth: 1,
        borderRadius: 5,
        color: '#09c',
        padding: 10,
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#666',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 16,
        flex: 1,
    },
    text: {
        fontSize: 18,
        color: '#666',
    },
    infoWrapper: {
        marginBottom: 30
    }
})

export default class Profile extends Component {
    render() {
        return (
            <BaseLayout>
                <AppLogo />
                <ScrollView style={style.card}>
                    <UserPhoto />
                    <TouchableOpacity>
                        <View>
                            <Text style={style.changeAvatarButton}>Mudar Foto</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={style.name}>Daniel Nora</Text>
                    <View style={style.infoWrapper}>
                        <View style={style.titleWrapper}>
                            <FontAwesome name="mobile" size={28} />
                            <Text style={style.title}>Telefone</Text>
                        </View>
                        <View>
                            <Text style={style.text}>(61) 1234-4567</Text>
                        </View>
                    </View>
                    <View style={style.infoWrapper}>
                        <View style={style.titleWrapper}>
                            <Entypo name="address" size={20} />
                            <Text style={style.title}>Endereço</Text>
                        </View>
                        <View>
                            <Text style={style.text}>Rua das Avenidas, nº Zero</Text>
                        </View>
                    </View>
                    <View style={style.infoWrapper}>
                        <View style={style.titleWrapper}>
                            <FontAwesome name="id-card-o" size={20} />
                            <Text style={style.title}>Documento de Identificação</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <View style={{flex:1}}>
                                <Image source={idFront} style={{flex: 1, height: 150, width: 150}} resizeMode="contain" />
                                <Text style={{textAlign: 'center'}}>Frente</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Image source={idFront} style={{flex: 1, height: 150, width: 150}} resizeMode="contain" />
                                <Text style={{textAlign: 'center'}}>Verso</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </BaseLayout>
        )
    }
}