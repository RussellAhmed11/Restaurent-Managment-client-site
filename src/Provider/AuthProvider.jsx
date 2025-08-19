import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firbase/Firebase.config";
export const AuthContex = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
         displayName:name, photoURL:photo
        })
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
   setUser(currentUser);
   setLoading(false)
  } 
}) 
return ()=> unSubscribe()

    },[])
    const authInfo = {
        user, loading,createUser,signInUser,signOutUser,updateUserProfile
    }
    return (
        <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
    );
};

export default AuthProvider;