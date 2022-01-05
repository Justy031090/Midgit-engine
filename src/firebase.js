import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyDEZS3tE0xJxsw706qoeV4EoZbkMiUpd1s',
    authDomain: 'mid-project-9f056.firebaseapp.com',
    projectId: 'mid-project-9f056',
    storageBucket: 'mid-project-9f056.appspot.com',
    messagingSenderId: '768747972837',
    appId: '1:768747972837:web:5cc79733b3c5fe21c20c0c',
    measurementId: 'G-Z93ZR41JFN',
});
export const db = app.database();
export const auth = app.auth();
export default app;
