import { COLORS } from '@/constants/theme';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('screen')
const TabSelector = ({ selectedTab, setSelectedTab, tabs, search }:any) => (
  <>
    <View style={styles.tabContainer}>
      {tabs.map((tab:any) => (
        <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
          <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>{tab}</Text>
        </TouchableOpacity>
      ))}
      
    {search && <TouchableOpacity>
      <FontAwesome5 
        name={'search'}
        size={20}
        />
    </TouchableOpacity>}
    </View>
  </>
);

const styles = StyleSheet.create({
  tabContainer: { 
     flexDirection: 'row',
     marginVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.background,
    paddingBottom: 15
    },
  tab: { 
      marginRight: 20,
      fontSize: 16,
      color: 'gray' 
    },
  activeTab: {
     color: 'black',
      fontWeight: 'bold', 
     },
     selector:{
      height: 5,
      backgroundColor: COLORS.grayLight,
      width: width * 10
     }
});

export default TabSelector;
