import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { updateStuData, reset } from "../redux/mainCacheSlice";
import { useSelector, useDispatch } from "react-redux";
const Fromd = ({ route, navigation }) => {
  const {
    params: { item },
  } = route;
  // console.log(">>>>>>>param", item.id);

  const [arrObj, setArrObj] = useState([]);

  const getStuData = useSelector((state) =>
    state.mainCache.stuData ? state.mainCache.stuData : ""
  );
  var StudentData = getStuData.find((e) => e.dept == item.dept);
  // console.log(StudentData);
  console.log(">>", getStuData);
  const dispatch = useDispatch();
  // let studentData = useSelector((state) =>
  //   state.mainCache.stuData ? state.mainCache.stuData : ""
  // );
  // console.log("studentData", studentData);

  // console.log("DDD", arr);
  const [name, setName] = React.useState(StudentData ? StudentData.name : "");
  const [lastName, setLastName] = React.useState(
    StudentData ? StudentData.lastName : ""
  );

  const updateData = () => {
    var data = {
      id: item.id,
      dept: item.dept,
      name: name,
      lastName: lastName,
    };

    dispatch(updateStuData(data));
  };
  return (
    <View>
      <Text
        style={{ alignContent: "center", alignSelf: "center", fontSize: 20 }}
      >
        {item.dept}
      </Text>
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
      <Button
        title="Submit"
        onPress={() => {
          updateData();
        }}
      ></Button>
      <Button title="reset" onPress={() => dispatch(reset())}></Button>
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
