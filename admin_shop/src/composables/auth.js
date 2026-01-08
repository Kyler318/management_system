import { useCookies } from '@vueuse/integrations/useCookies'
const TokenKey = 'Admin-Token'

 const cookie = useCookies()

 //獲取token
export function getToken(){
    return cookie.get(TokenKey)
}
 //設置Token
export function setToken(token){
    return cookie.set(TokenKey,token)
}
 //移除Token
 export function removeToken(){
    return cookie.remove(TokenKey)
 }