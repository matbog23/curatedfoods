import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Curated Foods",
        }}
      />
      <Stack.Screen
        name="add-review"
        options={{
          title: "Add Review",
        }}
      />
    </Stack>
  );
}
