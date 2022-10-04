import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_YKnzWc1-oAhkfFGCbGCnlKSKuMX7acc",
  authDomain: "careall-c16af.firebaseapp.com",
  projectId: "careall-c16af",
  storageBucket: "careall-c16af.appspot.com",
  messagingSenderId: "844331602987",
  appId: "1:844331602987:web:a61c1c56672fdeb1ccc66e",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
export default storage;
