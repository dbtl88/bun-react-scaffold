export const dataUrl = import.meta.env.VITE_DATA_URL

const cognitoUrl = import.meta.env.VITE_COGNITO_URL
const cognitoClientId = import.meta.env.VITE_COGNITO_CLIENT_ID
const cognitoRedirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI
export const cognitoLoginUrl = `${cognitoUrl}/login?client_id=${cognitoClientId}&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=${cognitoRedirectUri}`

// NB: Cognito user pool client signout URIs must be set for the logout URL to work!
export const cognitoLogoutUrl = `${cognitoUrl}/logout?client_id=${cognitoClientId}&logout_uri=${cognitoRedirectUri}`
export const cognitoTokenUrl = `${cognitoUrl}/oauth2/token`
export const cognitoTokenCallBody = (code: string) => {
    return `redirect_uri=${cognitoRedirectUri}&client_id=${cognitoClientId}&grant_type=authorization_code&code=${code}`
}