import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import Header from '@/components/header';
import Devider from '@/components/devider';
import { COLORS, FONTS, MARGIN, INPUTS } from '@/constants/theme';

const EditEmail = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = () => {
    // Basic email validation
    if (!email) {
      setError('Email is required');
      return;
    }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Here you would typically call an API to update the email
    console.log('Updating email to:', email);
    
    // Reset error and navigate back
    setError('');
    router.back();
  };

  return (
    <View style={styles.container}>
      <Header 
        back={true} 
        route={() => router.back()} 
        label={'Edit Email'} 
        description={''}
      />
      <Devider />
      
      <View style={styles.content}>
        <Text style={styles.label}>New Email Address</Text>
        
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Enter your new email"
          placeholderTextColor={COLORS.secondary}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (error) setError('');
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity 
          style={[styles.button, !email ? styles.buttonDisabled : null]}
          onPress={handleUpdate}
          disabled={!email}
        >
          <Text style={styles.buttonText}>Update Email</Text>
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
  label: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    marginBottom: 10,
  },
  input: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: INPUTS.radius,
    borderWidth: INPUTS.borderWidth,
    borderColor: COLORS.grayLight,
    marginBottom: MARGIN.bottom,
    fontSize: FONTS.small,
    color: COLORS.primary,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONTS.small - 2,
    marginBottom: MARGIN.bottom,
    marginLeft: MARGIN.marginLeft_minor,
  },
  button: {
    backgroundColor: COLORS.accent,
    padding: 15,
    borderRadius: INPUTS.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLORS.secondary,
    opacity: 0.6,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.small,
    fontFamily: FONTS.bold,
  },
});

export default EditEmail;