import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleLoginButton from "../../components/GoogleLoginButton/GoogleLoginButton";

export default function AuthPage({setUser}){
    return(
        <main className="flex flex-row h-screen">
            <div className="w-3/5 bg-[url('../assets/pexels-jim-de-ramos-1263349.jpeg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-center bg-white text-white w-2/5 font-dm">
                <div className="bg-[url('../assets/295224-200.png')] bg-no-repeat bg-contain h-20 mb-20 ml-6"></div>
                <GoogleLoginButton setUser={setUser}/>
                <span className="text-black self-center">or</span>
                <SignupForm setUser={setUser}/>
                <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}
