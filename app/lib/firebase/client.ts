"use client";

import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBya_-UpllA_n7BegzHoZd89ntaqXBTzCw",
  authDomain: "compost-chita.firebaseapp.com",
  projectId: "compost-chita",
  storageBucket: "compost-chita.appspot.com",
  messagingSenderId: "924220090819",
  appId: "1:924220090819:web:c9baeefb2817f7b315b576",
  measurementId: "G-9GPJPCSHZ2",
};

const app = getApps()?.length ? getApps()[0] : initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();
