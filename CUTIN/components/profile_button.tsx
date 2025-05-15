import { COLORS, MARGIN } from '@/constants/theme'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { height, width } = Dimensions.get('screen');
const Profile_button = (props:any)=>{
    return (
      <TouchableOpacity style={styles.contianer} onPress={props.route}>
        <View style={styles.profile_container}>
            <MaterialIcons name={props.icon} size={24} color={COLORS.accent} />
            <Text style={styles.label}>{props.name}</Text>
        </View>
        <FontAwesome5 
            name="chevron-right"
            size={15}
            color={'grey'}
        />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contianer:{
        height: height * 0.075,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: MARGIN.marginLeft_minor,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primary,
    },
    label:{
        color: COLORS.primary,
        paddingLeft: '8%',
    },
    profile_container:{
        flexDirection:'row',
        width: width * 0.5,
        alignItems: 'center',
    }
})
export default Profile_button;

