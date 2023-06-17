import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore,doc,setDoc,getDoc,collection,writeBatch,query,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA80oD8un7xnrD4QBiHJsef8sjbmlWDbl0",
  authDomain: "ecommerce-website-9ed13.firebaseapp.com",
  projectId: "ecommerce-website-9ed13",
  storageBucket: "ecommerce-website-9ed13.appspot.com",
  messagingSenderId: "54952257659",
  appId: "1:54952257659:web:86d5ca28d17fecdd901ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account' //anyone interacts with this provider, we always want to trigger the google pop up
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db); // if any of the document fails to set, none of them will be set
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef,obj.title.toLowerCase());
        batch.set(newDocRef,obj);
    });
    console.log("batch commit");
    return await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  };


export const createUserProfileDocument = async (userAuth,additionalInfo={}) => {
    if (!userAuth) return;
    const userRef = doc(db, "users", userAuth.uid); //database collection and identifier
    const snapShot = await getDoc(userRef); //get the document from the reference to check if document exist in db
    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo //spread the additional info
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    return userRef;
}

export const createAuthUser = async (email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUser = async (email,password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth,callback);
}
