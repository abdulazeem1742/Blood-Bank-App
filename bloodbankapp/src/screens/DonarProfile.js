import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import { useData } from "../Components/usersList";

const DonarProfile = () => {
  const [name] = useData();
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
export default DonarProfile;
