import Cookies from 'js-cookie';


// helper to get the csrf token set by Django
const TOKEN = 'XSRF-TOKEN'
export const getCSRFtoken = () => Cookies.get(TOKEN)
