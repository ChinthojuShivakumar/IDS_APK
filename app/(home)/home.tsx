import { Courosel } from "@/components/courosel";
import Product from "@/components/product";
import React from "react";
import { Image, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Horizontal Scrollable Image Row */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 10, gap: 10 }}
        >
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: 100, height: 100, borderRadius: 100 }}
            />
          ))}
        </ScrollView>

        {/* Carousel and Product List */}
        <Courosel />
        <Product />

        <Text style={{ textAlign: "center", marginTop: 20 }}>
          HomeScreen Presence
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
