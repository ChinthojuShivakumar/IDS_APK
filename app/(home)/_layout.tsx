import { Stack } from "expo-router";
import React from "react";

export default function LayOut() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Home", headerShown: false }} />
      <Stack.Screen name="about" options={{ title: "About", headerShown: false }} />
    </Stack>
  );
}
