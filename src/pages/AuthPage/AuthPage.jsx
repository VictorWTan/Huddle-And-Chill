import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";

export default function AuthPage({setUser}){
    return(
        <main className="flex flex-row h-screen">
            <div className="w-3/5 bg-[url('../assets/pexels-jim-de-ramos-1263349.jpeg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-center bg-black text-white w-2/5 font-dm">
                <GoogleLoginButton setUser={setUser}/>
                <span className="text-white self-center">or</span>
                <SignupForm setUser={setUser}/>
                <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}
