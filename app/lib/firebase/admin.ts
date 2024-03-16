import {
  initializeApp,
  cert,
  getApps,
  type ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { getStorage } from "firebase-admin/storage";

if (!getApps()?.length) {
  initializeApp({
    credential: cert(
      JSON.parse(process.env.FIREBASE_SECRET!) as ServiceAccount
    ),
  });
}

export const db = getFirestore();
export const auth = getAuth();
export const bucket = getStorage().bucket("compost-chita.appspot.com");
