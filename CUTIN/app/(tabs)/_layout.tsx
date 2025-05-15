import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const {width, height} = Dimensions.get('screen');

export default function TabLayout() {
  const totalQuantity = useSelector(
    (state: RootState) => state.items
  ).length; 
  return (
    <Tabs
        screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, 
        tabBarShowLabel: false,  
        tabBarStyle: {
            height: "8%",           
            paddingHorizontal: 15,    
          },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>            
                <Ionicons name={focused? "home": "home-outline"} size={24} color={focused? '#0B1320' : '#748c94' } />
                <Text
                style={{
                  color: focused ? '#0B1320' : '#748c94',
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color , focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              {totalQuantity > 0 && (
                <View style={[styles.cartBadge, { top: -10, right: 3}]}>
                  <Text style={styles.cartBadgeText}>
                    {totalQuantity > 9 ? '9+' : totalQuantity}
                  </Text>
                </View>
              )}
              
              <Ionicons 
                name={focused ? 'cart' : 'cart-outline'} 
                size={24} 
                color={focused ? '#0B1320' : '#748c94'} 
              />
              
              <Text
                style={{
                  color: focused ? '#0B1320' : '#748c94',
                  fontSize: 12,
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name={focused? "file-invoice" : "receipt"} 
                            color={focused? '#0B1320' : '#748c94' }
                            size={24} />
              <Text
                style={{
                  color: focused ? '#0B1320' : '#748c94',
                  fontSize: 12,
                }}
              >
                Activity
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <View style={styles.iconContainer}>
              <FontAwesome5 name={focused? "user-alt" : "user"} 
                            color={focused? '#0B1320' : '#748c94' }
                            size={24} />
              <Text
                style={{
                  color: focused ? '#0B1320' : '#748c94',
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
    tabBarStyle: {
      position: 'absolute',
      elevation: 0,
      borderRadius: 10,
      height: '10%',
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
    },
    iconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      top: 5,
      width: width * 0.15
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.7,
      shadowRadius: 0.9,
    },
    innerButton:{
        alignItems:'center',
        justifyContent:'center',
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'#0B1320',
        marginBottom:30,
    },
    cartBadge: {
      position: 'absolute',
      backgroundColor: '#FF0000',
      borderRadius: 10,
      width: 18,
      height: 18,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    cartBadgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
  