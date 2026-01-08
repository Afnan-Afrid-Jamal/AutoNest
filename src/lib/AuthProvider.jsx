'use client'
import { useState, useEffect } from "react";
import { AuthContext } from "../lib/AuthContext";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase.config.js";
import LoadingSpinner from "../app/Components/Shared/LoadingSpinner";
import Swal from "sweetalert2"; // SweetAlert import

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // SweetAlert default dark options
    const swalDark = {
        background: "#1e1e1e",
        color: "#fff",
        confirmButtonColor: "#dc2626",
    };

    // Registration with email and password
    const customCreateUserWithEmailAndPassword = (email, password, userName, userPhotoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = userCredential.user;

                return updateProfile(newUser, {
                    displayName: userName,
                    photoURL: userPhotoUrl || "https://i.ibb.co.com/RGCchFdt/user-Images.png"
                })
                    .then(() => {
                        const updatedUser = {
                            ...newUser,
                            displayName: userName,
                            photoURL: userPhotoUrl || "https://i.ibb.co.com/RGCchFdt/user-Images.png"
                        };
                        setUser(updatedUser);
                        setLoading(false);

                        Swal.fire({
                            icon: "success",
                            title: "Registration Successful",
                            text: `Welcome ${userName}!`,
                            ...swalDark
                        });

                        return updatedUser;
                    });
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.message,
                    ...swalDark
                });
                throw error;
            });
    };

    // Google SignIn
    const customGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);

        return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(false);

                Swal.fire({
                    icon: "success",
                    title: "Google Login Successful",
                    text: `Welcome ${user.displayName || "User"}!`,
                    ...swalDark
                });

                return user;
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Google Login Failed",
                    text: error.message,
                    ...swalDark
                });
                throw error;
            });
    };

    // Login with email and password
    const customLoginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setLoading(false);

                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: `Welcome back ${user.displayName || "User"}!`,
                    ...swalDark
                });

                return user;
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                    ...swalDark
                });
                throw error;
            });
    };

    // Forget Password
    const handleForgetPassword = (email) => {
        const auth = getAuth();
        if (!email) {
            Swal.fire({
                icon: "warning",
                title: "Email Required",
                text: "Please enter your email to reset the password.",
                ...swalDark
            });
            throw new Error("Email is required");
        }
        return sendPasswordResetEmail(auth, email)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Reset Email Sent",
                    text: `Password reset email has been sent to ${email}`,
                    ...swalDark
                });
                return true;
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Send Reset Email",
                    text: error.message,
                    ...swalDark
                });
                throw error;
            });
    };

    // Logout
    const handleLogout = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false);

                Swal.fire({
                    icon: "success",
                    title: "Logged Out",
                    text: "You have been successfully logged out.",
                    ...swalDark
                });
            })
            .catch((error) => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Logout Failed",
                    text: error.message,
                    ...swalDark
                });
                throw error;
            });
    };

    // Check user state(Observer)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    const value = {
        user,
        loading,
        customCreateUserWithEmailAndPassword,
        customGoogleSignIn,
        customLoginWithEmailAndPassword,
        handleForgetPassword,
        handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <LoadingSpinner /> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
