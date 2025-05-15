import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';

const { height, width } = Dimensions.get('screen')

const DeliveryToggle = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.toggle, isDelivery && styles.deliveryActive]}
        onPress={() => setIsDelivery(true)}
        activeOpacity={0.8}
      >
        <MaterialIcons 
          name="local-shipping" 
          size={20} 
          color={isDelivery ? '#fff' : '#0066cc'} 
        />
        <Text style={[styles.text, isDelivery && styles.activeText]}>
          Delivery
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.toggle, !isDelivery && styles.pickupActive]}
        onPress={() => setIsDelivery(false)}
        activeOpacity={0.8}
      >
        <MaterialIcons 
          name="store" 
          size={20} 
          color={!isDelivery ? '#fff' : '#888'} 
        />
        <Text style={[styles.text, !isDelivery && styles.activeText]}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //WIDTH AND HEIGHT
    flexDirection: 'row',
    backgroundColor: COLORS.grayLight,
    borderRadius: 25,
    padding: 3,
    marginVertical: 15,
  },
  toggle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 22,
    marginHorizontal: 2,
  },
  deliveryActive: {
    backgroundColor: COLORS.primary,
  },
  pickupActive: {
    backgroundColor: COLORS.primary,
  },
  text: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: '500',
    color: '#555',
  },
  activeText: {
    color: '#fff',
  },
});

export default DeliveryToggle;