import { createContext,useState,useEffect } from "react";
import { onAuthStateChangedListener,createUserProfileDocument } from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UsersContext = createContext({
    users:null,
    setUsers:()=>null,

});

export const UsersProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};


    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user) {
                createUserProfileDocument(user);
            }
            setCurrentUser(user);
            });
            return unsubscribe;
    },[]);
    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
}
