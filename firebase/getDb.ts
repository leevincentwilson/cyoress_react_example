import {getFirestore} from "firebase/firestore";

export const getDb = () =>{
    return getFirestore();
}