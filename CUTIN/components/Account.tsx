import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Profile_button from './profile_button'
import { router } from 'expo-router'

const Account = ()=>{

    return (
      <View style={styles.container}>
        <Profile_button name={'Edit Profile'} route={()=>router.push('/edit_profile')} icon={'person'}/>
        {/* <Profile_button name={'Home Address'} route={()=>router.push('/edit_profile')}/> */}
        {/* <Profile_button name={'Security'} route={()=>router.push('/edit_profile')}/> */}
        <Profile_button name={'Wallet'} route={()=>router.push('/wallet')} icon={'account-balance-wallet'}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Account;