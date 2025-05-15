import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, RefreshControl, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Devider from '@/components/devider'
import { COLORS, INPUTS, MARGIN, SIZES } from '@/constants/theme'
import { RFPercentage } from 'react-native-responsive-fontsize';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { router, useFocusEffect, useRouter } from 'expo-router';
import SecuredInput from '@/components/securedInput';
import MenuItemRow from '@/components/menu_item_row';
import TabSelector from '@/components/tabselector';
import FoodCard from '@/components/foodCard';
import ErrorView from '@/components/errorview';
import api from '@/config/config';

const { width, height } = Dimensions.get('screen');
const featuredData = [
    { id: '1', title: 'Cherry Healthy', rating: 4.5, image: require('@/assets/images/cherry.png') },
    { id: '2', title: 'Burger Tamok', rating: 4.8, image: require('@/assets/images/burger.png') },
    { id: '3', title: 'Burger Tamok', rating: 4.8, image: require('@/assets/images/burger.png') },
    { id: '4', title: 'Burger Tamok', rating: 4.8, image: require('@/assets/images/burger.png') }
  ];
  

const CARD_GAP = 16;
const CARD_WIDTH = (width - CARD_GAP * 3) / 2; // spacing between 2 columns + padding

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
}
  
const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState('New Taste');
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const router = useRouter();

    const fetchProducts = useCallback(async () => {
        try {
          setError(null);
          const res = await api.get('/products');
          setProducts(res.data);
        } catch (err) {
          console.error('Failed to fetch products', err);
          setError('Failed to load products. Please try again.');
        } finally {
          setLoading(false);
          setRefreshing(false);
        }
      }, []);
    
      const handleRefresh = useCallback(() => {
        setRefreshing(true);
        fetchProducts();
      }, [fetchProducts]);
    
      useFocusEffect(
        useCallback(() => {
          fetchProducts();
        }, [fetchProducts])
      );
    
      if (loading && !refreshing) {
        return (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        );
      }
    
      if (error) {
        return <ErrorView message={error} onRetry={fetchProducts} />;
      }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.home}>CUTIN</Text>
            <Text style={styles.placeHolder}>Cut the wait, not the taste</Text>
        </View>
        <View style={styles.foodRow}>
            <FlatList
                data={featuredData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalList}
                renderItem={({ item }) => <FoodCard item={item} />}
            />
        </View>
        <View style={styles.homeContaier}>
            <TabSelector selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={ ['New Taste', 'Popular', 'Recommended']} search={true}/>
            {
                selectedTab=='New Taste' &&
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <MenuItemRow 
                          item={item}
                          onPress={() =>
                              router.replace({
                                pathname: '/product_description',
                                params: {
                                  product: JSON.stringify(item),
                                },
                              })
                            }
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    style={styles.verticalList}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[COLORS.primary]}
                        tintColor={COLORS.primary}
                      />
                    }
                />
            }
            {
                selectedTab=='Popular' &&
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <MenuItemRow 
                        item={item}
                        onPress={() =>
                            router.push({
                              pathname: '/product_description',
                              params: {
                                product: JSON.stringify(item),
                              },
                            })
                          }/>
                    )}
                    showsVerticalScrollIndicator={false}
                    style={styles.verticalList}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[COLORS.primary]}
                        tintColor={COLORS.primary}
                      />
                    }
                />
            }
            {
                selectedTab=='Recommended' &&
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <MenuItemRow 
                        item={item}
                        onPress={() =>
                            router.push({
                              pathname: '/product_description',
                              params: {
                                product: JSON.stringify(item),
                              },
                            })
                          }/>
                    )}
                    showsVerticalScrollIndicator={false}
                    style={styles.verticalList}
                    refreshControl={
                      <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                        colors={[COLORS.primary]}
                        tintColor={COLORS.primary}
                      />
                    }
                />
            }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        height: height * 0.14,
        backgroundColor: COLORS.white,
        padding: MARGIN.allRoundMarging
    },
    homeContaier: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.white,
        justifyContent: 'space-between',
        padding: MARGIN.allRoundMarging
    },
    home:{
        fontSize: RFPercentage(SIZES.xLarge),
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    placeHolder:{
        color: COLORS.secondary
    },
     
    horizontalList: { 
        marginVertical: 20
     },
    verticalList: {
         marginTop: 10 
    },
    foodRow:{
       height: height *0.35,
       backgroundColor: COLORS.grayLight
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export default HomeScreen
