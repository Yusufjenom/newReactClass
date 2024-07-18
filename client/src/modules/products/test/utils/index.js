import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdPDWE5nBS7SfLSx09Eff8YD61ypobOU",
  authDomain: "first-app-4efcf.firebaseapp.com",
  projectId: "first-app-4efcf",
  storageBucket: "first-app-4efcf.appspot.com",
  messagingSenderId: "282941537472",
  appId: "1:282941537472:web:e6993d5440c43dd6c60125",
};

const vapidKey =
  "BCfMJ5ZbzI1xXob3s6KwNe0hh7I0eyhZk-qXjvxhSyX_D8sKMfY2V9IvuqQjW7GHekYZO_o7Mm_DamuLQDn69zA";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestFCMToken = async () => {
  return Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        return getToken(messaging, { vapidKey });
      } else {
        throw new Error("message notification not granted");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
