import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import RestaurantCard from "./RestaurantCard";

interface Restaurant {
  id: string;
  name: string;
  details: string;
}

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantPress?: (restaurantId: string) => void;
}

export default function RestaurantList({ restaurants, onRestaurantPress }: RestaurantListProps) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          details={restaurant.details}
          onPress={() => onRestaurantPress?.(restaurant.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
