import * as React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TelaHome from "./src/Pages/TelaHome";
import Icon from 'react-native-vector-icons/FontAwesome5.js';
import Icon1 from 'react-native-vector-icons/Entypo.js';
import Icon2 from 'react-native-vector-icons/Entypo.js';
import TelaPasseios from "./src/Pages/TelaPasseio"
import SobreLoja from "./src/Pages/SobreLoja";
import Pagamentos from "./src/Pages/Pagamentos";
import Viagens from "./src/Pages/TelaViagens"
import { NotificationManager } from './src/ConfNotifica/Notifica'



const Tab = createBottomTabNavigator();
const Pilhas = createNativeStackNavigator();
const notificador = NotificationManager



function Lista({navigation}){
  return(
    <View style={estilos.ListaContainer}>
      <View>
        <Text 
          onPress={() => navigation.navigate('Lista de Passeios')}
        style={estilos.ListaText}>
            Passeios
        </Text>
      </View>
      <View>
        <Text 
        onPress={() => navigation.navigate('Lista de Viagens')}
      style={estilos.ListaText}>
            Viagens
        </Text>
      </View>
    </View>
  );
};

function Detalhes() {
  return(
    <Pilhas.Navigator>
      <Pilhas.Screen name='Passeios e Viagens' component={Lista}/>
      <Pilhas.Screen name='Lista de Passeios' component={TelaPasseios}/>
      <Pilhas.Screen name='Lista de Viagens' component={Viagens}/>
    </Pilhas.Navigator>
  )
}


function MyTabs(){
  return(
    <Tab.Navigator
    >
      <Tab.Screen
        name="Home"
        component={TelaHome}
        options={{headerShown: false,
          tabBarIcon:({ size, color}) => (
            <Icon2
            name= 'home' color={color} size={size}
            />
          )
        }}
        />
      <Tab.Screen
        name="Passeios"
        component={Detalhes}
        options={{headerShown: false,
          tabBarIcon:({size, color}) => (
            <Icon
              name='bus' color={color} size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Sobre a loja"
        component={SobreLoja}
        options={{
          tabBarIcon:({size, color}) => (
            <Icon
              name='building' color={color} size={size}
            />
          )
        }}
      />
      <Tab.Screen
        name="Pagamentos"
        component={Pagamentos}
        options={{
          tabBarIcon:({size, color}) => (
            <Icon1
              name='credit-card' color={color} size={size}
            />
          )
        }}
      />
      
    </Tab.Navigator>
  )
}

export default function Viagem() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

const estilos = StyleSheet.create({
  ListaContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  ListaText:{
    margin: 5,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    borderRadius: 5
  }
});