import initializeFirebase from '../Pages/Login/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [isRegSuccess, setIsRegSuccess] = useState(false);
    useEffect(() => {
        const getLocalStorageUser = JSON.parse(localStorage.getItem("loginUser"));
        // console.log(getLocalStorageUser);
        getLocalStorageUser && setUser(getLocalStorageUser)
      }, []);


    const auth = getAuth();
    //   sign out function
    const logOutHandler = () => {
        setIsLoading(false)
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            setUser({});
            localStorage.removeItem("loginUser");
          })
          .catch((error) => {
            // An error happened.
          });
        //   console.log('logout done')
      };

    // user registration by email and password
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                setIsRegSuccess(true)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                savedUser(email, name, true, false, "POST");
                
                // history.replace('/login');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log('firebase error', error)
            })
            .finally(()=> setIsLoading(false))
    }

    // user login by email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        let { from } = location.state || { from: { pathname: "/" } };
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userEmail = userCredential.user.email;
                // const user = { email, name }
                // ...
                
                fetch(`https://intense-dawn-68409.herokuapp.com/get-user/${userEmail}`)
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
                    savedUserInToLocalStorage(data[0].email, data[0].name, data[0].user, data[0].admin)
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
        fetch('https://intense-dawn-68409.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(result => result.json())
            .then(data => console.log(data))
    }
    // saved user into localstorage
    const savedUserInToLocalStorage = (email, name, userRole, adminRole) => {
        const user = JSON.stringify({ 
            email: email, 
            name: name,  
            user: userRole,
            admin: adminRole,
            image: 'https://image.flaticon.com/icons/png/512/206/206853.png'
        });
        localStorage.setItem("loginUser", user);
    }










    return {
        logOutHandler,
        registerUser,
        loginUser,
        user,
        savedUserInToLocalStorage,
        isLoading,
        isRegSuccess,
    }
};

export default useFirebase;