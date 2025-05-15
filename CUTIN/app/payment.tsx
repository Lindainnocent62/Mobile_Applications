import Button from '@/components/button'
import Devider from '@/components/devider'
import Header from '@/components/header'
import OrderDelivery from '@/components/order_dilivery'
import OrderSummary from '@/components/order_summary'
import { COLORS, MARGIN, SIZES } from '@/constants/theme'
import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Payment = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header 
          back={true} 
          route={()=>{router.replace('/cart')}} 
          label={'Payment'} 
          description={'You deserve better meal'}
        />
        <Devider />
        <OrderSummary 
            items={[
                { name: 'Cherry Healthy', price: 'R200.00' }
            ]}
            totalAmount="R250.00"
            deliveryFee="R50.00"
        />
        <Devider />
        <OrderDelivery 
        deliveryType="Delivery"
        name="John Doe"
        phoneNo="0712345678"
        address="Main Street"
        houseNo="123"
        city="Johannesburg"
        zip="2000"
        />
        <View style={styles.buttonContainer}>
          <Button 
            label={'Checkout Now'} 
            onPress={() => router.replace('/edit_profile')}
          />
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.background
    },
    buttonContainer: {
        paddingBottom: MARGIN.bottom,
    },    
})
export default Payment
