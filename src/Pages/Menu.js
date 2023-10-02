import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';

export default function(){
    return(
        <SafeAreaView>
            <View>
                <View>
                    <Image
                        style={estilos.Img}
                        source={require('../Imagens/Passeios-BateVolta.jpg')}
                    />
                </View>
                <View style={estilos.Container}>
                    <Text style={estilos.text}>Lista de Passeios</Text>
                    <Text style={estilos.text}>Disponivel para o dia 06/23</Text>

                </View>
            </View>
        </SafeAreaView>
    );
};


const estilos = StyleSheet.create({
    Container:{
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 25,
    },
    Img:{
        width: 400,
        height: 210,
    },
    text:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,

    }

})