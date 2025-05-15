import React, { useState } from 'react';
import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native';
import DeliveryToggle from './delivery_toggle';

const { height, width } = Dimensions.get('screen')
interface OrderDeliveryProps {
  deliveryType: 'Delivery' | 'Pick Up';
  name: string;
  phoneNo: string;
  address?: string;
  houseNo?: string;
  city: string;
  zip?: string;
}

const OrderDelivery = (props: OrderDeliveryProps) => {
  const isPickup = props.deliveryType === 'Pick Up';
  const [ saveDetails, setSaveDetails] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.deliveryTypeContainer}>
        <Text style={styles.deliveryTypeLabel}>Delivery Type:</Text>
        <DeliveryToggle />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailsRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{props.name}</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Phone No:</Text>
          <Text style={styles.value}>{props.phoneNo}</Text>
        </View>

        {!isPickup && props.houseNo && (
          <View style={styles.detailsRow}>
            <Text style={styles.label}>House No:</Text>
            <Text style={styles.value}>{props.houseNo}</Text>
          </View>
        )}

        {!isPickup && props.address && (
          <View style={styles.detailsRow}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{props.address}</Text>
          </View>
        )}

        <View style={styles.detailsRow}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{props.city}</Text>
        </View>

        {props.zip && (
          <View style={styles.detailsRow}>
            <Text style={styles.label}>Zip:</Text>
            <Text style={styles.value}>{props.zip}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    //borderWidth: 1,
    //borderColor: '#e0e0e0',
    padding: 16,
    backgroundColor: '#fff',
  },
  deliveryTypeContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    marginBottom: 12,
  },
  deliveryTypeLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsContainer: {
    gap: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },
  toggleLabel: {
    fontSize: 16,
  },
});

export default OrderDelivery;