import { GoogleLogout } from 'react-google-login'

const clientId = '1051610878268-8bl7kndmmufcjarcv9u6h92m3bs1gh11.apps.googleusercontent.com'

export default function GoogleLogoutButton() {

    const onSuccess = () => {
        console.log('Logout success')
    }

    return(
        <div id="google-logout">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}        
            />
        </div>
    )
}