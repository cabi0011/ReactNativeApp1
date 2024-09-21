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
          <Button
            title="Home Page"
            onPress={() => navigation.navigate("Home")}
          ></Button>
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
            This is the About Page. 
          </Text>
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
});
