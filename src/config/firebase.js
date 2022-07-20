import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

// TODO: Replace with your own config object
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
};

initializeApp(firebaseConfig);
export const db = getFirestore();
