import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';


export default function(){
    return(
        <View style={estilos.container}>

            <Text style={estilos.text}>Formas de Pagamentos</Text>

            <Image
                style={estilos.Image}
                source={require('../Imagens/formasdepagamentocartoes.webp')}
            />
        </View>
    )
};


const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image:{
        width: 360,
        height: 250
    },
    text:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})