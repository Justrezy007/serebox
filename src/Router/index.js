import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Pages/Home"
import Menu from "../Pages/Menu"
import BibitDetail from '../Pages/BibitDetail';
 

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="BibitDetail" component={BibitDetail} options={{headerShown: false}} />
          {/* <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} /> */}
        </Stack.Navigator>
    )
}

export default Router

