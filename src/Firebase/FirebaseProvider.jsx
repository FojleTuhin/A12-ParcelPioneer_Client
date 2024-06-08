import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./FirebaseConfig";

export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {




    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        }
        )
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


   

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {


            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);


        })

        return () => {
            unSubscribe();
        }
    }, [])



    const allValues = {
        user,
        createUser,
        logOut,
        signIn,
        loading,
        googleLogin,
        updateUser
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
   
};

export default FirebaseProvider;