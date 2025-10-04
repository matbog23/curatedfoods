import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface RestaurantCardProps {
  name: string;
  details: string;
  onPress?: () => void;
}

export default function RestaurantCard({ name, details, onPress }: RestaurantCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imagePlaceholder} />
      <View style={styles.overlay}>
        <Text style={styles.restaurantName}>{name}</Text>
        <Text style={styles.restaurantDetails}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    position: "relative",
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: "#333333",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 16,
  },
  restaurantName: {
    color: "#E2E2E2",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  restaurantDetails: {
    color: "#E2E2E2",
    fontSize: 14,
    opacity: 0.8,
  },
});
