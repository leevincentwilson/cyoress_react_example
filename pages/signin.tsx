import "../firebase/initialise"
import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
const SignIn = () =>{
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>

    </div>
  )
}