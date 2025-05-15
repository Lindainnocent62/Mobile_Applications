import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import { FontAwesome5 } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const Header = ({back, route, label, description}: any) => {
  return (
    <View style={styles.header}>
        { back &&
          <TouchableOpacity onPress={route}>
            <FontAwesome5
              name={'chevron-left'}
              size={30}
              color={COLORS.primary}
            />
           
          </TouchableOpacity> 
        }
        <View style={styles.signupContainer}>
            <Text style={styles.signIn}>{label}</Text>
            <Text style={styles.placeHolder}>{description}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
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
        fontSize: RFPercentage(SIZES.large),
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
      paddingLeft: 25
    }
    
})
export default Header
