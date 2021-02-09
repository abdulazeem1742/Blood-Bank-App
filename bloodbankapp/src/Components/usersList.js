import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
  Linking,
  ProgressViewIOSComponent,
} from "react-native";
const UsersList = (props) => {
  const [name, setName] = useState(props.name);
  const [bloodGroup, setBloodGroup] = useState(props.bloodGroup);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [address, setAddress] = useState(props.address);

  return (
    <View style={styles.cardStyle}>
      <TouchableOpacity
        onPress={() =>
          alert(
            `Name : ${name}- Blood Group : ${bloodGroup}- Email : ${email}- Phone no : ${phoneNumber}- Address : ${address}`
          )
        }
      >
        <Text>
          {name}-{bloodGroup}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const useData = (name, bloodGroup, email, phoneNumber, address, props) => {
  // props.navigation.navigate("DonarProfile");

  console.log(props);
  return [name, bloodGroup, email, phoneNumber, address];
};

const styles = StyleSheet.create({
  cardStyle: {
    margin: 5,
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 1,
    textAlign: "center",
  },
});

export { UsersList, useData };
