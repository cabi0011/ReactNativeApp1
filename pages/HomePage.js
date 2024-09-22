import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <Text style={styles.centeredText}>Hello from React Native!</Text>
        <Button
          title="About Page"
          onPress={() => navigation.navigate("About")}
        />
        <Button
          style={styles.Button}
          title="List Page"
          onPress={() => navigation.navigate("List")}
        />
        <StatusBar style="auto" />
        <Image
            source={require("../assets/doggo.jpg")}
            style={{
              borderColor: "#eee",
              borderWidth: 5,
              width: 300,
              height: 400,
            }}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center"
  },
  centeredText: {
    textAlign: "center"
  },
  Button :{
    borderRadius: 75,
    margin: 1.5,
    backgroundColor: "#0000FF"
  },
  // buttonText: {
  //   color: "#FFFFFF"
  // }
});
