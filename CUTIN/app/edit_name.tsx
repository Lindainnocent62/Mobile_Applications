import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Header from '@/components/header';
import { COLORS, FONTS, MARGIN, INPUTS } from '@/constants/theme';
import Devider from '@/components/devider';

const EditName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUpdate = () => {
    // Here you would typically handle the update logic
    console.log('Updating name:', { firstName, lastName });
    // After update, navigate back
    router.back();
  };

  return (
    <View style={styles.container}>
      <Header 
        back={true} 
        route={() => router.back()} 
        label={'Edit Name'} 
        description={''}
      />
      <Devider />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter your first name"
            placeholderTextColor={COLORS.secondary}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
            placeholderTextColor={COLORS.secondary}
          />
        </View>

        <TouchableOpacity 
          style={[styles.updateButton, (!firstName || !lastName) && styles.disabledButton]}
          onPress={handleUpdate}
          disabled={!firstName || !lastName}
        >
          <Text style={styles.buttonText}>Update Name</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: MARGIN.allRoundMarging,
  },
  inputContainer: {
    marginBottom: MARGIN.bottom,
  },
  label: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: INPUTS.borderWidth,
    borderColor: COLORS.grayLight,
    borderRadius: INPUTS.radius,
    padding: 15,
    fontSize: FONTS.small,
    color: COLORS.primary,
  },
  updateButton: {
    backgroundColor: COLORS.accent,
    borderRadius: INPUTS.radius,
    padding: 15,
    alignItems: 'center',
    marginTop: MARGIN.bottom * 2,
  },
  disabledButton: {
    backgroundColor: COLORS.secondary,
    opacity: 0.7,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.small,
    fontFamily: FONTS.bold,
  },
});

export default EditName;