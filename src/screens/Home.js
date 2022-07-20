import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Add Product" onPress={() => navigation.navigate("Add")} />
    </View>
  );
};

export default Home;
