const firebaseConfig = {
  apiKey: "AIzaSyCTUb72QTPGr2yzrJCFgJNBWSI2D9gt_Q8",
  authDomain: "hoda-portflio.firebaseapp.com",
  projectId: "hoda-portflio",
  storageBucket: "hoda-portflio.firebasestorage.app",
  messagingSenderId: "881971239680",
  appId: "1:881971239680:web:770569ab484b92977a31e5",
  measurementId: "G-BLF0R78SSM"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
