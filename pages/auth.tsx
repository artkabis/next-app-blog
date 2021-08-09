import React from "react"
import { StyledFirebaseAuth } from "react-firebaseui"
import firebase from "../firebase/clientApp"


const uiConfig ={
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
}