import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDwQGjE0lWRrIBM_Davf7OpbQiKQu6hf4I',
  authDomain: 'crwn-db-30d07.firebaseapp.com',
  projectId: 'crwn-db-30d07',
  storageBucket: 'crwn-db-30d07.appspot.com',
  messagingSenderId: '1094635509364',
  appId: '1:1094635509364:web:dc820faba7c7a9f2762321',
  measurementId: 'G-4C18CLG92L',
}

if (!firebase.apps.length) {
   firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if(!userAuth) return null

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnap = await userRef.get() 

  if(!userSnap.exists){
    const { displayName, email } = userAuth
    const createdAt = Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData 
      })
    } catch (error) {
      console.log('error creating user ' + error.message)
    }

  }

  return userRef 
}

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase