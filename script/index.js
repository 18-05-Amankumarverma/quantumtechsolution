const firebaseConfig = {
    apiKey: "AIzaSyDoAS6WRRFVx5rdAei2qv7i13lIpTgMKAY",
    authDomain: "comments-system-cac74.firebaseapp.com",
    databaseURL: "https://comments-system-cac74-default-rtdb.firebaseio.com",
    projectId: "comments-system-cac74",
    storageBucket: "comments-system-cac74.appspot.com",
    messagingSenderId: "822016976967",
    appId: "1:822016976967:web:c4a121c3b78cf680bc6962",
    measurementId: "G-TJ9VMCSDQ0"
};

const app = firebase.initializeApp(firebaseConfig)

// user authentication
var login = document.getElementById('login');
var provider = new firebase.auth.GoogleAuthProvider();


login.addEventListener('click', () => {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;

            console.log(user)

            const db = firebase.firestore();

            var logedUserImage = document.getElementById('logedUserImage');

            logedUserImage.src = user.photoURL;

            db.collection("user").add({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid:user.uid
            })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);


                    localStorage.setItem("loginInfo", JSON.stringify({
                        name: user.displayName,
                        email: user.displayName,
                        photo: user.photoURL,
                        id:user.uid
                    })
                    );


                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });



        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
})