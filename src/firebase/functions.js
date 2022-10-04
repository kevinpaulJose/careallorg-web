import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "./firebase";

export async function handleUpload(file, name) {
  if (!file) {
    alert("Please choose a file first!");
  } else {
    var timestamp = new Date().getUTCMilliseconds();
    const storageRef = ref(
      storage,
      `/${name}/${
        file.name.split(".")[0] +
        timestamp +
        "." +
        file.name.split(".")[file.name.split(".").length - 1]
      }`
    );
    const uploadTask = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  }
}
