import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestFCMToken } from "./utils/index";

function Test() {
  //   useEffect(() => {
  //     const updateToken = async () => {
  //       try {
  //         // Request permission to receive notifications
  //         const permission = await Notification.requestPermission();
  //         if (permission !== "granted") {
  //           console.error("Permission not granted for notifications");
  //           return;
  //         }

  //         // Get the Firebase Cloud Messaging token
  //         const token = await getToken(messaging, {
  //           vapidKey: "NP2h4kUHK5Re1SdUht41mZTJCan_Uy2veGy0zNSLcsk",
  //         });
  //         console.log("Firebase token:", token);

  //         // Send the token to your server to update the user's firebase_token field
  //         const response = await axios.post(
  //           "http://localhost:5000/api/v1/update-firebase-token",
  //           { firebaseToken: token },
  //           {
  //             headers: {
  //               Authorization:
  //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJlbWFpbCI6Implbm9teTc5QGdtYWlsLmNvbSIsIl9pZCI6IjY2OTJlNzM1ZTcwMGY5ZDMwNGZiMTI1YSIsIm5hbWUiOiJLYXl1cyBZdXN1ZiIsInJvbGUiOiJGSVJTVF9BSURFUiJ9LCJpYXQiOjE3MjEwMzQ1MjksImV4cCI6MTcyMTAzNTcyOX0.DN1d5CSfIlV5WKBMBhv-hC4mVy5PBnoei3kMVQ7P7fg",
  //             },
  //           }
  //         );
  //         console.log(response);
  //         console.log("Token update response:", response.data);
  //       } catch (error) {
  //         console.error("Error updating Firebase token:", error);
  //       }
  //     };

  //     updateToken();
  //   }, []);

  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const fetchFCMToken = async () => {
      try {
        const token = await requestFCMToken();
        setFcmToken(token);
        console.log(token);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFCMToken();
  }, []);

  return (
    <div>
      <div className="container firebase-form p-4">
        <div className="row">
          {fcmToken && (
            <div className="col-md-12 mb-4">
              <div className="alert alert-info">
                <strong>FCM Token</strong>
                {fcmToken}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
