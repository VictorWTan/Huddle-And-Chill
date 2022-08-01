import { GoogleLogin } from '@react-oauth/google'

const clientId = '1051610878268-8bl7kndmmufcjarcv9u6h92m3bs1gh11.apps.googleusercontent.com'

export default function GoogleLoginButton({setUser}) {

    const onSuccess = (res) => {
        console.log(`Login success. Current user: ${JSON.stringify(res.profileObj)} `)
    }

    const onFailure = (res) => {
        console.log(`Login Failed. Res: ${res}`)
    }

    return (
        <div id="google-login" className='m-1 flex justify-center self-center'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}