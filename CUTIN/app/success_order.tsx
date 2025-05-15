import Button from '@/components/button'
import { COLORS, MARGIN, SIZES } from '@/constants/theme'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('screen')

const Success_signup = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image 
              source={require('../assets/images/humburger.png')} 
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>You’ve Made Order</Text>
            <Text style={styles.subtitle}>
                Your order will be ready in the next 15 minutes. You will get a notification once your order is ready.
            </Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            label={'View My Order'} 
            onPress={() => router.replace('/(tabs)/activity')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: MARGIN.allRoundMarging,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 0.3,
    alignItems: 'center',
    paddingHorizontal: MARGIN.bottom,
  },
  title: {
    fontSize: RFPercentage(SIZES.large),
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: MARGIN.bottom,

  },
  subtitle: {
    fontSize: RFPercentage(SIZES.medium),
    color: COLORS.primary,
    textAlign: 'center',
    padding: 50
  },
  buttonContainer: {
    paddingBottom: MARGIN.bottom,
  },
})

export default Success_signup