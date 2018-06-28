import firebase from 'firebase/app'
import 'firebase/auth'

const prodConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

const devConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

// if we aren in production, use that config, else dev.
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

// Initialise firebase, if it doesn't already exist. Otherwise carry on
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

// Intialise the auth module for use (others would go here such as db)
const auth = firebase.auth()

export { auth, firebase }
