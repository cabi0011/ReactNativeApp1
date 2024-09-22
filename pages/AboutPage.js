import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function AboutPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require("../assets/dog.png")}
            style={{
              borderColor: "#eee",
              borderWidth: 5,
              width: 300,
              height: 400,
            }}
          />
          <Text>
            This is the About Page. There is a photo of a dog in this page.
          </Text>
          <Button
            title="Home Page"
            onPress={() => navigation.navigate("Home")}
          ></Button>
          <Button
          styles={styles.Button}
          title="List Page"
          onPress={() => navigation.navigate("List")}>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 48,
  },
  Button :{
    borderRadius: 75,
    margin: 1.5,
    backgroundColor: "#0000FF"
  },
  buttonText: {
    color: "#FFFFFF"
  }
});
