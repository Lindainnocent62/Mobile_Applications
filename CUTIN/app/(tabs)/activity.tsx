import React, { useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Devider from '@/components/devider'
import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router } from 'expo-router';
import SecuredInput from '@/components/securedInput';
import TabSelector from '@/components/tabselector';

const { width, height } = Dimensions.get('screen');

const Activity = () => {
    const [selectedTab, setSelectedTab] = useState('In Progress');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.home}>Your Orders</Text>
            <Text style={styles.placeHolder}>Wait fot he best meal</Text>
        </View>
        <Devider />
        <View style={styles.homeContaier}>
        <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={ ['In Progress', 'Past Orders']} search={false}/>
            {
                selectedTab ==='In Progress'

            }
            {
                selectedTab ==='Past Orders'
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
})

export default Activity
