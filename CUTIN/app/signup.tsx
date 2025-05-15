import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Devider from '@/components/devider'
import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router } from 'expo-router';
import SecuredInput from '@/components/securedInput';
import Header from '@/components/header';

const { width, height } = Dimensions.get('screen');

const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

    console.log(email, password, confirmPassword)
  return (
    <SafeAreaView style={styles.container}>
        <Header back={true} route={()=>router.replace('/')} label={'Sign Up'} description={'Register and find your taste'}/>
        <Devider />
        <View style={styles.signContainer}>
            <View style={styles.interActionView}>
                <SecuredInput 
                  placeholder={'Please enter your email'}
                  value={email}
                  setValue={setEmail}
                  secured={false}
                  label={'Email'}
                  disabled={false}
                  search={false}
                  setSearch={()=>{}}
                  />
                <SecuredInput 
                  placeholder={'Please enter your password'}
                  value={password}
                  setValue={setPassword}
                  secured={true}
                  label={'Password'}
                  disabled={false}
                  search={false}
                  setSearch={()=>{}}
                  />
                <SecuredInput 
                  placeholder={'Please confirm your password'}
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  secured={true}
                  label={'Confirm Password'}
                  disabled={false}
                  search={false}
                  setSearch={()=>{}}
                  />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.button, styles.signin]} onPress={()=>router.replace('/registration_details')}>
                    <Text style={styles.buttoneText}>Continue</Text>
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
    buttoneText:{
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
    }
    
})

export default Signin
