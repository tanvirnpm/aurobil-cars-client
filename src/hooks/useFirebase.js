import initializeFirebase from '../Pages/Login/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        admin: false,
        user: false
    })


    const auth = getAuth();


    // user registration by email and password
    const registerUser = (email, password, name, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                savedUser(email, name, true, false, "POST")
                history.replace('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log('firebase error', error)
            });
    }

    // user login by email and password
    const loginUser = (email, password, location, history) => {
        let { from } = location.state || { from: { pathname: "/" } };
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userEmail = userCredential.user.email;
                // const user = { email, name }
                // ...
                
                fetch(`http://localhost:5000/get-user/${userEmail}`)
                .then(result => result.json())
                .then(data => {
                    // console.log(data[0].email)
                    setUser({
                        name: data[0].name,
                        email: data[0].email,
                        admin: data[0].admin,
                        user: data[0].user,
                        image: data[0].image,
                    })
                    data[0]?.email && history.replace(from)
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    // saved user into database
    const savedUser = (email, name, userRole, adminRole, method) => {
        const user = { 
            email: email, 
            name: name,  
            user: userRole,
            admin: adminRole,
            image: 'https://image.flaticon.com/icons/png/512/206/206853.png'
        }
        fetch('http://localhost:5000/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(result => result.json())
            .then(data => console.log(data))
    }










    return {
        registerUser,
        loginUser,
        user,
    }
};

export default useFirebase;