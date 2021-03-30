var firebaseConfig = {
  apiKey: "AIzaSyCBnZEVxxK1PVkJjAfZJD3vCRvFLCNHHl0",
  authDomain: "class93-95.firebaseapp.com",
  databaseURL: "https://class93-95-default-rtdb.firebaseio.com",
  projectId: "class93-95",
  storageBucket: "class93-95.appspot.com",
  messagingSenderId: "14393949313",
  appId: "1:14393949313:web:23072a6265de97ee83e180",
  measurementId: "G-19GD0E284Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  

  //End code
  });});}
getData();
