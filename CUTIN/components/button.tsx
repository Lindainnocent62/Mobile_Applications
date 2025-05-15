import { COLORS, INPUTS } from '@/constants/theme';
import { router } from 'expo-router';
import React from 'react'
import { StyleSheet, Text, TextInputProps, TouchableOpacity, View } from 'react-native'

interface ButtonProps extends TextInputProps {
  label: string;
  onPress:()=>void
  }

const Button = ({label, onPress}: ButtonProps) => {
  return (
    <View style={styles.buttonView}>
        <TouchableOpacity style={[styles.button, styles.signin]} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
      },
    button: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: INPUTS.radius,
        marginHorizontal: 5,
    },
    signin:{
        backgroundColor: COLORS.primary,
    },
    buttonText:{
        color: COLORS.white
    },
})
export default Button
