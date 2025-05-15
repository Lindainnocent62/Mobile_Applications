import Devider from '@/components/devider';
import Header from '@/components/header';
import { COLORS, FONTS, INPUTS, MARGIN } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const WalletScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAddCard = async () => {
    if (!cardNumber || !expiry || !cvv || !cardName) {
      Alert.alert('Error', 'Please fill all card details');
      return;
    }

    setIsProcessing(true);
    
    try {
      // Intergrate payment processor
      // For example with Stripe:
      // const token = await yoco.createTokenWithCard({
      //   number: cardNumber,
      //   expMonth: expiry.split('/')[0],
      //   expYear: expiry.split('/')[1],
      //   cvc: cvv,
      //   name: cardName
      // });
      // Test in sandbox mode before goint live
      
      // Then send this token to your backend to associate with the user
      // await api.post('/user/payment-method', { token: token.id });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      Alert.alert('Success', 'Card added successfully');
      router.back();
    } catch (error) {
      Alert.alert('Error', 'Failed to add card. Please try again.');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (text:any) => {
    // Basic card number formatting
    const cleaned = text.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };

  const formatExpiry = (text:any) => {
    // Basic expiry date formatting
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 3) {
      const formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
      setExpiry(formatted);
    } else {
      setExpiry(cleaned);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
    >
      <Header 
        back={true} 
        route={() => router.back()} 
        label={'Payment Methods'} 
        description={'Add your payment card'}
      />
      <Devider /> 
      
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Add New Card</Text>
        
        <View style={styles.cardContainer}>
          <MaterialIcons name="credit-card" size={24} color={COLORS.accent} style={styles.cardIcon} />
          <Text style={styles.cardText}>Card will be securely stored with our payment partner</Text>
        </View>
        
        <Text style={styles.label}>Cardholder Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name on card"
          placeholderTextColor={COLORS.secondary}
          value={cardName}
          onChangeText={setCardName}
          autoCapitalize="words"
        />
        
        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          placeholderTextColor={COLORS.secondary}
          value={cardNumber}
          onChangeText={formatCardNumber}
          keyboardType="numeric"
          maxLength={19}
        />
        
        <View style={styles.row}>
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>Expiry Date</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              placeholderTextColor={COLORS.secondary}
              value={expiry}
              onChangeText={formatExpiry}
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
          
          <View style={styles.halfInputContainer}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="123"
              placeholderTextColor={COLORS.secondary}
              value={cvv}
              onChangeText={(text) => setCvv(text.replace(/\D/g, ''))}
              keyboardType="numeric"
              maxLength={4}
              secureTextEntry={true}
            />
          </View>
        </View>
        
        <TouchableOpacity 
          style={[styles.button, isProcessing ? styles.buttonDisabled : null]}
          onPress={handleAddCard}
          disabled={isProcessing}
        >
          <Text style={styles.buttonText}>
            {isProcessing ? 'Processing...' : 'Add Payment Method'}
          </Text>
        </TouchableOpacity>
        
        <Text style={styles.securityNote}>
          <MaterialIcons name="security" size={16} color={COLORS.accent} />
          {' '}Your card details are encrypted and securely processed
        </Text>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: MARGIN.allRoundMarging,
    paddingBottom: 40,
    backgroundColor:COLORS.white
  },
  sectionTitle: {
    fontSize: FONTS.small + 2,
    fontFamily: FONTS.bold,
    color: COLORS.primary,
    marginBottom: MARGIN.bottom,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.grayLight,
    padding: 15,
    borderRadius: INPUTS.radius,
    marginBottom: MARGIN.bottom,
  },
  cardIcon: {
    marginRight: 10,
  },
  cardText: {
    fontSize: RFPercentage(1.5),
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
  label: {
    fontSize: FONTS.small,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.grayLight,
    padding: 15,
    borderRadius: INPUTS.radius,
    borderWidth: INPUTS.borderWidth,
    borderColor: COLORS.grayLight,
    marginBottom: MARGIN.bottom,
    fontSize: FONTS.small,
    color: COLORS.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInputContainer: {
    width: '48%',
  },
  button: {
    backgroundColor: COLORS.accent,
    padding: 15,
    borderRadius: INPUTS.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.small,
    fontFamily: FONTS.bold,
  },
  securityNote: {
    fontSize: FONTS.small - 2,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    marginTop: 20,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WalletScreen;