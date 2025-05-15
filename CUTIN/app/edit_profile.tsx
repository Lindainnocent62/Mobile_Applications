import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Header from '@/components/header';
import Devider from '@/components/devider';
import Profile_button from '@/components/profile_button';
import { COLORS, FONTS, MARGIN } from '@/constants/theme'; 

export default class Edit_profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header 
          back={true} 
          route={() => router.replace('/(tabs)/profile')} 
          label={'Edit Profile'} 
          description={''}
        />
        <Devider />
        
        <View style={styles.content}>
          <Profile_button 
            name="Update name" 
            route={() => router.push('/edit_name')} 
            style={styles.button}
            icon={'drive-file-rename-outline'}
          />
          
          <Profile_button 
            name="Update email" 
            route={() => router.push('/edit_email')} 
            style={styles.button}
            icon={'mail'}
          />
          
          <Profile_button 
            name="Add Home Address" 
            route={() => router.push('/add_home_address')} 
            style={styles.button}
            icon={'location-on'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: MARGIN.allRoundMarging,
  },
  button: {
    marginBottom: MARGIN.bottom,
  },
  sectionTitle: {
    fontSize: FONTS.small + 2,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
    marginBottom: 15,
    paddingHorizontal: MARGIN.allRoundMarging,
  },
});