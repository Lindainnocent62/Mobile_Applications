import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  Modal,
  ActivityIndicator,
  Alert
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import Header from '@/components/header';
import Devider from '@/components/devider';
import { router } from 'expo-router';
import { COLORS, FONTS, INPUTS, MARGIN } from '@/constants/theme';

const AddHomeAddress = () => {
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostal] = useState('');
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAddressSelect = (data: any, details: any) => {
    if (!details) return;
    
    const addressComponents = details.address_components || [];
    
    // Extract address components
    const getComponent = (type: string) => 
      addressComponents.find((comp: any) => comp.types.includes(type))?.long_name || '';
    
    setStreet(getComponent('route'));
    setSuburb(getComponent('sublocality') || getComponent('neighborhood'));
    setCity(getComponent('locality'));
    setProvince(getComponent('administrative_area_level_1'));
    setCountry(getComponent('country'));
    setPostal(getComponent('postal_code'));
    
    setIsAddressModalVisible(false);
  };

  const handleUpdate = async () => {
    if (!street || !city || !postal) {
      Alert.alert('Error', 'Please fill in all required address fields');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert('Success', 'Address updated successfully');
      router.back();
    } catch (error) {
      Alert.alert('Error', 'Failed to update address');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch(field) {
      case 'street': setStreet(value); break;
      case 'suburb': setSuburb(value); break;
      case 'city': setCity(value); break;
      case 'province': setProvince(value); break;
      case 'country': setCountry(value); break;
      case 'postal': setPostal(value); break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <Header 
          back={true} 
          route={() => router.back()} 
          label={'Home Address'} 
          description={'Update your address to the recent home'}
        />
        <Devider />
        
        <View style={styles.contentWrapper}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => setIsAddressModalVisible(true)}
            >
              <Ionicons name="search" size={20} color={COLORS.primary} />
              <Text style={styles.searchButtonText}>Search Address</Text>
            </TouchableOpacity>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Street Name</Text>
              <TextInput
                placeholder="Enter Street"
                style={styles.input}
                value={street}
                onChangeText={(text) => handleInputChange('street', text)}
                placeholderTextColor={COLORS.secondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Suburb</Text>
              <TextInput
                placeholder="Enter suburb"
                style={styles.input}
                value={suburb}
                onChangeText={(text) => handleInputChange('suburb', text)}
                placeholderTextColor={COLORS.secondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>City</Text>
              <TextInput
                placeholder="Enter city"
                style={styles.input}
                value={city}
                onChangeText={(text) => handleInputChange('city', text)}
                placeholderTextColor={COLORS.secondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Province/State</Text>
              <TextInput
                placeholder="Enter province"
                style={styles.input}
                value={province}
                onChangeText={(text) => handleInputChange('province', text)}
                placeholderTextColor={COLORS.secondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Country</Text>
              <TextInput
                placeholder="Enter country"
                style={styles.input}
                value={country}
                onChangeText={(text) => handleInputChange('country', text)}
                placeholderTextColor={COLORS.secondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Postal Code</Text>
              <TextInput
                placeholder="Enter postal code"
                style={styles.input}
                value={postal}
                onChangeText={(text) => handleInputChange('postal', text)}
                placeholderTextColor={COLORS.secondary}
                keyboardType="numeric"
              />
            </View>
          </ScrollView>
          
          <View style={styles.buttonWrapper}>
            <TouchableOpacity 
              style={[styles.button, loading && styles.buttonDisabled]}
              onPress={handleUpdate}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.white} />
              ) : (
                <Text style={styles.buttonText}>Update Address</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={isAddressModalVisible}
          animationType="slide"
          onRequestClose={() => setIsAddressModalVisible(false)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Search Address</Text>
              <TouchableOpacity 
                onPress={() => setIsAddressModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color={COLORS.primary} />
              </TouchableOpacity>
            </View>
            
            <GooglePlacesAutocomplete
              placeholder="Search address..."
              onPress={handleAddressSelect}
              query={{
                key: 'YOUR_GOOGLE_API_KEY', // Replace with your actual API key
                language: 'en',
                components: 'country:za', // Optional: restrict to specific country
              }}
              fetchDetails={true}
              enablePoweredByContainer={false}
              debounce={300}
              minLength={2}
              styles={googlePlacesStyles}
              renderRow={(data) => (
                <View style={styles.searchResultItem}>
                  <Ionicons 
                    name="location-sharp" 
                    size={20} 
                    color={COLORS.accent} 
                    style={styles.searchResultIcon}
                  />
                  <View>
                    <Text style={styles.searchResultTitle}>
                      {data.structured_formatting.main_text}
                    </Text>
                    <Text style={styles.searchResultSubtitle}>
                      {data.structured_formatting.secondary_text}
                    </Text>
                  </View>
                </View>
              )}
            />
          </SafeAreaView>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Custom styles for Google Places Autocomplete
const googlePlacesStyles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  textInputContainer: {
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    color: COLORS.primary,
    fontSize: 16,
    backgroundColor: COLORS.grayLight,
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  predefinedPlacesDescription: {
    color: COLORS.primary,
  },
  listView: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 10,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentWrapper: {
    flex: 1,
    paddingBottom: 80, // Space for button
  },
  scrollContent: {
    padding: MARGIN.allRoundMarging,
    paddingBottom: 20,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: MARGIN.allRoundMarging,
    right: MARGIN.allRoundMarging,
  },
  button: {
    backgroundColor: COLORS.accent,
    padding: 16,
    borderRadius: INPUTS.radius,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONTS.small,
    //fontFamily: FONTS.bold,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    marginBottom: MARGIN.bottom,
  },
  searchButtonText: {
    fontSize: FONTS.small,
    marginLeft: 10,
    color: COLORS.primary,
    //fontFamily: FONTS.regular,
  },
  label: {
    fontSize: FONTS.small,
    //fontFamily: FONTS.regular,
    color: COLORS.primary,
    marginBottom: 8,
  },
  inputGroup: {
    marginBottom: MARGIN.bottom,
  },
  input: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: INPUTS.radius,
    borderWidth: INPUTS.borderWidth,
    borderColor: COLORS.grayLight,
    fontSize: FONTS.small,
    color: COLORS.primary,
   // fontFamily: FONTS.regular,
  },
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
  modalTitle: {
    fontSize: FONTS.medium,
   // fontFamily: FONTS.bold,
    color: COLORS.primary,
  },
  closeButton: {
    padding: 8,
  },
  // Search result styles
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayLight,
  },
  searchResultIcon: {
    marginRight: 12,
  },
  searchResultTitle: {
    fontSize: FONTS.small,
    // fontFamily: FONTS.medium,
    color: COLORS.primary,
  },
  searchResultSubtitle: {
    fontSize: FONTS.small - 2,
   // fontFamily: FONTS.regular,
    color: COLORS.secondary,
    marginTop: 2,
  },
});

export default AddHomeAddress;