import React from 'react';
import { Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen')

const FoodCard = ({ item }:any) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <View style={styles.rating}>
      <FontAwesome name="star" size={14} color="#f1c40f" />
      <Text style={styles.ratingText}>{item.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: { 
    width: width * 0.45 , 
    marginRight: 15,
     borderRadius: 12, 
     backgroundColor: '#fff', 
     elevation: 3,
      padding: 10
     },
  image: { 
    width: '100%', 
    height: 100,
     borderRadius: 8 
    },
  title: {
     marginTop: 8, 
     fontWeight: 'bold',
      fontSize: 14
     },
  rating: { 
    flexDirection: 'row',
     alignItems: 'center', 
     marginTop: 4 },
  ratingText: { 
    marginLeft: 4 
    }
});

export default FoodCard;
