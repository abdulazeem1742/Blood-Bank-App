import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  ScrollView,
  Button,
} from "react-native";

const RegistrationScreen = () => {
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  const handleData = () => {
    const donarInfo = {
      name: name,
      age: age,
      email: email,
      country: country,
      city: city,
      address: address,
      number: number,
      bootGroup: bloodGroup,
    };
  };
  return (
    <View>
      <Text style={styles.heading}>Register to Donate Blood</Text>
      <ScrollView>
        <TextInput placeholder="Name" style={styles.inputStyle} />
        <TextInput placeholder="Age" style={styles.inputStyle} />
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput placeholder="Country" style={styles.inputStyle} />
        <TextInput placeholder="City" style={styles.inputStyle} />
        <TextInput placeholder="Line Address" style={styles.inputStyle} />
        <TextInput
          placeholder="Contact number"
          style={styles.inputStyle}
          dataDetectorTypes="phoneNumber"
        />
        <Picker
          style={{ height: 25, width: 100 }}
          onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
        >
          <Picker.Item label="A +" value="A+" />
          <Picker.Item label="A -" value="A-" />
          <Picker.Item label="B +" value="B +" />
          <Picker.Item label="B -" value="B -" />
          <Picker.Item label="O +" value="O +" />
          <Picker.Item label="O -" value="O -" />
          <Picker.Item label="AB +" value="AB +" />
          <Picker.Item label="AB -" value="AB -" />
        </Picker>
        <Button title="Submit" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    padding: 15,
    margin: 6,
    fontSize: 20,
    borderColor: "black",
    borderWidth: 1,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default RegistrationScreen;
