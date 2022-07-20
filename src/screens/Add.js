import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import EmojiPicker from "rn-emoji-keyboard";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { createProduct } from "../config/api";

const initialState = {
  name: "",
  emoji: "📷",
  price: 0,
  isSoled: false,
  createAt: new Date(),
};

const Add = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [newItem, setNewItem] = React.useState(initialState);

  const handleEmoji = (emojiObject) => {
    setNewItem({ ...newItem, emoji: emojiObject.emoji });
  };

  const handleChange = (name, value) => {
    setNewItem({ ...newItem, [name]: value });
  };

  const onSend = async () => {
    const docRef = await createProduct(newItem);
    console.log("docRef", docRef);
    setNewItem(initialState);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell a New Product</Text>
      <Text style={styles.emoji} onPress={() => setIsOpen(true)}>
        {newItem.emoji}
      </Text>
      <Text style={styles.emojiText} onPress={() => setIsOpen(true)}>
        Select Emoji
      </Text>
      <EmojiPicker
        onEmojiSelected={handleEmoji}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <TextInput
        style={styles.inputContainer}
        onChangeText={(text) => handleChange("name", text)}
        placeholder="Product Name"
      ></TextInput>
      <TextInput
        style={styles.inputContainer}
        onChangeText={(text) => handleChange("price", text)}
        placeholder="Price"
        keyboardType="numeric"
      ></TextInput>
      <Button title="Publish" onPress={onSend} />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    color: "gray",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  emoji: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
  },
  inputContainer: {
    width: "90%",
    padding: 13,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
  },
  emojiText: {
    fontSize: 16,
    marginVertical: 10,
    color: "blue",
  },
});
