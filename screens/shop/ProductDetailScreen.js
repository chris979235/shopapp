import React from 'react'
import { 
  StyleSheet, 
  Text,
  Image, 
  Button, 
  View, 
  ScrollView } from 'react-native'
  import {useSelector} from 'react-redux'
  

export default function ProductDetailScreen({props, route}) {
  const {productId} = route.params
  // const productId = props.navigation.getParam('productId')
  JSON.stringify(productId)
  const selectedProduct = useSelector(state => 
    state.products.availableProducts.find(prod => prod.id === productId))



  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  )
}



const styles = StyleSheet.create({})
