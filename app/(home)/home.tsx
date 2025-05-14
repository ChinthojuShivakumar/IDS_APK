
import { Courosel } from "@/components/courosel";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  //   const [categoryList, setCategoryList] = useState([]);

  //   const fetchCategoryList = async () => {
  //     try {
  //       console.log("Calling:", axiosInstance.defaults.baseURL + "/category");

  //       const response = await axiosInstance.get(`/category`);
  //       if (response.status === 200) {
  //         setCategoryList(response.data.categoryList);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // console.log(categoryList)
  //   useEffect(() => {
  //     fetchCategoryList();
  //   }, []);
  return (
    <SafeAreaView>
      <View>
        {/* <Text>{axiosInstance.defaults.baseURL}</Text> */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 10, gap: 10 }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1744029829181-ad19c2ee248b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </ScrollView>
        <Courosel />
        <Text>HomeScreen Presence</Text>
      </View>
    </SafeAreaView>
  );
}
