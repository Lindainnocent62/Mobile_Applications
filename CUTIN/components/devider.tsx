import { COLORS } from '@/constants/theme'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

const {width, height } = Dimensions.get('screen')

const Devider = () => {
  return (
    <View style={styles.container}> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.grayLight,
        width: width,
        height: height * 0.04
    }
})
export default Devider
