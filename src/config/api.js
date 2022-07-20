import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const COLLECTION_PRODUCTS = collection(db, "products");

// Create
export const createProduct = (items) => {
  console.log("items", items);
  return addDoc(COLLECTION_PRODUCTS, items).id;
};
