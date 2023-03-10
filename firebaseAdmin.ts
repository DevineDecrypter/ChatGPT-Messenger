import { getApps } from "firebase-admin/app";
import admin from "firebase-admin";

// const serviceAccount = JSON.parse(
//   process.env.FIREBASE_SERVIE_ACCOUNT_KEY as string
// );

const serviceAccount = require("./serviceAccountKey.json");

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
