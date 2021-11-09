import { useEffect, useState } from "react"
import { getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut } from "@firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser]= useState(null);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [isLoading, setIsLoading ]=useState(true);
    const signInUsingGoogle =()=>{
        return signInWithPopup(auth,googleProvider)
        .then((result =>{
            setUser(result.user)
            sessionStorage.setItem("email", result.user.email);
        }))
    }

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            setUser(null);
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged (auth,(user)=>{
            setIsLoading(true);
       if(user){
           setUser(user);
       }
       else {
           setUser(null);
       }
       setIsLoading(false);
        })
        return ()=> unsubscribe;
    },[]) 
    
    return{
        user,
        isLoading,setIsLoading,
        signInUsingGoogle,logout,setUser
    }



}

export default useFirebase;