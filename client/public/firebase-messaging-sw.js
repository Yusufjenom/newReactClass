importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyDOdPDWE5nBS7SfLSx09Eff8YD61ypobOU",
  authDomain: "first-app-4efcf.firebaseapp.com",
  projectId: "first-app-4efcf",
  storageBucket: "first-app-4efcf.appspot.com",
  messagingSenderId: "282941537472",
  appId: "1:282941537472:web:e6993d5440c43dd6c60125",
};

firebase.initializeApp(firebaseConfig);

//retrieve messaging from firbase
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("received background message", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
