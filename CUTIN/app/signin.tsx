import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Devider from '@/components/devider'
import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router } from 'expo-router';
import SecuredInput from '@/components/securedInput';

const { width, height } = Dimensions.get('screen');

const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ storeSession, setStoreSession ] = useState(false)
    const [ showPassword, setShowPassword ] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.signIn}>Sign In</Text>
            <Text style={styles.placeHolder}>Find your best ever meal</Text>
        </View>
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
                <View style={styles.rememberState}>
                    <TouchableOpacity onPress={() => setStoreSession(!storeSession)} style={styles.saveLoginState}>
                        <FontAwesome5 
                                name={storeSession? 'check' : ''}
                                size={15}
                                color={COLORS.accent}
                            />
                    </TouchableOpacity>
                    <Text>Remember me</Text>
                </View>

            </View>
            <View style={styles.buttonView} >
                <TouchableOpacity style={[styles.button, styles.signin]} onPress={()=> router.replace('/(tabs)')}>
                    <Text style={styles.buttoneText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.singup]} onPress={()=> router.replace('/signup')}>
                    <Text style={styles.buttoneText}>Sign up</Text>
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
        padding: MARGIN.allRoundMarging
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
        marginVertical: 20
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
    passwordContainer: {

    }
    
})

export default Signin
