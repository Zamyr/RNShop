import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  orderBy,
  query,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

const COLLECTION_PRODUCTS = collection(db, "products");

// Create
export const createProduct = (items) => {
  return addDoc(COLLECTION_PRODUCTS, items).id;
};

const getArrayFromCollection = (collection) => {
  return onSnapshot(collection, (querySnapshot) => {
    return { ...doc.data(), id: doc.id };
  });
};

// UPDATE
export const updateProduct = async (id, product) => {
  await updateDoc(doc(COLLECTION_PRODUCTS, id), product);
};

// DELETE
export const deleteProduct = async (id) => {
  await deleteDoc(doc(COLLECTION_PRODUCTS, id));
};
