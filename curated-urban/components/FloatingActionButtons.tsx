import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FloatingActionButtonsProps {
  onSearchPress?: () => void;
  onAddPress?: () => void;
}

export default function FloatingActionButtons({ onSearchPress, onAddPress }: FloatingActionButtonsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fab} onPress={onSearchPress}>
        <Ionicons name="search" size={24} color="#E2E2E2" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.fab} onPress={onAddPress}>
        <Ionicons name="add" size={24} color="#E2E2E2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 16,
    gap: 12,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#00FF05",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
