import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface ProductCardProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    rating?: number;
  };
  onPress: () => void;
}
const MenuItemRow : React.FC<ProductCardProps> = ({ item, onPress }: ProductCardProps) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
    <View style={styles.rating}>
      <FontAwesome name="star" size={14} color="#f1c40f" />
      <Text style={styles.ratingText}>{item.rating}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row',
     alignItems: 'center', 
     marginBottom: 16
     },
  image: {
     width: 60, 
     height: 60, 
     borderRadius: 8 
    },
  details: { 
    flex: 1, 
    marginLeft: 12
 },
  title: {
     fontWeight: 'bold',
      fontSize: 16
     },
  price: { 
    color: 'gray',
     marginTop: 4 
    },
  rating: { 
    flexDirection: 'row', 
    alignItems: 'center'
 },
  ratingText: {
     marginLeft: 4 
    }
});

export default MenuItemRow;
