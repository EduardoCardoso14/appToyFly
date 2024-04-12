import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import ListaIdade from './ListaIdade';
import Produtos from './Produtos';

const Drawer = createDrawerNavigator();

function Sanduiche() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                    width: 250,
                },
            }}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Cadastro" component={Cadastro} />
                <Drawer.Screen name="Lista por Idade" component={ListaIdade} />
                <Drawer.Screen name="Produtos" component={Produtos} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default Sanduiche;
