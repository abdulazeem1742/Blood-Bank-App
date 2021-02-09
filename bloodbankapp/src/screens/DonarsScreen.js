import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { UsersList } from "../Components/usersList";
const DonarsScreen = (props) => {
  const navig = () => {
    props.navigation.navigate("DonarProfile");
  };
  return (
    <View>
      <TextInput
        placeholder="Search with username"
        style={styles.searchStyles}
      />
      <View>
        <ScrollView>
          <UsersList
            name="Azeem"
            bloodGroup="A+"
            email="azeemabdul@gmail.com"
            phoneNumber="03090123435"
            address="Ghulshan E iqbal karachi"
          />
          <UsersList
            name="Wasif"
            bloodGroup="O+"
            email="abdulwasif21@gmail.com"
            phoneNumber="03181244435"
            address="Johar Complex karachi"
          />
          <UsersList
            name="Darya"
            bloodGroup="B+"
            email="daryakhan@gmail.com"
            phoneNumber="03334532764"
            address="Hyderabad"
          />
          <UsersList
            name="Kashif"
            bloodGroup="AB+"
            email="kashifhyder@gmail.com"
            phoneNumber="033098690123"
            address="karachi"
          />
          <UsersList
            name="Murtaza"
            bloodGroup="O+"
            email="murtazahyder@gmail.com"
            phoneNumber="03338756892"
            address="Quidabad karachi"
          />
          <UsersList
            name="Noroz"
            bloodGroup="O-"
            email="norozmagsi@gmail.com"
            phoneNumber="0306090126236"
            address="Karachi"
          />
          <UsersList
            name="Ahad"
            bloodGroup="A-"
            email="abdulahad@gmail.com"
            phoneNumber="03890745678"
            address="Ghulshan E iqbal karachi"
          />
          <UsersList
            name="Ali"
            bloodGroup="A+"
            email="alikhan@gmail.com"
            phoneNumber="03387980122"
            address="Ghulshan karachi"
          />
          <UsersList
            name="Asim"
            bloodGroup="B-"
            email="asimali@gmail.com"
            phoneNumber="03091212678"
            address="karachi"
          />
          <UsersList
            name="Jabbar"
            bloodGroup="A+"
            email="abdulajbar@gmail.com"
            phoneNumber="03389123920"
            address="Dadu Sindh"
          />
          <UsersList
            name="Qadeer"
            bloodGroup="B-"
            email="qadeerkhan@gmail.com"
            phoneNumber="0309021388"
            address="Dadu"
          />
          <UsersList
            name="Naiz"
            bloodGroup="AB-"
            email="naizahmed91@gmail.com"
            phoneNumber="0338988123"
            address="karachi"
          />
          <UsersList
            name="Manoj"
            bloodGroup="B+"
            email="manojkhan22@gmail.com"
            phoneNumber="03781239"
            address="Ghulshan karachi"
          />
          <UsersList
            name="Urooj"
            bloodGroup="A+"
            email="uroojali88@gmail.com"
            phoneNumber="03138567422"
            address="Umerkot"
          />
          <UsersList
            name="Kasim"
            bloodGroup="A+"
            email="kasimmohd42@gmail.com"
            phoneNumber="0123812323"
            address="Larkana"
          />
          <UsersList
            name="Ahmed"
            bloodGroup="AB+"
            email="ahmed992@gmail.com"
            phoneNumber="03891238213"
            address="Mathi"
          />
          <UsersList
            name="Ajam"
            bloodGroup="A+"
            email="ajamali21@gmail.com"
            phoneNumber="03090123435"
            address="Ghulshan E iqbal karachi"
          />
          <UsersList
            name="Shabir"
            bloodGroup="A+"
            email="shabirahmed@gmail.com"
            phoneNumber="03090123435"
            address="Ghulshan E iqbal karachi"
          />
          <UsersList
            name="Majeed"
            bloodGroup="O+"
            email="abdulmajeed@gmail.com"
            phoneNumber="03090123435"
            address="karachi"
          />
          <UsersList
            name="Noor"
            bloodGroup="B+"
            email="noorali@gmail.com"
            phoneNumber="03090123435"
            address="Ghulshan E iqbal karachi"
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchStyles: {
    margin: 10,
    padding: 5,
    borderWidth: 2,
    borderColor: "black",
  },
});

export default DonarsScreen;
