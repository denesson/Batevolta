import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';


export default function(){
    return(
        <View style={estilos.container}>
            <View>
                <Text style={estilos.text}>
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </Text>
            </View>
            <View>
                <Text style={estilos.text1}>Endereço</Text>
                <Text style={estilos.text2}>Rua: Rua Pereira Estéfano</Text>
                <Text style={estilos.text2}>Bairro: Vila da Saúde</Text>
                <Text style={estilos.text2}>Cidade: São Paulo</Text>
                <Text style={estilos.text2}>Estado: SP</Text>
                <Text style={estilos.text2}>CEP: 04144070</Text>
                <Text style={estilos.text2}>Funcionamento: Aberto de Segunda a Sexta das 8:00 às 20:00</Text>
            </View>
            
        </View>
    )
};

const estilos = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    Image:{
        width: 360,
        height: 250
    },
    text:{
        color: 'black',
        fontSize: 19,
        fontWeight: '400',
        margin: 5
    },
    text1:{
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 25,
        marginBottom: 25,
    },
    text2:{
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
    }
})