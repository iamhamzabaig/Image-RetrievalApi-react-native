import { StyleSheet, Text, View } from "react-native";
import ImageApiCall from "./Screens/ImageApiCall";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageApiCall />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
