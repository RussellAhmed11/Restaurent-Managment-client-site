import { createContext, useEffect, useState } from "react";
import { app } from "../Firbase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
export const AuthContex = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic=UseAxiosPublic()
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
            // get token and store client
                const userInfo={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                    }
                })
            }
           
            else{
                // todo:remove token (if token stored in the client side:local storage,catching,in memory)
                localStorage.removeItem('access-token')
            }
            
        })
           return () => {
            return unSubscribe();
        }

    }, [axiosPublic])
    const authInfo = {
        user, loading, createUser, signInUser, signOutUser, updateUserProfile, googleSignIn,setLoading
    }
    return (
        <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
    );
};

export default AuthProvider;