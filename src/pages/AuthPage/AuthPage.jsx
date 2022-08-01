import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}){
    return(
        <main className="flex flex-row h-screen">
            <div className="w-1/2 bg-[url('../assets/pexels-jim-de-ramos-1263349.jpeg')] bg-cover bg-center"></div>
            <div className="flex flex-col justify-center bg-black text-white w-1/2">
                <SignupForm setUser={setUser}/>
                <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}
