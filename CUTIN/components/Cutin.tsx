import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Profile_button from './profile_button'

const Cutin = ()=>{

    return (
      <View style={styles.container}>
        {/* <Profile_button name={'Submit Feedback'} route={()=>router.push('/edit_profile')}/> */}
        <Profile_button name={'Help Center'} route={()=>router.push('/help_center')} icon={'support-agent'}/>
        <Profile_button name={'Privacy & Policy'} route={()=>router.push('/privacy_policy')} icon={'privacy-tip'}/> 
        <Profile_button name={'Terms & Condition'} route={()=>router.push('/t\'s_and_c\'s')} icon={'description'}/>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})
export default Cutin;