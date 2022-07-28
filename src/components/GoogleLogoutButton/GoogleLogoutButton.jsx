import { googleLogout } from '@react-oauth/google'

const clientId = '1051610878268-8bl7kndmmufcjarcv9u6h92m3bs1gh11.apps.googleusercontent.com'

export default function GoogleLogoutButton() {

    const onSuccess = () => {
        console.log('Logout success')
    }

    return(
        <div id="google-logout">
            <googleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}        
            />
        </div>
    )
}