import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'

export default function AuthPage({setUser}){
    return(
        <main>
            <h1>AuthPage</h1>
            <div className="auth-forms">
                <SignupForm setUser={setUser}/>
                <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}
