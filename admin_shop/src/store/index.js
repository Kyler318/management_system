import { createStore } from 'vuex'
import { login,getInfo } from '~/api/manager.js'
import { setToken, removeToken } from '~/composables/auth.js'

const store = createStore({
    state() {
        return{
            //用户信息
            user: {}
        }
    },
    mutations: {
        //記錄用户信息
        SET_USERINFO(state, user){
            state.user = user
        }
    },
    actions: {
        //登錄方法
        login({ commit }, {username, password}){
            return new Promise((resolve,reject)=> {
                login(username, password).then( res =>{
                    setToken(res.token)
                    resolve(res)
                }).catch(err => reject(err))
            })
        },
        //獲取用户信息
        getInfo({ commit }){
            return new Promise((resolve, reject) => {
                getInfo().then( res => {
                    commit('SET_USERINFO', res)
                    resolve(res)
                }).catch( err => reject(err))
            })
            
        },
        //退出登錄
        logout({ commit }){
            //移除cookie裏的token
            removeToken()
            //清除當前用戶狀態vuex
            commit('SET_USERINFO',{})
        }
    }
})

export default store