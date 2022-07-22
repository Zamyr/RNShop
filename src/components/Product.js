import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { updateProduct, deleteProduct } from "../config/api";

const Product = (props) => {
  const { id, emoji, name, price, isSoled } = props;

  const onEdit = async () => {
    await updateProduct(id, { isSoled: !isSoled });
  };

  const onDelete = async () => {
    await deleteProduct(id);
  };

  return (
    <View style={styles.productContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.emoji}>{emoji}</Text>
        <TouchableOpacity onPress={onDelete}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isSoled ? "gray" : "#0FA5E9" },
        ]}
        onPress={onDelete}
        disabled={isSoled}
      >
        <Text style={styles.buttonText}>Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 8,
  },
  emoji: {
    fontSize: 100,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  button: {
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
