import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

const products = [
  {
    id: "1",
    name: "Modern Indoor Plant Set",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627458311-fb97cf2c0642?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627894302-dbf4fcfc1c73?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604079626512-1cfec4d0fcd3?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "A beautifully curated set of 5 indoor plants for a modern home.",
    price: 1499,
    rating: "4.8",
    stock: 25,
    totalReviews: "310",
    deleted: false,
    deletedAt: null,
    category: "663a11f95a256cff1ef38fb0",
    highlights: [
      "Low maintenance plants",
      "Perfect for home or office",
      "Air purifying benefits",
      "Comes with ceramic pots",
      "Eco-friendly packaging",
    ],
  },
  {
    id: "2",
    name: "Minimalist Wooden Chair",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582582429100-6a0f94c9c9c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627459341-4a2d9021a98a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Ergonomic and stylish chair made with premium wood, ideal for any interior.",
    price: 3499,
    rating: "4.6",
    stock: 40,
    totalReviews: "150",
    deleted: false,
    deletedAt: null,
    category: "663a11f95a256cff1ef38fb0",
    highlights: [
      "100% real wood",
      "Ergonomic backrest design",
      "Matte finish for elegance",
      "Supports up to 120kg",
      "Easy to assemble",
    ],
  },
  {
    id: "3",
    name: "Minimalist Wooden Chair",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582582429100-6a0f94c9c9c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627459341-4a2d9021a98a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Ergonomic and stylish chair made with premium wood, ideal for any interior.",
    price: 3499,
    rating: "4.6",
    stock: 40,
    totalReviews: "150",
    deleted: false,
    deletedAt: null,
    category: "663a11f95a256cff1ef38fb0",
    highlights: [
      "100% real wood",
      "Ergonomic backrest design",
      "Matte finish for elegance",
      "Supports up to 120kg",
      "Easy to assemble",
    ],
  },
  {
    id: "4",
    name: "Minimalist Wooden Chair",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582582429100-6a0f94c9c9c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616627459341-4a2d9021a98a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    ],
    description:
      "Ergonomic and stylish chair made with premium wood, ideal for any interior.",
    price: 3499,
    rating: "4.6",
    stock: 40,
    totalReviews: "150",
    deleted: false,
    deletedAt: null,
    category: "663a11f95a256cff1ef38fb0",
    highlights: [
      "100% real wood",
      "Ergonomic backrest design",
      "Matte finish for elegance",
      "Supports up to 120kg",
      "Easy to assemble",
    ],
  },
];

const renderProduct = ({ item }: { item: any }) => {
  return (
    <View style={styles.productContainer}>
      <Image style={styles.productImage} source={{ uri: item.images[0] }} />
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

export default function Product() {
  const [slicedValue, setSlicedValue] = useState(2);
  const [displayProducts, setDisplayProducts] = useState(
    products.slice(0, slicedValue)
  );
  const handleShowAll = () => {
    setSlicedValue(products.length);
  };
  useEffect(() => {
    setDisplayProducts(products.slice(0, slicedValue));
  }, [slicedValue]);
  return (
    <View style={styles.container}>
      <FlatList
        data={displayProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        scrollEnabled={false}
        style={{padding: 10}}
      />
      <Button title="See All" onPress={handleShowAll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  productContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});
