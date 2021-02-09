import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.card1}>
          <Button
            title="Buyer"
            onPress={() => {
              props.navigation.navigate("DonarsScreen");
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity>
          <Button
            title="Donar"
            onPress={() => {
              props.navigation.navigate("RegistrationScreen");
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "blue",
    marginTop: 90,
  },
});
export default HomeScreen;
