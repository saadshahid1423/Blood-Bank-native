import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../login/login';
import Signup from '../signup/signup';
import Main from '../screen/main/main';
import Donate from '../screen/donate/donate';
import Give from '../screen/give/give';
import Contact from '../screen/contact/contact';
import Givedetail from '../screen/give/givedetail';
const Stack = createStackNavigator();


class AppNavigation extends React.Component{
    render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Donate" component={Donate} />
          <Stack.Screen name="Give" component={Give} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Givedetail" component={Givedetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    }
  }
export default AppNavigation;