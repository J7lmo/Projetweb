import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

var firebaseConfig = {
    apiKey: "AIzaSyBhOHOHUy1xvPqz25ria9JcuQRrukbQxzc",
    authDomain: "disneyplus-clone-8be14.firebaseapp.com",
    projectId: "disneyplus-clone-8be14",
    storageBucket: "disneyplus-clone-8be14.appspot.com",
    messagingSenderId: "608794781554",
    appId: "1:608794781554:web:881186b2b97f5df1bfdfeb",
    measurementId: "G-K2731GZ593"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const useGoogleLogin = () => {
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);

    navigate('/home'); // Rediriger l'utilisateur vers la page d'accueil
  };

  const handleGoogleLoginFailure = (error) => {
    console.log(error);
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(handleGoogleLoginSuccess)
      .catch(handleGoogleLoginFailure);
  };

  return { signInWithGoogle };
};
