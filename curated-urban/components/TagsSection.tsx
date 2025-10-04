import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface Tag {
  id: string;
  label: string;
  isActive?: boolean;
}

interface TagsSectionProps {
  tags: Tag[];
  onTagPress?: (tagId: string) => void;
}

export default function TagsSection({ tags, onTagPress }: TagsSectionProps) {
  return (
    <View style={styles.container}>
      {tags.map((tag) => (
        <TouchableOpacity
          key={tag.id}
          style={[styles.tag, tag.isActive && styles.tagActive]}
          onPress={() => onTagPress?.(tag.id)}
          accessibilityLabel={`Filter by ${tag.label}`}
          accessibilityRole="button"
          accessibilityState={{ selected: tag.isActive }}
          accessibilityHint={`Tap to filter restaurants by ${tag.label.toLowerCase()}`}
        >
          <Text style={[styles.tagText, tag.isActive && styles.tagTextActive]}>{tag.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    gap: 12,
  },
  tag: {
    backgroundColor: "#1B1B1B",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  tagActive: {
    backgroundColor: "#00FF05",
  },
  tagText: {
    color: "#E2E2E2",
    fontSize: 14,
    fontWeight: "500",
  },
  tagTextActive: {
    color: "#1B1B1B",
  },
});
