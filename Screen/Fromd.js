import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { updateStuData, reset } from "../redux/mainCacheSlice";
import { useSelector, useDispatch } from "react-redux";
const Fromd = ({ route, navigation }) => {
  const {
    params: { item },
  } = route;
  console.log(">>>>>>>param", item.id);

  const [DataArry, setDataArry] = useState("");
  const getStuData = useSelector((state) =>
    state.mainCache.stuData ? state.mainCache.stuData : ""
  );

  const dispatch = useDispatch();
  let studentData = useSelector((state) =>
    state.mainCache.stuData ? state.mainCache.stuData : ""
  );

  // console.log("DDD", arr);
  const [name, setName] = React.useState(
    getStuData.name ? getStuData.name : ""
  );
  const [lastName, setLastName] = React.useState(
    getStuData.lastName ? getStuData.lastName : ""
  );

  useEffect(() => {}, [name, lastName]);

  const updateData = () => {
    // const data1 = {
    //   id: "",
    //   dept: "",
    //   name: "",
    //   lastName: "",
    // };
    var data = [];
    var my_json = {
      id: item.id,
      dept: item.dept,
      name: name,
      lastName: lastName,
    };
    console.log(my_json);

    data.filter(() => {});
    console.log(data);
    // if (studentData.length == 0) {
    //   const data =  {
    //     id: item.id,
    //     dept: item.dept,
    //     name: name,
    //     lastName: lastName,
    //   };

    //   const arr = [];

    // for (var i in data ) {
    //   const element = arr.push(data);

    // }
    // const arrOfObj = arr.push(...data, data);
    // const test = arr.concat(arrOfObj);
    // dispatch(updateStuData(data));
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
