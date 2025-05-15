import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface OrderItem {
  name: string;
  price: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
  totalAmount: string;
  deliveryFee?: string;
}

const OrderSummary = ({ items, totalAmount, deliveryFee }: OrderSummaryProps) => {
  return (
    <View style={styles.container}>
      {/* Items Ordered Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Item Ordered</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </View>

      {/* Transaction Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Details Transaction</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Total Amount</Text>
          <View style={styles.detailValueContainer}>
            <Text style={styles.detailValue}>{items.length} item{items.length !== 1 ? 's' : ''}</Text>
            <Text style={styles.detailValue}>{totalAmount}</Text>
          </View>
        </View>

        {deliveryFee && (
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Delivery Fee</Text>
            <View style={styles.detailValueContainer}>
              <Text style={styles.detailValue}>{deliveryFee}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.85,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValueContainer: {
    alignItems: 'flex-end',
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});

export default OrderSummary;