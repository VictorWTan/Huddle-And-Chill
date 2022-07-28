import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}){
    return(
        <main>
            <div className="flex justify-center">
                <SignupForm setUser={setUser}/>
                <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}
