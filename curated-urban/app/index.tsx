import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import TagsSection from "../components/TagsSection";
import RestaurantList from "../components/RestaurantList";
import FloatingActionButtons from "../components/FloatingActionButtons";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  // Sample data - in a real app, this would come from state management or API
  const tags = [
    { id: "dinner", label: "Dinner", isActive: true },
    { id: "lunch", label: "Lunch", isActive: false },
    { id: "breakfast", label: "Breakfast", isActive: false },
    { id: "bar", label: "Bar", isActive: false },
  ];

  const restaurants = [
    { id: "1", name: "Restaurant Name", details: "Category, Type - Rating" },
    { id: "2", name: "Restaurant Name", details: "Category, Type - Rating" },
    { id: "3", name: "Restaurant Name", details: "Category, Type - Rating" },
    { id: "4", name: "Restaurant Name", details: "Category, Type - Rating" },
    { id: "5", name: "Restaurant Name", details: "Category, Type - Rating" },
  ];

  const handleTagPress = (tagId: string) => {
    console.log("Tag pressed:", tagId);
    // TODO: Implement tag filtering logic
  };

  const handleRestaurantPress = (restaurantId: string) => {
    console.log("Restaurant pressed:", restaurantId);
    // TODO: Navigate to restaurant details
  };

  const handleSearchPress = () => {
    console.log("Search pressed");
    // TODO: Navigate to search screen
  };

  const handleAddPress = () => {
    console.log("Add pressed");
    router.push("/add-review");
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TagsSection tags={tags} onTagPress={handleTagPress} />
      <RestaurantList restaurants={restaurants} onRestaurantPress={handleRestaurantPress} />
      <FloatingActionButtons onSearchPress={handleSearchPress} onAddPress={handleAddPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
