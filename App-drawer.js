import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

import SignupScreen from './components/signup';
import LoginScreen from './components/login';
import Logout from './components/logout';

import Location from './components/location';

//import Home from './components/home_with_buttons';

const Drawer = createDrawerNavigator();

class App extends Component {
  render(){
    return (
    <NavigationContainer>
     <Drawer.Navigator>
       <Drawer.Screen name="Home" component={Home} />
       <Drawer.Screen name="About" component={About} />
       <Drawer.Screen name="Contact" component={Contact} />

<Drawer.Screen name="SignupScreen" component={SignupScreen} />
<Drawer.Screen name="LoginScreen" component={LoginScreen} />
<Drawer.Screen name="Logout" component={Logout} />

<Drawer.Screen name="Location" component={Location} />

    </Drawer.Navigator>
  </NavigationContainer>
);
}
}
    export default App;