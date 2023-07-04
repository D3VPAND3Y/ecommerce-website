import { createContext,useEffect, useReducer } from "react";
import { onAuthStateChangedListener,createUserProfileDocument } from "../utils/firebase/firebase.utils";

// as the actual value you want to access
export const UsersContext = createContext({
    users:null,
    setUsers:()=>null,

});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:"SET_CURRENT_USER",
}


const userReducer = (state,action)=>{
    const {type,payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser:payload
            }
        default:
            return new Error(`Unhandled action type: ${type}`);
    }
}

const INITIAL_STATE = {
    currentUser:null,
}


export const UsersProvider = ({children}) => {
    // const [currentUser,setCurrentUser] = useState(null);


    const [ {currentUser}, dispatch ]=useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user});
    }
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
