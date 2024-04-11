export default function isAuthenticated() {

    return typeof window !== 'undefined' && localStorage.getItem('user') != null
}
