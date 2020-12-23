import React from 'react'
import ProductItem from '../../components/shop/ProductItem'
import ProductDetail from '../../screens/shop/ProductDetailScreen'
import ShopNavigation from '../../navigation/ShopNavigator'

import { StyleSheet, Text, View, FlatList } from 'react-native'
import {useSelector} from 'react-redux'

export default function ProductsOverviewScreen(props) {
  const products = useSelector(state => state.products.availableProducts)
  return (
    <View>
    <FlatList data={products} 
    renderItem={itemData => 
      <ProductItem 
  image={itemData.item.imageUrl} 
  title={itemData.item.title} 
  price={itemData.item.price} 
  onViewDetail={()=>{
    props.navigation.navigate('ProductDetailScreen', {productId: itemData.item.id})
  }} 
  onAddToCart={()=>{}}/>
  }/>
  </View>
  )
}



const styles = StyleSheet.create({

})
