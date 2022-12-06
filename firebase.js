import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpOo2Vj2mHJ9x1ZWgZqptpZyHis7FFNQA",
  authDomain: "nhl-stats-website.firebaseapp.com",
  projectId: "nhl-stats-website",
  storageBucket: "nhl-stats-website.appspot.com",
  messagingSenderId: "247075652746",
  appId: "1:247075652746:web:e2d866cb7241ccf7919973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Authentication Login
const auth = getAuth();

//Local Testing
//connectAuthEmulator(auth, "http://localhost:9099");

const loginEmailPasword = async () => {
  const accountEmail = loginEmail.value;
  const accountPassword = loginPassword.value;

  try{
    const userCredentials = await signInWithEmailAndPassword(auth, accountEmail, accountPassword);
    console.log(userCredentials.user);
    console.log("LOGIN SUCESSFUL");
    window.location.replace('/test');
  }
  catch(error){
    console.log(error);
    alert("INVALID USERNAME OR PASSWORD");
  }

};

if(window.location.pathname == "/login"){
  btnLogin.addEventListener("click", loginEmailPasword);
}
//Initialize Authentication Sign Up
const createAccount = async () => {
  const accountEmail = signupEmail.value;
  const accountPassword = signupPassword.value;
  try{
    const userCredentials = await createUserWithEmailAndPassword(auth, accountEmail, accountPassword);
    console.log(userCredentials.user);
    console.log("ACCOUNT CREATED");
    window.location.replace('/test');
  }
  catch(error){
    console.log(error);
    alert("INVALID USERNAME OR PASSWORD");
  }
}

if(window.location.pathname == "/login"){
  btnSignup.addEventListener("click", createAccount);
}


const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if(user) {
      console.log(user);
    }
    else{
      console.log("Not signed in");
      if(window.location.pathname == "/test"){
        window.location.replace('/login');
      }
    }
  });
}
monitorAuthState();

//Initialize Authentication Sign Out
const logout = async () => {
  await signOut(auth);
  window.location.replace('/login');
}
if(window.location.pathname == "/test" || window.location.pathname == "/feed"){
  btnSignout.addEventListener("click", logout);
}
