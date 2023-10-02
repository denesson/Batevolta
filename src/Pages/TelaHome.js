import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';

export default function(){
    return(
        <SafeAreaView>
            <View>
                <View style={estilos.Container}>
                    <Text style={estilos.text}>Bate Volta</Text>
                    <Text style={estilos.text}>Seu Final de semana diferenciado</Text>
                </View>
                <View>
                    <Image
                        style={estilos.Img}
                        source={require('../Imagens/Passeios-BateVolta.jpg')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};


const estilos = StyleSheet.create({
    Container:{
        alignItems: 'center',
        marginBottom: 100,
        marginTop: 100,
    },
    Img:{
        width: 393,
        height: 210,
    },
    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,

    }

})