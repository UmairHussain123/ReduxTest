import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  const stuFromList = [
    {
      id: 0,
      dept: "Reg",
      fromName: "registration From",
    },
    { id: 1, dept: "Exm", fromName: "Examination from" },
    { id: 2, dept: "Cr", fromName: "card" },
  ];
  return (
    <View style={styles.mainContainer}>
      {stuFromList.map((item, index) => {
        return (
          <View key={index} style={styles.fromCard}>
            <Text>{item.fromName}</Text>
            <Text style={{ margin: 10 }}></Text>
            <Button
              title="Next"
              style={{}}
              onPress={() => {
                navigation.navigate("Fromd", { item, index });
              }}
            ></Button>
          </View>
        );
      })}
      <Text></Text>
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
