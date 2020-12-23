import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Colors from '../constants/Colors'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductsOverviewScreen">
        <Stack.Screen 
        name="ProductsOverviewScreen" 
        component={ProductsOverviewScreen}
        options={{ title: 'All Products' }}
        />
        <Stack.Screen
        name='ProductDetailScreen'
        component={ProductDetailScreen}
        options={{title:'Product Details'}}
        />

        </Stack.Navigator>
    </NavigationContainer>
  );
}

