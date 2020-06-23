import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var fbConfig = { PASTE_HERE_YOUR_FB_CONFIG: "" };
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({});
//   firebase.analytics();

export default firebase;
