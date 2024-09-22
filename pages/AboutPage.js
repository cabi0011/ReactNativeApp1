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
        <View style={styles.centeredView}>
          <Text style={styles.centeredText}>
            This is the About Page. There is a photo of a dog in this page.
          </Text>
          <View style={styles.buttonContainer}>
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
      </ScrollView>
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
  buttonContainer: {
    marginVertical: 10,
    padding: 20,
  },
  Button :{
    borderRadius: 75,
    margin: 1.5,
    backgroundColor: "#0000FF",
  },
});
