import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const handlePress = () => {
    router.push("/(home)/home");
  };
  const handlePressA = () => {
    router.push("/(home)/about");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text onPress={handlePress}>Home</Text>
      <Text onPress={handlePressA}>About</Text>
    </View>
  );
}
