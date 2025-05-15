import Deliver_address from '@/components/deliver_address'
import Devider from '@/components/devider'
import SecuredInput from '@/components/securedInput'
import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const { width, height } = Dimensions.get('screen')

const Registration_details = () => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ address, setAddress ] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>router.replace('/signup')}>
            <FontAwesome5 
              name={'chevron-left'}
              size={30}
              color={COLORS.primary}
            />
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.signIn}>Address</Text>
            <Text style={styles.placeHolder}>Please complete registration </Text>
          </View>
        </View>
        <Devider />
        
          <View style={styles.signContainer}>
          <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
              keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
              style={{ flex: 1 }}
            >
              <ScrollView
                bounces={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                keyboardShouldPersistTaps='handled'
                >
                  <View style={styles.interActionView}>
                      <SecuredInput 
                        placeholder={'Please enter your name'}
                        value={name}
                        setValue={setName}
                        secured={false}
                        label={'Name'}
                        disabled={false}
                        search={false}
                        setSearch={()=>{}}
                        />
                      <SecuredInput 
                        placeholder={'Please enter your contact number'}
                        value={phone}
                        setValue={setPhone}
                        secured={false}
                        label={'Contact Number'}
                        disabled={false}
                        search={false}
                        setSearch={()=>{}}
                        />
                  </View>
                  <View style={styles.addressContainer}>
                    <View style={styles.toggleContainer}>
                      <Switch
                        value={address}
                        onValueChange={setAddress}
                        thumbColor={address ? COLORS.primary : COLORS.secondary}
                        trackColor={{ false: COLORS.secondary, true: COLORS.primary }}
                      />
                      <Text style={styles.toggleLabel}>Set Deilivery to pick Up</Text>
                    </View>
                    {
                      !address && <Deliver_address />
                    }
                  </View>
                </ScrollView>
             </KeyboardAvoidingView>
              <View style={styles.buttonView}>
                  <TouchableOpacity style={[styles.button, styles.signin]} onPress={()=>router.replace('/success_signup')}>
                      <Text style={styles.buttonText}>Continue</Text>
                  </TouchableOpacity>
                  
              </View>
          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        flex: 0.15,
        backgroundColor: COLORS.white,
        padding: MARGIN.allRoundMarging,
        flexDirection:'row',
        alignItems: 'center',

    },
    signContainer: {
        flex: 0.85,
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
        padding: MARGIN.allRoundMarging
    },
    signIn:{
        fontSize: RFPercentage(SIZES.xLarge),
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    placeHolder:{
        color: COLORS.secondary
    },
    inputContainer:{
        flexDirection:'row',
        borderColor: COLORS.text_border,
        borderRadius: INPUTS.radius, 
        borderWidth: 1,
    },
    passwordExtras:{
        alignItems:'center'
    },
    input:{
        padding: 12,
        fontSize: 14,
        width:'90%'
    },
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
    singup: {
        backgroundColor: COLORS.secondary,
    },
    signin:{
        backgroundColor: COLORS.primary,
    },
    buttonText:{
        color: COLORS.white
    },
    interActionView: {
        flex:0.6
    },
    inputFieldContainer:{
      marginBottom: 20
    },
    inputText:{
        paddingBottom: 10,
        fontWeight:'bold'
    },
    rememberState:{
        flexDirection:'row'
    },
    saveLoginState: {
        width: 20,
        height: 18,
        borderWidth: 1,
        borderColor: COLORS.primary,
        marginRight: 8,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 2
    },
    signupContainer: {
      paddingLeft: 20
    },
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    toggleLabel: {
      fontSize: 15,
      marginLeft: MARGIN.marginLeft_minor,
      fontWeight: 'bold'
    },
    addressContainer:{
      flex: 1
    }
    
})
export default Registration_details
