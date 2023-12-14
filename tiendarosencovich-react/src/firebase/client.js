import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'

/* Para agregarle lo del storage */
import { getStorage } from 'firebase/storage';

 

const firebaseConfig = {

   /*  Your web app's Firebase configuration */
   apiKey: "AIzaSyA0J_pr1L2KrHnxDGJhNq1h8WwxZE7Ue9g",
   authDomain: "tienda-rosencovich-ecommerce.firebaseapp.com",
   projectId: "tienda-rosencovich-ecommerce",
   storageBucket: "tienda-rosencovich-ecommerce.appspot.com",
   messagingSenderId: "237548651066",
   appId: "1:237548651066:web:3769ce3740780b2343ab03"
  };

 

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const storage = getStorage(app);

export { storage };