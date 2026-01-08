import { createStore } from 'vuex'
import { login,getInfo } from '~/api/manager.js'

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
        getInfo({ commit }){
            return new Promise((resolve, reject) => {
                getInfo().then( res => {
                    commit('SET_USERINFO', res)
                    resolve(res)
                }).catch( err => reject(err))
            })
            
        }
    }
})

export default store