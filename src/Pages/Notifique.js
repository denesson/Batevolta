import React, { Component } from 'react'

import Home from './Home'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import { NotificationManager } from '../ConfNotifica/Notifica.js'


const notificador = NotificationManager
const Stack = createStackNavigator();

export default class App extends Component(){
  
  componentDidMount() {
    notificador.props.configure();
    notificador.createChannel();
    notificador.AgendaSchedule();
  }

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "PF",
      "👉 Aqui vc tem os melhores lanches da regiões e com preços super Acessíveis!",
      {}, // data
      {} // options
    ),
    notificador.showNotification(
      2,
      "Deu fome, Pedi no Lanches da Horas.",
      "Aqui vc tem os melhores lanches da regiões e com preços super Acessíveis!",
      {}, // data
      {} // options
    ),
    notificador.showNotification(
      3,
      "Redirect",
      "Aqui vc tem os melhores lanches da regiões e com preços super Acessíveis!",
      {}, // data
      {} // options
    )
  }

  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }
    render(){
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Pilhas.Screen name="Home">
              {
                ({navigation}) => {
                  notificador.setNavegador(navigation)
                  return(
                    <Home 
                      MandarNotificacao={this.onPressSendNotification} 
                      CancelarNotificacao={this.onPressCancelAllLocalNotification} 
                    />
                  )
                }
              }
            </Pilhas.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }
