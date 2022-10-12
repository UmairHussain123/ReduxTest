import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const stuFromList = [
    {
      id: 1,
      name: "registration From",
    },
    { id: 2, name: "Examination from" },
    { id: 3, name: "card" },
  ];
  return (
    <View style={styles.mainContainer}>
      {stuFromList.map((item, index) => {
        return (
          <View key={index} style={styles.fromCard}>
            <Text>{item.name}</Text>
            <Text style={{ margin: 10 }}></Text>
            <Button
              title="Next"
              style={{}}
              onPress={() => {
                navigation.navigate("Fromd");
              }}
            ></Button>
          </View>
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  fromCard: {
    width: 300,
    height: 100,
    borderColor: "black",
    borderWidth: 0.5,
    marginTop: 10,
  },
});
