import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./FirebaseConfig";
import useAxiosPublic from "@/hooks/useAxiosPublic";

export const AuthContext = createContext(null)

const FirebaseProvider = ({ children }) => {




    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo, phone) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            phoneNumber: phone
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




    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {


    //         console.log('user in the auth state change', currentUser);
    //         setUser(currentUser);
    //         setLoading(false);


    //     })

    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }

        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])


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