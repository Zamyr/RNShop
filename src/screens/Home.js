import { View, Text, Button, FlatList } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { updateProduct } from "../config/api";
import Product from "../components/Product";

import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
const COLLECTION_PRODUCTS = collection(db, "products");

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const q = query(COLLECTION_PRODUCTS, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsubscribe;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Add" onPress={() => navigation.navigate("Add")} />
      ),
    });
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product {...item} />}
      />
    </View>
  );
};

export default Home;
