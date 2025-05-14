import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const widths = Dimensions.get("window");

type CarouselItem = {
  id: string;
  imageUrl: string;
};

const data: CarouselItem[] = [
  {
    id: "1",
    imageUrl:
      "https://media.istockphoto.com/id/1177060362/photo/modern-houseplants.jpg?s=1024x1024&w=is&k=20&c=8hthBcV3G82zo_qmIBdLbzdlPTZkunAa6RikwWczAjA=",
  },
  {
    id: "2",
    imageUrl:
      "https://media.istockphoto.com/id/1301980266/photo/cozy-interior-with-a-lot-of-houseplants.jpg?s=1024x1024&w=is&k=20&c=pdslNDB2jOYvCXSmybtSSfH-CfEHmw3pQGtpoyUDVNM=",
  },
  {
    id: "3",
    imageUrl:
      "https://media.istockphoto.com/id/1177060362/photo/modern-houseplants.jpg?s=1024x1024&w=is&k=20&c=8hthBcV3G82zo_qmIBdLbzdlPTZkunAa6RikwWczAjA=",
  },
  {
    id: "4",
    imageUrl:
      "https://media.istockphoto.com/id/1301980266/photo/cozy-interior-with-a-lot-of-houseplants.jpg?s=1024x1024&w=is&k=20&c=pdslNDB2jOYvCXSmybtSSfH-CfEHmw3pQGtpoyUDVNM=",
  },
];

const renderItem = ({ item }: { item: CarouselItem }) => {
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
    </View>
  );
};

export const Courosel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null); // Ref for FlatList

  // Function to move to the next item
  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % data.length; // Loop to the first item when reaching the end
    setCurrentIndex(nextIndex);
    flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
  };

  // Set an interval to auto-slide
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Slide every 3 seconds

    return () => clearInterval(intervalId); // Clear interval when component unmounts
  }, [currentIndex]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      ref={flatListRef} // Attach the ref to FlatList
      onScrollToIndexFailed={(error) => console.log("Scroll failed", error)} // Handle errors
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: widths.width,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
