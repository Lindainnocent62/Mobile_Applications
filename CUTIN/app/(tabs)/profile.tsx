import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Devider from '@/components/devider'
import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router } from 'expo-router';
import SecuredInput from '@/components/securedInput';
import TabSelector from '@/components/tabselector';
import Account from '@/components/Account';
import Cutin from '@/components/Cutin';

const { width, height } = Dimensions.get('screen');

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('Account');
  
  return (
    <SafeAreaView style={styles.container}>
        {
            selectedTab ==='Account' &&
            (
                <View style={styles.header}>
                    <Text style={styles.home}>Jane Doe</Text>
                    <Text style={styles.placeHolder}>persona@gmail.com</Text>
                </View>
            )
        }
        {
            selectedTab ==='Cutin' &&
            (
                <View style={styles.header}>
                    <Text style={styles.home}>Cutin</Text>
                    <Text style={styles.placeHolder}>info@cutin.tech</Text>
                </View>
            )
        }
        <Devider />
        <View style={styles.homeContaier}>
        <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={ ['Account', 'Cutin']} search={false}/>
        {
            selectedTab === 'Account' &&
            <Account />
        }
        {
            selectedTab === 'Cutin' &&
            <Cutin />
        }

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
    homeContaier: {
        flex: 0.85,
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
        padding: MARGIN.allRoundMarging
    },
    home:{
        fontSize: RFPercentage(SIZES.xLarge),
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    placeHolder:{
        color: COLORS.secondary
    }, 
    button:{
        height: 40,
        width:50,
        backgroundColor: COLORS.black,
    }   
})

export default Profile
