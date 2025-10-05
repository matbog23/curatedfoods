import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Image 
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AddReviewScreen() {
  const insets = useSafeAreaInsets();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [pricing, setPricing] = useState<string>("");

  // Tags from the main screen
  const tags = [
    { id: "dinner", label: "Dinner" },
    { id: "lunch", label: "Lunch" },
    { id: "breakfast", label: "Breakfast" },
    { id: "bar", label: "Bar" },
  ];

  const pricingOptions = [
    { id: "$", label: "$" },
    { id: "$$", label: "$$" },
    { id: "$$$", label: "$$$" },
    { id: "$$$$", label: "$$$$" },
  ];

  const handleTagPress = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleRatingPress = (score: number) => {
    setRating(score);
  };

  const handlePricingPress = (price: string) => {
    setPricing(price);
  };

  const handleAddressPress = () => {
    // TODO: Open navigation in Waze or Google Maps
    console.log("Open navigation");
  };

  const handleSubmit = () => {
    // TODO: Submit review data
    console.log("Submit review");
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Image Upload Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Restaurant Photo</Text>
          <TouchableOpacity 
            style={styles.imageUpload}
            accessibilityLabel="Add restaurant photo"
            accessibilityRole="button"
            accessibilityHint="Tap to select a photo from your device"
          >
            <View style={styles.imagePlaceholder}>
              <Ionicons name="camera" size={32} color="#E2E2E2" />
              <Text style={styles.imageUploadText}>Tap to add photo</Text>
            </View>
          </TouchableOpacity>
        </View>

         {/* Restaurant Name */}
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>
             Restaurant Name <Text style={styles.required}>*</Text>
           </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter restaurant name"
            placeholderTextColor="#666666"
            accessibilityLabel="Restaurant name"
            accessibilityRole="none"
            accessibilityHint="Required field. Enter the name of the restaurant"
          />
        </View>

        {/* Tags Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tags</Text>
          <View style={styles.tagsContainer}>
            {tags.map((tag) => (
              <TouchableOpacity
                key={tag.id}
                style={[
                  styles.tag,
                  selectedTags.includes(tag.id) && styles.tagActive
                ]}
                onPress={() => handleTagPress(tag.id)}
                accessibilityLabel={`${tag.label} tag`}
                accessibilityRole="button"
                accessibilityState={{ selected: selectedTags.includes(tag.id) }}
                accessibilityHint={`Tap to ${selectedTags.includes(tag.id) ? 'remove' : 'add'} ${tag.label.toLowerCase()} tag`}
              >
                <Text style={[
                  styles.tagText,
                  selectedTags.includes(tag.id) && styles.tagTextActive
                ]}>
                  {tag.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

         {/* Rating */}
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>
             Rating <Text style={styles.required}>*</Text>
           </Text>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((score) => (
              <TouchableOpacity
                key={score}
                style={styles.starButton}
                onPress={() => handleRatingPress(score)}
                accessibilityLabel={`Rate ${score} star${score !== 1 ? 's' : ''}`}
                accessibilityRole="button"
                accessibilityHint={`Set rating to ${score} out of 5 stars`}
              >
                <Ionicons
                  name={score <= rating ? "star" : "star-outline"}
                  size={32}
                  color={score <= rating ? "#00FF05" : "#E2E2E2"}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Pricing */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pricing</Text>
          <View style={styles.pricingContainer}>
            {pricingOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.pricingOption,
                  pricing === option.id && styles.pricingOptionActive
                ]}
                onPress={() => handlePricingPress(option.id)}
                accessibilityLabel={`${option.label} pricing`}
                accessibilityRole="button"
                accessibilityState={{ selected: pricing === option.id }}
                accessibilityHint={`Select ${option.label} as pricing level`}
              >
                <Text style={[
                  styles.pricingText,
                  pricing === option.id && styles.pricingTextActive
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

         {/* Review Text */}
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>
             Review <Text style={styles.required}>*</Text>
           </Text>
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Share your experience..."
            placeholderTextColor="#666666"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            accessibilityLabel="Review text"
            accessibilityRole="none"
            accessibilityHint="Required field. Share your dining experience and thoughts about the restaurant"
          />
        </View>

         {/* Address */}
         <View style={styles.section}>
           <Text style={styles.sectionTitle}>
             Address <Text style={styles.required}>*</Text>
           </Text>
          <View style={styles.addressContainer}>
            <TextInput
              style={[styles.textInput, styles.addressInput]}
              placeholder="Enter restaurant address"
              placeholderTextColor="#666666"
              accessibilityLabel="Restaurant address"
              accessibilityRole="none"
              accessibilityHint="Required field. Enter the full address of the restaurant"
            />
            <TouchableOpacity 
              style={styles.navigationButton}
              onPress={handleAddressPress}
              accessibilityLabel="Open navigation"
              accessibilityRole="button"
              accessibilityHint="Open navigation app to get directions to this address"
            >
              <Ionicons name="navigate" size={20} color="#E2E2E2" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Social Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Social Links</Text>
          
          <View style={styles.socialLinkContainer}>
            <Ionicons name="globe-outline" size={20} color="#E2E2E2" style={styles.socialIcon} />
            <TextInput
              style={styles.socialInput}
              placeholder="Website URL"
              placeholderTextColor="#666666"
              keyboardType="url"
              accessibilityLabel="Website URL"
              accessibilityRole="none"
              accessibilityHint="Optional. Enter the restaurant's website URL"
            />
          </View>

          <View style={styles.socialLinkContainer}>
            <Ionicons name="logo-instagram" size={20} color="#E2E2E2" style={styles.socialIcon} />
            <TextInput
              style={styles.socialInput}
              placeholder="Instagram handle"
              placeholderTextColor="#666666"
              accessibilityLabel="Instagram handle"
              accessibilityRole="none"
              accessibilityHint="Optional. Enter the restaurant's Instagram handle"
            />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtonsSection}>
          <TouchableOpacity 
            style={styles.cancelButton} 
            onPress={handleBackPress}
            accessibilityLabel="Cancel"
            accessibilityRole="button"
            accessibilityHint="Cancel adding review and return to previous screen"
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={handleSubmit}
            accessibilityLabel="Submit review"
            accessibilityRole="button"
            accessibilityHint="Submit your restaurant review"
          >
            <Text style={styles.submitButtonText}>Submit Review</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom spacing for floating buttons */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#E2E2E2",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  required: {
    color: "#00FF05",
  },
  imageUpload: {
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    overflow: "hidden",
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  imageUploadText: {
    color: "#E2E2E2",
    fontSize: 14,
    marginTop: 8,
  },
  textInput: {
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#E2E2E2",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333333",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tag: {
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#333333",
  },
  tagActive: {
    backgroundColor: "#00FF05",
    borderColor: "#00FF05",
  },
  tagText: {
    color: "#E2E2E2",
    fontSize: 14,
    fontWeight: "500",
  },
  tagTextActive: {
    color: "#1B1B1B",
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 8,
  },
  starButton: {
    padding: 4,
  },
  pricingContainer: {
    flexDirection: "row",
    gap: 12,
  },
  pricingOption: {
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333333",
    minWidth: 60,
    alignItems: "center",
  },
  pricingOptionActive: {
    backgroundColor: "#00FF05",
    borderColor: "#00FF05",
  },
  pricingText: {
    color: "#E2E2E2",
    fontSize: 16,
    fontWeight: "600",
  },
  pricingTextActive: {
    color: "#1B1B1B",
  },
  addressContainer: {
    flexDirection: "row",
    gap: 12,
  },
  addressInput: {
    flex: 1,
  },
  navigationButton: {
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
  },
  socialLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#333333",
    marginBottom: 12,
  },
  socialIcon: {
    marginRight: 12,
  },
  socialInput: {
    flex: 1,
    color: "#E2E2E2",
    fontSize: 16,
  },
  actionButtonsSection: {
    marginTop: 20,
    marginBottom: 40,
    flexDirection: "row",
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333333",
  },
  cancelButtonText: {
    color: "#E2E2E2",
    fontSize: 18,
    fontWeight: "bold",
  },
  submitButton: {
    flex: 1,
    backgroundColor: "#00FF05",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#1B1B1B",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomSpacing: {
    height: 100,
  },
});
