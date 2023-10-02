import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Menu from "./Menu";
import ListaPasseios from "./ListaPasseios.js";
import Crud from '../Crud/Crud_rn.js';
import Passeios from '../Modal/ModalPasseios.js';
import { RNCamera } from 'react-native-camera';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Destino: "",
      Ida: 0,
      Volta: 0,
      Preco: 0.0,
      Imagem: '',
      Status: 'Disponivel',
      lista: []
    }
    this.listar()
  }

  //Controller Lembrando o MVC

  listar = () => {
    const banco = new Crud()

    banco.Listar().then(
      listaCompleta => (
        this.setState({ lista: listaCompleta })
      )
    )
  }

  Inserir = (Destino, Ida, Volta, Preco, Status, Imagem) => {
    const novoPasseio = new Passeios(Destino, Ida, Volta, Preco, Status, Imagem)
    const banco = new Crud()
    banco.Inserir(novoPasseio)
    this.listar()
  }

  takePicture = async () => {
    if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);
        this.setState({Imagem: data.uri})
    }
};

  Remover = (id) => {
    const banco = new Crud()
    banco.Remover(id)
    this.listar()
  }

  Atualizar = (id, Status) => {
    const banco = new Crud()
    banco.Atualizar(id, Status)
    this.listar()
  }

  render() {
    return (
        <ScrollView>
          <View /*style={{backgroundColor: '#00c8ff', flex: 1}}*/>
            <Menu />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={estilos.textB}>Cadastro de Passeios</Text>

              <TextInput 
                onChangeText={(valor) => { this.setState({ Destino: valor }) }} style={estilos.Input} placeholder="Destino" />

              <TextInput 
                onChangeText={(valor) => { this.setState({ Ida: valor }) }} style={estilos.Input} 
                placeholder="Ida" />

              <TextInput 
                onChangeText={(valor) => { this.setState({ Volta: valor }) }} style={estilos.Input} placeholder="Volta" />

              <TextInput 
                onChangeText={(valor) => { this.setState({ Preco: valor }) }} style={estilos.Input} 
                placeholder="Preço" />
            </View>

            <View style={estilos.container1}>
              <RNCamera
                ref={ref => {
                  this.camera = ref;
                }}
                style={estilos.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                  title: 'Permission to use audio recording',
                  message: 'We need your permission to use your audio',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                  console.log(barcodes);
                }}
              />
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)} style={estilos.capture}>
                  <Text style={{ fontSize: 14 }}> Tira Foto </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity style={estilos.toucha}
                onPress={() => this.Inserir(this.state.Destino, this.state.Ida, this.state.Volta, this.state.Preco, this.state.Status, this.state.Imagem)}
              >
                <Text style={estilos.textC}>Adicionar</Text>
              </TouchableOpacity>
            </View>

            {/*this.state.lista.map(l => (
              <ListaPasseios
                l={l}
                id={l.id}
                Destino={l.Destino}
                Ida={l.Ida}
                Volta={l.Volta}
                Preco={l.Preco}
                Status={l.Status}
                Remover={this.Remover}
                Atualizar={this.Atualizar}
              ></ListaPasseios>
            ))*/}
            <FlatList
              data={this.state.lista}
              renderItem={({ item }) =>
                <ListaPasseios
                  l={item}
                  id={item.id}
                  Destino={item.Destino}
                  Ida={item.Ida}
                  Volta={item.Volta}
                  Preco={item.Preco}
                  Status={item.Status}
                  Imagem={item.Imagem}
                  Remover={this.Remover}
                  Atualizar={this.Atualizar}
                ></ListaPasseios>
              }
            />
          </View>
        </ScrollView>
    );
  };
};



const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#00c8ff',
    borderRadius: 5,
    width: 350,
    height: 200,
    margin: 5,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textB: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  Input: {
    borderWidth: 1,
    width: 340,
    height: 40,
    fontSize: 18,
    borderRadius: 5,
    margin: 5
  },
  toucha: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 5,
    margin: 5,
    width: 150,
  },
  textC: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    width: 342,
    marginLeft: 25,
    borderRadius: 5,
    marginTop: 10
  },
  preview: {
    flex: 1,
    width: 200,
    height: 10,
    marginLeft: 50,
    marginTop: 120,
    marginRight: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginTop: 130,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});