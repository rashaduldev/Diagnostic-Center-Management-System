import { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth } from "firebase/auth";


export const AuthContext=createContext(null)

const auth=getAuth(app)

const AuthProvider = ({children}) => {
     //Log in with Google
     const googleSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

     // user created
    const createUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    //    user Signing in
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authinfo={
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;