import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default class BateVolta extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Status: 'Dispo',
        }
    }

    Disponivel() {
        this.setState({
            Status: 'Disponivel'
        })
        this.props.Atualizar(this.props.id, "Disponivel")
    }

    Indisponivel() {
        this.setState({
            Status: 'Indisponivel',
        })
        this.props.Atualizar(this.props.id, "Indisponivel")
    }

    render() {
        return (
            <View style={estilos.container}>
                <Image
                    style={{ width: 350, height: 150, padding: 5 }}
                    source={{uri: this.props.Imagem}}
                />
                <View>
                    <Text style={estilos.text}>Destino: {this.props.Destino}</Text>
                    <Text style={estilos.text}>Ida / Hora: {this.props.Ida}</Text>
                    <Text style={estilos.text}>Volta / Hora: {this.props.Volta}</Text>
                    <Text style={estilos.text}>Preço: {this.props.Preco}</Text>
                    <Text style={estilos.text}>Situação: {this.props.Status}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={estilos.toucha}
                        onPress={() => this.Disponivel()}
                    >
                        <Text style={estilos.textB}>Dispinivel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.toucha}
                        onPress={() => this.Indisponivel()}
                    >
                        <Text style={estilos.textB}>indisponivel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.toucha}
                        onPress={() => this.props.Remover(this.props.id)}
                    >
                        <Text style={estilos.textB}>Remover</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                </View>
            </View>
        );
    };
}


const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#00c8ff',
        borderRadius: 5,
        width: 350,
        height: 360,
        margin: 5,
        borderRadius: 5,
        marginTop: 15,
        marginLeft: 25
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    toucha: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    toucha1: {
        backgroundColor: 'blue',
        borderRadius: 5,
        margin: 5,
        width: 125,
        height: 31,
        alignItems: 'center',
        marginLeft: 15
    },
    textB: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});