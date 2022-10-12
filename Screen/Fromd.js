import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const Fromd = () => {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter your first name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        placeholder="last name"
      />
      <Button title="Submit"></Button>
    </View>
  );
};

export default Fromd;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
